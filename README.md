# Biaknabato Connect

Biaknabato Connect is a local-first community website prototype for Barangay Biaknabato, La Castellana, Negros Occidental. It includes public pages for announcements, services, events, directory contacts, and concern reporting, plus an admin transaction desk prototype.

This version intentionally skips database persistence. Resident request forms and admin transaction changes are UI-only until a backend is added.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Admin Access

Admin route:

```text
/admin
```

Set the local passcode in `.env.local`:

```bash
ADMIN_PASSCODE=change-this-before-sharing
```

If no passcode is set, the prototype falls back to `biaknabato-admin`.

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Included Documents

The planning document is available at:

```text
docs/biaknabato-connect-site-plan.pdf
docs/biaknabato-connect-site-plan.md
```

## Pre-Launch Notes

- Confirm current barangay officials, hotline numbers, fees, and release steps.
- Replace placeholder Punong Barangay name in certificate previews when official details are provided.
- Add database persistence before accepting live resident submissions.
- Add production-grade authentication before public admin deployment.
