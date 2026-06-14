# DDC ILMI SDS & COSHH Library

This GitHub Pages site provides QR-ready access to chemical safety information for the ILMI Project.

## What is included

- Interactive chemical cards
- GHS pictograms from the site inventory markings
- Separate **SDS** and **COSHH Assessment** tabs/buttons
- Google Drive links for each SDS and COSHH document
- Search and filters by hazard, manufacturer, and document status
- Auto-update setup: replace `inventory.xlsx`, and GitHub Actions regenerates `data.js`

## Files

```text
index.html                 Website page
data.js                    Auto-generated chemical data
inventory.xlsx             Master Excel inventory file
assets/                    GHS pictogram images
scripts/update_data.py     Converts Excel inventory to data.js
.github/workflows/         GitHub Actions auto-update workflow
qr_links.csv               QR links template
```

## Easy update method

Whenever the Excel inventory changes:

1. Open your GitHub repository.
2. Click `inventory.xlsx`.
3. Click **Upload files** or replace the existing file with the updated Excel file.
4. Keep the same file name exactly: `inventory.xlsx`.
5. Click **Commit changes**.
6. GitHub Actions will automatically run and update `data.js`.
7. Wait 1–3 minutes, open the website, and press **Ctrl + F5**.

## Important

Do not manually edit `data.js`, because it will be overwritten by the auto-update workflow.

To change chemical data, SDS links, COSHH links, quantities, manufacturers, or pictogram X marks, update only `inventory.xlsx`.

## Current data

Generated from the latest inventory with **36 chemicals**.

## Maintained by

HSE Department  
DaiDung Steel & Construction  
ILMI Project
