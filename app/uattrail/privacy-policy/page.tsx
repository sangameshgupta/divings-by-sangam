import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAT Trail Privacy Policy",
  description: "Privacy policy for the UAT Trail Chrome extension.",
};

const sections = [
  {
    title: "Data Collection",
    body: [
      "UAT Trail may collect the following data only when a user starts a UAT recording session on Salesforce pages:",
    ],
    items: [
      "Salesforce page title and URL",
      "Salesforce object and record context when visible in the URL",
      "Field labels and field changes",
      "Button, link, and menu clicks",
      "Visible Salesforce validation errors and toast messages",
      "Optional screenshots",
      "Optional notes entered by the user",
    ],
  },
  {
    title: "How Data Is Used",
    body: [
      "Captured data is used only to generate UAT evidence reports for the user.",
    ],
  },
  {
    title: "Data Storage",
    body: [
      "UAT Trail stores active session data and preferences locally in Chrome extension storage. Reports are generated locally in the browser.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "UAT Trail does not sell, share, transfer, or transmit captured data to external servers or third parties.",
      "Users may manually export and share generated reports.",
    ],
  },
  {
    title: "Authentication",
    body: [
      "UAT Trail does not use Salesforce OAuth and does not collect Salesforce passwords, access tokens, or credentials.",
    ],
  },
  {
    title: "User Controls",
    body: [
      "Users can disable screenshots, hide field values, redact sensitive fields, and hide URLs or record IDs before starting a session.",
    ],
  },
];

export default function UatTrailPrivacyPolicyPage() {
  return (
    <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <section className="pt-16 pb-24 animate-fade-up">
        <div className="max-w-3xl mb-12">
          <span className="font-label text-[10px] tracking-[0.2em] text-secondary uppercase mb-5 block">
            Chrome Extension Privacy Policy
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.92] text-on-surface mb-5 font-headline">
            UAT Trail Privacy Policy
          </h1>
          <p className="text-sm uppercase tracking-[0.18em] text-on-surface-variant font-label mb-8">
            Effective date: April 25, 2026
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-2xl font-light">
            UAT Trail is a Chrome extension for capturing Salesforce UAT evidence reports. This policy explains what data the extension handles and how it is used.
          </p>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={`bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 animate-fade-up stagger-${Math.min(index + 1, 6)}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline text-on-surface">
                {section.title}
              </h2>
              <div className="grid gap-4 text-on-surface-variant text-base md:text-lg leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul className="list-disc pl-6 grid gap-2 marker:text-secondary">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-6 bg-primary-container/12 border border-primary/20 rounded-xl p-8 animate-fade-up stagger-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline text-on-surface">
            Contact
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            For privacy questions, contact{" "}
            <a
              className="text-primary hover:text-primary-fixed transition-colors underline underline-offset-4"
              href="mailto:sangameshgella@sangamusings.com"
            >
              sangameshgella@sangamusings.com
            </a>
            .
          </p>
        </section>
      </section>
    </div>
  );
}
