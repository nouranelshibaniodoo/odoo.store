# Arabic Numbers Fix — Odoo Apps Store packages

This directory contains one package per Odoo major series from 12.0 through 20.0. Upload each ZIP to the matching branch/version.

For Arabic sessions, the addon selects Latin digits for date and time formatting in the backend web client. Other languages keep their normal behavior. It does not rewrite amounts, translations, decimal/group separators, or data stored in Odoo. It makes no external requests and collects no user data.

Odoo 12.0–14.0 use the legacy Moment.js integration and QWeb asset declaration. Odoo 15.0–19.0 wrap the Luxon localization service. Odoo 20.0 patches its localization plugin. These packages have been checked against upstream source structures; they have not been installed on live servers. Odoo 12.0–16.0 are past standard support dates; Odoo 17.0 standard support ended in September 2026.

Each ZIP has `arabic_numbers_fix/` at its root and includes the module icon, the English description page, the illustrative cover/feature graphics, and seven annotated screenshots captured from a running Odoo backend with the Arabic interface active (red boxes mark dates and times, blue boxes mark amounts, IDs and counts).

Rebuild and check: `python work/apply_store_assets.py && python work/verify_store.py`.
