# Brandon TV FAQ (Local Draft)

This folder contains a standalone FAQ page focused on Apple users migrating from an old app version to the current Brandon TV app.

## Run locally

From this folder, start a static server:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Files

- `index.html` - page structure and content
- `styles.css` - visual theme and responsive layout
- `script.js` - FAQ accordion, search filter, checklist helpers

## Deploy to `/FAQ`

When you are ready, place these files in the server path mapped to:

```text
https://www.itsbrandontv.com/FAQ
```

If your host needs an explicit index path, ensure `index.html` is the default file for that route.
