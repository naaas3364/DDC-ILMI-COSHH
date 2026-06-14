import zipfile, xml.etree.ElementTree as ET, re, json, datetime, pathlib
NS={'main':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
hazard_cols={3:{'key':'EXPLOSIVE','label':'Explosive','icon':'ghs01-explosive.png'},4:{'key':'OXIDIZING','label':'Oxidizing','icon':'ghs03-oxidizer.png'},5:{'key':'ACUTE TOXICITY','label':'Acute Toxicity','icon':'ghs06-acute-toxicity.png'},6:{'key':'CORROSIVE','label':'Corrosive','icon':'ghs05-corrosive.png'},7:{'key':'GAS UNDER PRESSURE','label':'Gas Under Pressure','icon':'ghs04-gas-under-pressure.png'},8:{'key':'FLAMMABLE','label':'Flammable','icon':'ghs02-flammable.png'},9:{'key':'HAZARDOUS TO ENVIRONMENT','label':'Hazardous to Environment','icon':'ghs09-environment.png'},10:{'key':'SERIOUS HEALTH HAZARD','label':'Serious Health Hazard','icon':'ghs08-serious-health-hazard.png'},11:{'key':'HEALTH HAZARD','label':'Health Hazard / Irritant','icon':'ghs07-health-hazard.png'}}
def col_to_num(col):
    n=0
    for ch in col:n=n*26+ord(ch)-64
    return n
def cell_ref(ref):
    m=re.match(r'([A-Z]+)(\d+)',ref); return int(m.group(2)), col_to_num(m.group(1))
def excel_date(v):
    try:
        f=float(v)
        if 20000<f<80000:
            return (datetime.datetime(1899,12,30)+datetime.timedelta(days=f)).strftime('%d-%b-%Y')
    except Exception: pass
    return str(v) if v is not None else ''
def load_xlsx(path):
    with zipfile.ZipFile(path) as z:
        ss=[]
        if 'xl/sharedStrings.xml' in z.namelist():
            root=ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in root.findall('main:si',NS):
                ss.append(''.join([t.text or '' for t in si.findall('.//main:t',NS)]))
        sheet=ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
        grid={}
        for c in sheet.findall('.//main:c',NS):
            r=c.attrib.get('r')
            if not r: continue
            row,col=cell_ref(r); t=c.attrib.get('t'); v=c.find('main:v',NS)
            if v is None:
                is_el=c.find('main:is',NS)
                val=''.join([e.text or '' for e in is_el.findall('.//main:t',NS)]) if is_el is not None else ''
            else:
                val=v.text or ''
                if t=='s': val=ss[int(val)] if val.isdigit() and int(val)<len(ss) else val
            grid[(row,col)]=val
        return grid
def build(inventory='inventory.xlsx', output='data.js'):
    grid=load_xlsx(inventory)
    def val(r,c):
        x=grid.get((r,c),'')
        return str(x).strip() if x is not None else ''
    chemicals=[]; seq=1
    for row in range(9,200):
        name=val(row,2)
        if not name or name.upper().startswith('TOTAL') or name.upper().startswith('NO'): continue
        hazards=[h for col,h in hazard_cols.items() if val(row,col).upper() in ('X','✓','YES','Y','1')]
        chemicals.append({'id':seq,'registerNo':val(row,1) or str(seq),'name':name,'hazards':hazards,'flashPoint':excel_date(val(row,12)) if val(row,12) else '', 'batchNo':val(row,13),'expiryDate':excel_date(val(row,14)) if val(row,14) else '', 'biologicalMonitoring':val(row,15),'qtyStored':val(row,16),'manufacturer':val(row,17),'sdsStatus':val(row,18),'sdsLink':val(row,19),'coshhStatus':val(row,20),'coshhLink':val(row,21),'coshhExpiryDate':excel_date(val(row,22)) if val(row,22) else '', 'briefingRecord':val(row,23),'excelRow':row})
        seq+=1
    text='// Auto-generated from inventory.xlsx by scripts/update_data.py. Do not edit manually.\nconst ghsLegend = '+json.dumps(list(hazard_cols.values()),ensure_ascii=False,indent=2)+';\n\nconst chemicals = '+json.dumps(chemicals,ensure_ascii=False,indent=2)+';\n'
    pathlib.Path(output).write_text(text,encoding='utf-8')
    print(f'Updated {output} with {len(chemicals)} chemicals.')
if __name__=='__main__': build()
