import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const output = resolve("docs/biaknabato-connect-site-plan.pdf");

const sections = [
  {
    title: "Product Intent",
    body: [
      "Biaknabato Connect will be a civic and community connection platform for Barangay Biak-na-Bato. The site should help residents quickly find announcements, services, events, local contacts, emergency information, and ways to participate in barangay programs.",
      "The first version should feel trustworthy, practical, and easy to scan. It should work well on mobile, since many residents will likely visit from a phone.",
    ],
  },
  {
    title: "Primary Audiences",
    bullets: [
      "Residents who need barangay announcements, schedules, forms, and contact information.",
      "Barangay officials and staff who need a clear place to publish updates and service guidance.",
      "Community groups, youth leaders, volunteers, and local partners coordinating activities.",
      "New residents or visitors who need orientation, directions, and essential local information.",
    ],
  },
  {
    title: "Experience Principles",
    bullets: [
      "Mobile-first: key information should be reachable within one or two taps.",
      "Clear and official: use direct language, visible dates, and recognizable barangay identity.",
      "Action-oriented: every page should answer what can be done next.",
      "Accessible: readable contrast, simple navigation, and text that works for older residents.",
      "Maintainable: content sections should be organized so future admin tools can be added cleanly.",
    ],
  },
  {
    title: "First-Version Site Map",
    bullets: [
      "Home: featured alert, quick links, latest announcements, upcoming activities, and a short introduction.",
      "Announcements: public notices, advisories, project updates, schedules, category filters, and detail pages.",
      "Services: clearance, certificates, IDs, complaint guidance, requirements, office hours, fees, and contacts.",
      "Events and Programs: calendar-style activities and program pages for youth, seniors, health, livelihood, disaster preparedness, and cleanups.",
      "Directory: barangay office contacts, officials, emergency hotlines, and community resources.",
      "About: barangay profile, mission, vision, location, basic history, and landmarks.",
      "Contact / Report a Concern: contact form, concern type selector, office details, and emergency guidance.",
    ],
  },
  {
    title: "Core Features",
    bullets: [
      "Responsive public website built with Next.js App Router.",
      "Homepage dashboard of community information.",
      "Announcement cards with categories and dates.",
      "Service guide pages with step-by-step requirements.",
      "Events/program list with upcoming and completed status.",
      "Emergency and office contact directory.",
      "Contact/report form UI prepared for future backend integration.",
      "Search-ready content structure for announcements and services.",
    ],
  },
  {
    title: "Suggested Content Model",
    body: [
      "Announcement: id, title, slug, category, date, summary, body, pinned, attachments.",
      "Service: id, title, slug, description, requirements, steps, fees, processing time, office hours, contact.",
      "Event: id, title, date, location, category, summary, status, organizer.",
      "Directory Entry: id, name, role or service, phone, email, office hours, priority.",
      "Concern Report: reporter name, contact, concern type, location, message, submitted at, status.",
    ],
  },
  {
    title: "Visual Direction",
    body: [
      "The design should be civic, warm, and clear rather than decorative. Use a restrained palette inspired by official community materials: deep green or blue for trust, a bright accent for actions, clean white surfaces, and high-contrast text.",
      "The homepage should immediately show Biaknabato Connect as the main first-viewport signal. Use real place imagery later if available; for the first build, use clean graphic structure and local identity cues without pretending to have official photos.",
    ],
  },
  {
    title: "Technical Plan",
    bullets: [
      "Use the existing Next.js 16 App Router project.",
      "Keep initial pages as Server Components unless interactivity is required.",
      "Use Tailwind CSS 4 already included in the project.",
      "Build static content from local TypeScript arrays first.",
      "Organize reusable data in app/lib or a top-level lib directory.",
      "Add client components only for interactive filters, search, tabs, or forms.",
      "Prepare route structure so a future database/admin dashboard can plug in cleanly.",
    ],
  },
  {
    title: "Build Phases",
    body: [
      "Phase 1: Public Site Foundation - replace the default Next page, build layout, navigation, footer, homepage, starter content, and contact/report UI.",
      "Phase 2: Content Depth - add detail pages, filters, search, printable service requirement views, and stronger local visuals once assets are available.",
      "Phase 3: Backend and Admin - add staff authentication, database-backed content, admin publishing, and concern status tracking.",
      "Phase 4: Community Features - add notifications, request tracking, event registration, volunteer signups, and multilingual support if needed.",
    ],
  },
  {
    title: "Immediate Next Steps",
    bullets: [
      "Confirm official barangay name styling, logo availability, and preferred colors.",
      "Decide which first-version pages are required for launch.",
      "Collect starter content: officials, hotlines, office hours, services, and three to five announcements.",
      "Build the public site foundation in the existing Next.js app.",
      "Review on mobile and desktop before adding backend features.",
    ],
  },
];

