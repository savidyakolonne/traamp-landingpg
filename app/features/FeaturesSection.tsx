"use client";

import React, {useState} from "react";

type Feature = {
  id: string;
  title: string;
  short: string;
  details: string[]; // bullet points with more info
  note?: string; // optional small note
};

const touristsFeatures: Feature[] = [
  {
    id: "search",
    title: "Search for Guides, Places & Activities",
    short: "Fast, filterable search for nearby guides, destinations and activities.",
    details: [
      "Full-text and faceted search: by location.",
      "list sync: results appear on an interactive list simultaneously.",
      "Smart suggestions: Visible suggestions in you dashboard include trending places and verified guides.",
      "Save favorites and build a trip wishlist for later bookings."
    ],
  },
  {
    id: "weather",
    title: "Check Weather",
    short: "Local real-time weather and 7-day forecast for your destination.",
    details: [
      "Auto-detect destination weather using GPS or manual location search.",
      "Weather-aware recommendations: suggest indoor activities for rain, sun-safe tips for strong UV.",
      "Quick-view icons: temperature, precipitation chance, wind, and sunrise/sunset times."
    ]
  },
  {
    id: "emergency",
    title: "Emergency Contacts",
    short: "One-tap emergency actions and local contact information.",
    details: [
      "Local emergency services (police, ambulance) pre-populated per country/city.",
      "Custom emergency contacts: add family, embassy, and your guide's emergency number.",
      "Panic-mode: sends your live GPS location and a pre-set message to selected contacts."
    ],
    note: "Panic-mode requires location permission."
  },
  {
    id: "ai-map",
    title: "AI Map",
    short: "Context-aware AI-powered map to plan routes and discover hidden gems.",
    details: [
      "Semantic highlights: points of interest labeled by categories and user sentiment (e.g., scenic viewpoint).",
      "Suggested routes: optimized walking/driving routes with optional pit-stops and safety scoring.",
      "Personalized hints: recommendations based on travel style (adventure, leisure, cultural)."
    ]
  },
  {
    id: "chatbot",
    title: "Chatbot (Travel Assistant)",
    short: "AI assistant to answer quick travel questions and provide itinerary ideas.",
    details: [
      "Natural-language Q&A: ask about local customs, currency, transport, or simple translations.",
      "Itinerary builder: give the bot your interests and time and receive a suggested day plan.",
      "Offline snippets: cached answers for basic safety tips when offline."
    ]
  },
  {
    id: "packages",
    title: "Select a Guide Package",
    short: "Get your SLTDA registered guide with a transparent tour package.",
    details: [
      "Clear package breakdown: what’s included (transport, meals, entrance fees).",
      "Compare packages side-by-side with ratings and cancellation rules.",
      "Connect with your guide via live chat service."
    ]
  },
  {
    id: "chat-guide",
    title: "Chat with Guide",
    short: "Encrypted messaging to coordinate details before and during the trip.",
    details: [
      "Pre-book chat: ask guides questions before booking to clarify expectations.",
      "Media sharing: exchange photos, meeting points, and documents (tickets, permits).",
      "Message status indicators: sent, delivered, read; message history saved per booking."
    ]
  }
];

