# Biaknabato Connect

Overall site plan

Prepared: June 17, 2026

## Product Intent

Biaknabato Connect will be a civic and community connection platform for Barangay Biak-na-Bato. The site should help residents quickly find announcements, services, events, local contacts, emergency information, and ways to participate in barangay programs.

The first version should feel trustworthy, practical, and easy to scan. It should work well on mobile, since many residents will likely visit from a phone.

## Primary Audiences

- Residents who need barangay announcements, schedules, forms, and contact information.
- Barangay officials and staff who need a clear place to publish updates and service guidance.
- Community groups, youth leaders, volunteers, and local partners coordinating activities.
- New residents or visitors who need orientation, directions, and essential local information.

## Experience Principles

- Mobile-first: key information should be reachable within one or two taps.
- Clear and official: use direct language, visible dates, and recognizable barangay identity.
- Action-oriented: every page should answer "what can I do next?"
- Accessible: readable contrast, simple navigation, and text that works for older residents.
- Maintainable: content sections should be organized so future admin tools can be added cleanly.

## First-Version Site Map

1. Home
   - Current alert or featured announcement.
   - Quick links for services, hotlines, events, and requests.
   - Latest announcements and upcoming activities.
   - Short introduction to Biaknabato Connect.

2. Announcements
   - Barangay news, advisories, public notices, project updates, and schedules.
   - Filter by category and date.
   - Each announcement should show title, date, category, summary, and full details.

3. Services
   - Barangay clearance guidance.
   - Certificate requests.
   - ID or residency-related information.
   - Complaint or concern reporting flow.
   - Requirements, office hours, fees if applicable, and contact person.

4. Events and Programs
   - Calendar-style list of activities.
   - Program pages for youth, senior citizens, health, livelihood, disaster preparedness, and cleanup drives.
   - RSVP or interest form can come in a later phase.

5. Directory
   - Barangay office contact information.
   - Officials and committee contacts.
   - Emergency hotlines.
   - Health, safety, and community resource links.

6. About
   - Barangay profile.
   - Mission, vision, and local identity.
   - Map/location section.
   - Basic history and landmarks.

7. Contact / Report a Concern
   - Contact form.
   - Concern type selector.
   - Office address and operating hours.
   - Clear note for emergencies to call the hotline instead of waiting for a form response.

## Core Features

- Responsive public website built with Next.js App Router.
- Homepage dashboard of community information.
- Announcement cards with categories and dates.
- Service guide pages with step-by-step requirements.
- Events/program list with upcoming and completed status.
- Emergency and office contact directory.
- Contact/report form UI prepared for future backend integration.
- Search-ready content structure for announcements and services.

## Suggested Content Model

Announcement:
- id
- title
- slug
- category
- date
- summary
- body
- pinned
- attachments

Service:
- id
- title
- slug
- description
- requirements
- steps
- fees
- processing_time
- office_hours
- contact

Event:
- id
- title
- date
- location
- category
- summary
- status
- organizer

Directory Entry:
- id
- name
- role_or_service
- phone
- email
- office_hours
- priority

Concern Report:
- reporter_name
- contact
- concern_type
- location
- message
- submitted_at
- status

## Visual Direction

The design should be civic, warm, and clear rather than decorative. Use a restrained palette inspired by official community materials: deep green or blue for trust, a bright accent for actions, clean white surfaces, and high-contrast text.

The homepage should immediately show "Biaknabato Connect" as the main first-viewport signal. Use real place imagery later if available; for the first build, we can use clean graphic structure and local identity cues without pretending to have official photos.

## Technical Plan

- Use the existing Next.js 16 App Router project.
- Keep initial pages as Server Components unless interactivity is required.
- Use Tailwind CSS 4 already included in the project.
- Build static content from local TypeScript arrays first.
- Organize reusable data in `app/lib` or a top-level `lib` directory.
- Add client components only for interactive filters, search, tabs, or forms.
- Prepare route structure so a future database/admin dashboard can plug in without redesigning the public site.

## Build Phases

Phase 1: Public Site Foundation
- Replace the default Next page.
- Build responsive layout, navigation, footer, and homepage.
- Add starter content for announcements, services, events, and directory.
- Add polished contact/report concern page UI.

Phase 2: Content Depth
- Add detail pages for announcements and services.
- Add category filters and search.
- Add printable service requirement views if needed.
- Add stronger local visuals once photos/logos are available.

Phase 3: Backend and Admin
- Add authentication for barangay staff.
- Add database-backed announcements, services, events, and reports.
- Add admin publishing workflow.
- Add status tracking for submitted concerns.

Phase 4: Community Features
- Add SMS/email notifications if desired.
- Add resident request tracking.
- Add event registration or volunteer signups.
- Add multilingual support if needed.

## Immediate Next Steps

1. Confirm the official barangay name styling, logo availability, and preferred colors.
2. Decide which first-version pages are required for launch.
3. Collect starter content: officials, hotlines, office hours, services, and three to five announcements.
4. Build the public site foundation in the existing Next.js app.
5. Review on mobile and desktop before adding backend features.