const width = 612;
const height = 792;
const margin = 54;
const bottom = 58;
const lineHeight = 14;
const contentWidth = width - margin * 2;
const pages = [];
let page = [];
let y = height - margin;

function textWidth(text, size) {
  return text.length * size * 0.48;
}

function wrap(text, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (textWidth(next, size) <= maxWidth) {
      line = next;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function newPage() {
  if (page.length) pages.push(page);
  page = [];
  y = height - margin;
}

function ensure(space) {
  if (y - space < bottom) newPage();
}

function addText(text, x, size, font = "F1", leading = lineHeight) {
  const escaped = text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  page.push(`BT /${font} ${size} Tf ${x} ${y} Td (${escaped}) Tj ET`);
  y -= leading;
}

function addParagraph(text, size = 10.5, indent = 0) {
  const lines = wrap(text, size, contentWidth - indent);
  ensure(lines.length * lineHeight + 4);
  for (const line of lines) addText(line, margin + indent, size);
  y -= 5;
}

function addBullet(text) {
  const lines = wrap(text, 10.3, contentWidth - 18);
  ensure(lines.length * lineHeight + 3);
  addText("-", margin, 10.3);
  y += lineHeight;
  for (const line of lines) addText(line, margin + 18, 10.3);
  y -= 3;
}

function addSection(title) {
  ensure(44);
  y -= 4;
  addText(title, margin, 15, "F2", 19);
}

function render() {
  addText("Biaknabato Connect", margin, 25, "F2", 31);
  addText("Overall Site Plan", margin, 14, "F2", 21);
  addText("Prepared: June 17, 2026", margin, 10, "F1", 20);
  y -= 8;

  for (const section of sections) {
    addSection(section.title);
    for (const paragraph of section.body ?? []) addParagraph(paragraph);
    for (const bullet of section.bullets ?? []) addBullet(bullet);
    y -= 4;
  }
  if (page.length) pages.push(page);
}

function buildPdf() {
  render();
  const objects = [];
  const add = (content) => {
    objects.push(content);
    return objects.length;
  };

  const fontRegular = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBold = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageRefs = [];

  for (let i = 0; i < pages.length; i += 1) {
    const footer = `BT /F1 8 Tf ${margin} 32 Td (Biaknabato Connect Site Plan) Tj ET BT /F1 8 Tf ${width - margin - 42} 32 Td (Page ${i + 1}) Tj ET`;
    const stream = `${pages[i].join("\n")}\n${footer}`;
    const contentRef = add(`<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`);
    const pageRef = add(`<< /Type /Page /Parent 0 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentRef} 0 R >>`);
    pageRefs.push(pageRef);
  }

  const pagesRef = add(`<< /Type /Pages /Kids [${pageRefs.map((ref) => `${ref} 0 R`).join(" ")}] /Count ${pageRefs.length} >>`);
  for (const ref of pageRefs) {
    objects[ref - 1] = objects[ref - 1].replace("/Parent 0 0 R", `/Parent ${pagesRef} 0 R`);
  }
  const catalogRef = add(`<< /Type /Catalog /Pages ${pagesRef} 0 R >>`);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogRef} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return pdf;
}

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, buildPdf(), "binary");
console.log(output);