const guidesFeatures: Feature[] = [
  {
    id: "create-package",
    title: "Create Tour Packages",
    short: "Intuitive package builder with pricing, schedules, and extras.",
    details: [
        "Create upto 5 tour packages",
      "Step-by-step package creation: name, availability, price, included/excluded items.",
      "Add optional extras: equipment rental, meals, private transport, premium experiences.",
      "Availability calendar: set repeating schedules or ad-hoc dates and block outs."
    ]
  },
  {
    id: "guide-chat",
    title: "Chat with Tourists",
    short: "Secure chat to confirm bookings and coordinate meetups.",
    details: [
      "Booking-triggered messaging: chat opens after a tourist selects your package.",
      "Quick-replies & templates: save standard responses (meeting points, payment instructions).",
      "In-chat booking actions: accept/decline requests, send invoices, and share meeting plans."
    ]
  },
  {
    id: "guide-weather",
    title: "Check Weather",
    short: "Weather-aware scheduling and safety alerts for active tours.",
    details: [
      "Route impact alerts: get notified if severe weather affects an active tour route.",
      "Auto-suggest reschedule windows when conditions are poor.",
      "Share live weather snapshot with booked tourists."
    ]
  },
  {
    id: "guide-emergency",
    title: "Emergency & Support",
    short: "Guide toolkit for emergencies with direct access to local services.",
    details: [
      "Verified emergency numbers and embassy contacts in your operating region.",
      "Report incidents: upload incident reports with photos and GPS traces for support review.",
      "Contact platform support from within the app for urgent help."
    ]
  },
  {
    id: "manage-reviews",
    title: "Reviews & Ratings",
    short: "Get feedback and build a trusted profile.",
    details: [
      "Get positive feedback from your customers and rate yourself.",
      "Review analytics: trends over time, rating breakdowns, and response success metrics.",
      "Badging & verification: complete identity and qualification checks to earn trust badges."
    ]
  }
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"tourists" | "guides">("tourists");
  const [openFeature, setOpenFeature] = useState<string | null>("search");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section intro (assume page header exists elsewhere) */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Features</h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A modern travel app built to connect tourists with local SLTDA certified guides - packed with safety, AI
          assistance and smooth communication tools.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-slate-100 p-1 gap-1" role="tablist" aria-label="Feature tabs">
          <TabButton
            label="Tourists"
            active={activeTab === "tourists"}
            onClick={() => { setActiveTab("tourists"); setOpenFeature(touristsFeatures[0].id); }}
          />
          <TabButton
            label="Guides"
            active={activeTab === "guides"}
            onClick={() => { setActiveTab("guides"); setOpenFeature(guidesFeatures[0].id); }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: interactive feature list */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {(activeTab === "tourists" ? touristsFeatures : guidesFeatures).map((f) => (
              <article
                key={f.id}
                className={`group relative rounded-2xl p-6 border border-green-600 transition-shadow hover:shadow-xl bg-white`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-3">
                      <FeatureIcon id={f.id} />
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{f.short}</p>
                  </div>

                  <div className="ml-auto flex items-center gap-2">
                    <button
                      onClick={() => setOpenFeature((prev) => (prev === f.id ? null : f.id))}
                      aria-expanded={openFeature === f.id}
                      aria-controls={`feature-${f.id}`}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <span className="hidden sm:inline">{openFeature === f.id ? "Hide" : "Details"}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openFeature === f.id ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  id={`feature-${f.id}`}
                  className={`mt-4 text-sm text-gray-700 transition-max-h overflow-hidden ${
                    openFeature === f.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc pl-5 space-y-2 mb-3">
                    {f.details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                  {f.note && <p className="text-xs text-gray-500">{f.note}</p>}

                  {f.id === "chatbot" && openFeature === f.id && (
                    <div className="mt-4 flex flex-col gap-2 text-xs">
                      <strong>Example prompts:</strong>
                      <div className="flex flex-wrap gap-2">
                        <kbd className="px-2 py-1 rounded bg-green-200 border">Nearby locations to visit</kbd>
                        <kbd className="px-2 py-1 rounded bg-green-200 border">Temples near me</kbd>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right column: visual / stats / CTA */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-green-600 to-green-500 text-white shadow-lg">
              <h4 className="text-lg font-semibold">Why users love Traamp</h4>
              <p className="mt-3 text-sm opacity-90">
                Safety-first features, real-time communication and AI-assisted discovery make trips smoother and
                more enjoyable for both tourists and guides.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Stat label="Avg. Guide Rating" value="4.8/5" />
                <Stat label="Response Time" value="< 10 mins" />
                <Stat label="Panic Mode Enabled" value="Yes" />
                <Stat label="AI Routes Suggested" value="1,000+" />
              </div>

            </div>

            <div className="rounded-2xl p-4 border bg-white">
              <h5 className="font-medium">Accessibility & Performance</h5>
              <p className="text-xs text-gray-500 mt-2">
                Built with responsiveness, keyboard navigation and ARIA attributes in mind. Components degrade gracefully
                on low bandwidth.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile quick nav */}
      <div className="mt-8 lg:hidden">
        <label className="block text-sm text-gray-600 mb-2">Quick jump to feature</label>
        <select
          onChange={(e) => {
            const id = e.target.value;
            setOpenFeature(id || null);
            // scroll to item
            const el = document.getElementById(`feature-${id}`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="">— choose feature —</option>
          {(activeTab === "tourists" ? touristsFeatures : guidesFeatures).map((f) => (
            <option key={f.id} value={f.id}>{f.title}</option>
          ))}
        </select>
      </div>
    </section>
  );
}


/* ---------- Small helper components below ---------- */

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-indigo:ring-red-500 transition 
        ${active ? "bg-green-400 shadow" : "text-gray-600 hover:bg-white/60"}`}
    >
      {label}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-white/90">{label}</span>
      <strong className="text-sm">{value}</strong>
    </div>
  );
}

function FeatureIcon({ id }: { id?: string }) {
  // simple switch of inline SVGs so there are zero external deps
  const size = 18;
  switch (id) {
    case "search":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "weather":
    case "guide-weather":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 15h13a4 4 0 0 0 0-8 5 5 0 1 0-9.9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 3v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "emergency":
    case "guide-emergency":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "ai-map":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 6l7-3 7 3 4-2v13l-4 2-7-3-7 3V6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chatbot":
    case "chat-guide":
    case "guide-chat":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "packages":
    case "create-package":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "manage-reviews":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
  }
}