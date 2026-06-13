# DDC ILMI SDS & COSHH Assessment Library

This repository contains a simple GitHub Pages website for quick access to chemical SDS and COSHH assessment documents used at the ILMI Project.

## Purpose

This page helps site personnel quickly access:

- Chemical name
- GHS pictograms
- Manufacturer / trade name
- Flash point
- Batch / lot number
- HCS expiry date
- SDS & COSHH Assessment link

## Files

- `index.html` - Website layout and search page
- `data.js` - Chemical inventory data taken from the Excel register
- `assets/` - Official GHS pictogram image files
- `ddc_msds_mapping.md` - Mapping used to convert Excel X marks into GHS pictograms
- `qr_links.csv` - QR links to be used in Excel or QR code generators

## How QR Links Work

Each chemical has a unique ID.

Example:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/?id=1
```

When this link is converted to a QR code and scanned, it opens the chemical details page and the button named **SDS & COSHH Assessment**.

## Important Link Note

The Excel file contains the document links from the last column. If the link is a full OneDrive / SharePoint `https://` link, it will open directly.

If the link is a relative path such as:

```text
COSHH%20&%20MSDS/filename.pdf
```

then you must upload the same `COSHH & MSDS` PDF folder to the GitHub repository, or replace the value in `data.js` with the full OneDrive sharing link.

## Maintained By

HSE Department  
DaiDung Steel & Construction  
ILMI Project
