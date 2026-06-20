import {
  Bell,
  CalendarDays,
  FileText,
  HeartPulse,
  Landmark,
  MapPin,
  Megaphone,
  Phone,
  ShieldAlert,
  Sprout,
  Users,
} from "lucide-react";

export const officialContact = {
  officeLocation: "Behind Brgy. Biaknabato Public Plaza",
  officeHours: "8:00 AM - 5:00 PM",
  facebookName: "Brgy Biaknabato Councils",
  facebookUrl: "https://www.facebook.com/brgybiaknabato.councils/",
};

export const barangayFacts = [
  {
    label: "Barangay office",
    value: officialContact.officeLocation,
    detail: "Local office location provided for this build.",
  },
  {
    label: "Office hours",
    value: officialContact.officeHours,
    detail: "Regular public assistance hours.",
  },
  {
    label: "Barangay type",
    value: "Rural barangay",
    detail: "Listed by PSA under La Castellana, Negros Occidental.",
  },
  {
    label: "2024 population",
    value: "4,497",
    detail: "2024 POPCEN listing from the Philippine Statistics Authority.",
  },
  {
    label: "2020 population",
    value: "4,113",
    detail: "2020 Census figure reported by PhilAtlas.",
  },
  {
    label: "Location",
    value: "10.3569, 123.1507",
    detail: "Approximate coordinates from PhilAtlas.",
  },
  {
    label: "Elevation",
    value: "467.5 m",
    detail: "Estimated elevation above sea level from PhilAtlas.",
  },
  {
    label: "Postal code",
    value: "6131",
    detail: "La Castellana postal code from PhilAtlas.",
  },
];

export const sourceNotes = [
  {
    name: "Philippine Statistics Authority PSGC",
    href: "https://psa.gov.ph/classification/psgc/barangays/1804517000",
    note: "Barangay list, rural/urban classification, PSGC codes, and 2024 POPCEN population.",
  },
  {
    name: "PhilAtlas Biaknabato Profile",
    href: "https://www.philatlas.com/visayas/r06/negros-occidental/la-castellana/biaknabato.html",
    note: "2020 population, coordinates, elevation, postal code, and location summary.",
  },
  {
    name: "PhilAtlas La Castellana Profile",
    href: "https://www.philatlas.com/visayas/r06/negros-occidental/la-castellana.html",
    note: "Municipal land area, barangay count, and population context.",
  },
];

export const quickActions = [
  {
    title: "Barangay Services",
    description: "Requirements, office steps, and request guidance.",
    href: "/services",
    icon: FileText,
  },
  {
    title: "Emergency Contacts",
    description: "Hotlines and office numbers in one scan-friendly place.",
    href: "/directory",
    icon: Phone,
  },
  {
    title: "Report a Concern",
    description: "Prepare concerns for routing to the right committee.",
    href: "/report",
    icon: ShieldAlert,
  },
  {
    title: "Community Events",
    description: "Programs, assemblies, cleanups, and health activities.",
    href: "/events",
    icon: CalendarDays,
  },
];

export const announcements = [
  {
    title: "Community information hub ready for review",
    category: "Platform",
    date: "June 17, 2026",
    summary:
      "Biaknabato Connect starts as a public-facing website for announcements, services, events, contacts, and concern reporting.",
    pinned: true,
  },
  {
    title: "Starter content needs barangay validation",
    category: "Content",
    date: "June 2026",
    summary:
      "Current officials, hotlines, service fees, and full requirements should be confirmed before public launch.",
    pinned: false,
  },
  {
    title: "Prepared for Kanlaon-area advisories",
    category: "Safety",
    date: "Draft workflow",
    summary:
      "The site structure includes urgent notices and emergency contact pathways for time-sensitive advisories.",
    pinned: false,
  },
];

export const services = [
  {
    title: "Barangay Clearance",
    description:
      "Request form for residents preparing a barangay clearance using the certificate details needed by the office.",
    requirements: [
      "Full name",
      "Civil status",
      "Purok or sitio",
      "Barangay address",
      "Cedula number",
      "Purpose",
    ],
    status: "Request form ready",
    href: "/services/barangay-clearance",
    icon: Landmark,
  },
  {
    title: "Certificate of Residency",
    description:
      "Request form for residents who need proof of residency from Barangay Biaknabato.",
    requirements: ["Full name", "Civil status", "Purok or sitio", "Purpose"],
    status: "Request form ready",
    href: "/services/certificate-of-residency",
    icon: FileText,
  },
  {
    title: "Certificate of Indigency",
    description:
      "Request form for residents who need indigency certification subject to barangay verification.",
    requirements: ["Full name", "Civil status", "Purok or sitio", "Purpose"],
    status: "Request form ready",
    href: "/services/certificate-of-indigency",
    icon: FileText,
  },
  {
    title: "Health and Welfare Assistance",
    description:
      "A route for health program notices, senior citizen support, and family assistance referrals.",
    requirements: ["Resident information", "Concern type", "Contact number"],
    status: "Template ready",
    href: "/services",
    icon: HeartPulse,
  },
  {
    title: "Concern Reporting",
    description:
      "A prepared form for sanitation, road, peace and order, drainage, disaster risk, or public service concerns.",
    requirements: ["Concern location", "Description", "Optional contact"],
    status: "Local UI only",
    href: "/report",
    icon: Megaphone,
  },
];

export const events = [
  {
    title: "Barangay Assembly",
    date: "To be scheduled",
    location: "Barangay covered area or official venue",
    type: "Governance",
    description: "Public updates, consultation, and program reporting.",
  },
  {
    title: "Clean and Green Drive",
    date: "Monthly template",
    location: "Purok-based cleanup areas",
    type: "Environment",
    description: "Community cleanup and waste management coordination.",
  },
  {
    title: "Health Outreach",
    date: "To be coordinated",
    location: "Barangay health station or mobile site",
    type: "Health",
    description: "Basic checkups, announcements, and referral information.",
  },
  {
    title: "Disaster Preparedness Briefing",
    date: "Seasonal priority",
    location: "Barangay hall / evacuation briefing point",
    type: "Safety",
    description: "Preparedness reminders for rain, lahar, and Kanlaon-area advisories.",
  },
];

export const directory = [
  {
    name: "Barangay Office",
    role: "Primary resident assistance desk",
    contact: officialContact.officeLocation,
    hours: officialContact.officeHours,
    icon: Landmark,
  },
  {
    name: "Emergency / Disaster Desk",
    role: "Urgent safety coordination",
    contact: "To confirm",
    hours: "For urgent advisories",
    icon: ShieldAlert,
  },
  {
    name: "Barangay Health Contact",
    role: "Health program and referral coordination",
    contact: "To confirm",
    hours: "Clinic schedule to confirm",
    icon: HeartPulse,
  },
  {
    name: "Community Programs",
    role: "Youth, senior citizen, livelihood, and volunteer programs",
    contact: officialContact.facebookName,
    hours: "Announcements via official page",
    icon: Users,
  },
];

export const programAreas = [
  { name: "Announcements", icon: Bell },
  { name: "Services", icon: FileText },
  { name: "Events", icon: CalendarDays },
  { name: "Safety", icon: ShieldAlert },
  { name: "Health", icon: HeartPulse },
  { name: "Agriculture", icon: Sprout },
  { name: "Directory", icon: Phone },
  { name: "Location", icon: MapPin },
];
