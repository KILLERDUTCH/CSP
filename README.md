# CSP Team

Cyber Security Protocol.

## Files

- `index.html` — site structure
- `style.css` — black UI, responsive layouts and cursor light
- `app.js` — tool index, device preview and feedback form
- `tools.json` — editable tool list
- `feedback-config.js` — public Apps Script endpoint URL
- `google-apps-script/Code.gs` — Telegram feedback relay

## Telegram feedback setup (no PHP)

1. Open [Google Apps Script](https://script.google.com/) and create a private project.
2. Paste `google-apps-script/Code.gs` into the editor.
3. In **Project Settings → Script Properties**, add:
   - `TELEGRAM_BOT_TOKEN` = your bot token
   - `TELEGRAM_CHAT_ID` = your Telegram chat ID
4. Deploy → New deployment → Web app. Set **Execute as: Me** and access to **Anyone**.
5. Copy the Web App URL into `feedback-config.js` as the value of `CSP_FEEDBACK_ENDPOINT`.
6. Start a chat with your bot once, then host the site over HTTPS.

Keep the Apps Script project private. Never place the bot token in this website repository or in `tools.json`.

## Add a tool

Add another object to the array in `tools.json` with `name`, `description`, `category`, `icon`, `url`, and `status`.
