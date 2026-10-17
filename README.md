# Malik Naveed — portfolio site

Plain HTML, no build step. Vercel serves it as-is.

## Files

- `index.html` — the page layout, styles and animations. You rarely need to touch it.
- `data.js` — all the content: intro, projects, experience, skills, contact. Edit this.
- `images/` — your photos and project screenshots.

## Add your photo

Save a portrait as `images/profile.jpg`. Until it exists, the page shows your initials.

## Add a new project

1. Open `data.js` and find `projects: [`.
2. Copy one whole project block, from `{` to the matching `},`.
3. Paste it after the last project and change the text.
4. `flow` is the animated pipeline. Write 3 to 6 short steps in order. Any step with
   "review", "approval" or "check" in it is drawn in amber as the human step.
5. Status can be `"Live"`, `"Prototype"` or `"In build"`.

## Add screenshots to a project

Put the images in `images/` and list them in that project:

```js
images: ["images/voice-1.jpg", "images/voice-2.jpg"],
```

Landscape images around 1600 × 1000 look best.

## Change the animated console at the top

Edit `heroRuns` in `data.js`. Each step has a `kind`: `trigger`, `tool`, `think`, `human` or `done`.

## Publish a change

```
git add .
git commit -m "Describe what you changed"
git push
```

Vercel redeploys within a minute.

## Check it locally first

Double-click `index.html`. It works straight from your Mac without a server.
