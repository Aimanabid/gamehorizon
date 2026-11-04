import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How PlayGame Horizon (SMC-Private) Limited collects, uses, stores and protects personal information across playgamehorizon.com and our games.",
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "PlayGame Horizon privacy"],
});

const LAST_UPDATED = "November 4, 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          PlayGame Horizon (SMC-Private) Limited (&ldquo;PlayGame Horizon&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) operates the website
          playgamehorizon.com and publishes mobile and PC games under the same brand. This
          Privacy Policy explains what information we collect when you visit our website or
          use our games, how we use that information, and the rights you have over it.
        </p>
        <p>
          We are a company registered with the Securities and Exchange Commission of Pakistan
          (SECP) with our registered office at Main Bazar, Old Anarkali, Lahore, Pakistan. For
          the purposes of applicable data protection law, PlayGame Horizon (SMC-Private)
          Limited is the data controller of the personal information described in this policy.
        </p>
        <p>
          By using our website or games, you agree to the collection and use of information in
          line with this policy. If you do not agree with any part of this policy, please stop
          using our services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    body: (
      <>
        <p>We collect information in three ways:</p>
        <ul>
          <li>
            <strong>Information you give us directly</strong> &mdash; for example your name,
            email address, phone number and the content of your message when you fill in our
            contact form, subscribe to our newsletter or apply for a job on our careers page.
          </li>
          <li>
            <strong>Information collected automatically</strong> &mdash; when you visit the
            website we automatically receive technical data such as your IP address, browser
            type, device type, operating system, referring URL, pages viewed, time on page and
            approximate location (derived from your IP).
          </li>
          <li>
            <strong>Information from third-party services</strong> &mdash; analytics,
            advertising and hosting partners (such as Google Analytics, Google AdSense and our
            hosting provider) may share aggregated technical information about your visit with
            us.
          </li>
        </ul>
        <p>
          We do not knowingly collect special categories of personal data (such as data
          revealing racial or ethnic origin, political opinions, religious beliefs or health
          information) through the website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>respond to enquiries, support requests and job applications;</li>
          <li>send newsletters and product updates if you have opted in;</li>
          <li>operate, maintain, debug and improve our website and games;</li>
          <li>understand how visitors use our site so we can make it more useful;</li>
          <li>display relevant advertising, where advertising is enabled; and</li>
          <li>comply with our legal, tax and regulatory obligations in Pakistan.</li>
        </ul>
        <p>
          We will never sell your personal information. Where the law requires a legal basis
          for processing, we rely on your consent, on the performance of a contract with you,
          on our legitimate interests in operating a lawful business, or on our need to meet a
          legal obligation.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies and similar technologies",
    body: (
      <>
        <p>
          Our website uses cookies and similar technologies (such as local storage and web
          beacons) to make the site work, to remember your preferences, to measure traffic,
          and to support advertising. The main categories are:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary</strong> &mdash; required for the site to function,
            including security and basic navigation.
          </li>
          <li>
            <strong>Analytics</strong> &mdash; help us understand how visitors interact with
            the site so we can improve it. These are typically set by Google Analytics.
          </li>
          <li>
            <strong>Advertising</strong> &mdash; used by Google AdSense and similar partners
            to show more relevant ads and to measure ad performance.
          </li>
        </ul>
        <p>
          Most browsers let you refuse or delete cookies through their settings. Refusing
          cookies may affect parts of the site.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "5. Advertising and third-party partners",
    body: (
      <>
        <p>
          We may display third-party advertising on the website, including through Google
          AdSense. Google and other third-party vendors use cookies to serve ads based on a
          user&rsquo;s prior visits to this website or other websites.
        </p>
        <p>
          Google&rsquo;s use of advertising cookies enables it and its partners to serve ads
          to our users based on their visit to our sites and/or other sites on the Internet.
          Users may opt out of personalised advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . Users may also opt out of some third-party vendors&rsquo; use of cookies for
          personalised advertising by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutads.info/choices
          </a>
          .
        </p>
        <p>
          You can read more about how Google uses information from sites or apps that use its
          services at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. How we share information",
    body: (
      <>
        <p>We share personal information only in limited circumstances:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the business (hosting,
            analytics, email delivery, payroll, legal and accounting) and are bound by
            contract to protect it.
          </li>
          <li>
            <strong>Advertising and measurement partners</strong> such as Google AdSense and
            Google Analytics, under their respective terms.
          </li>
          <li>
            <strong>Law enforcement or regulators</strong> when we are required to do so by a
            valid legal process.
          </li>
          <li>
            <strong>Successors</strong> in the event of a merger, acquisition or sale of all
            or part of the business.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. Data retention",
    body: (
      <>
        <p>
          We keep personal information only for as long as is necessary for the purpose it was
          collected, or as required by Pakistani law. Enquiries and contact messages are
          typically kept for up to 24 months; newsletter emails are kept until you
          unsubscribe; recruitment applications are kept for up to 12 months after the hiring
          decision unless you ask us to delete them sooner.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    body: (
      <>
        <p>
          We use reasonable administrative, technical and physical safeguards to protect
          personal information against loss, misuse and unauthorised access &mdash; including
          TLS encryption of our website, restricted access to internal systems, and a small
          team trained in handling user data responsibly. No system, however, is perfectly
          secure, and we cannot guarantee absolute security of information you send to us.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children&rsquo;s privacy",
    body: (
      <>
        <p>
          Our website is not directed to children under 13 and we do not knowingly collect
          personal information from them. Some of our games are family-friendly and may be
          played by children; where a game collects data from a child-directed audience it is
          designed to comply with applicable laws such as the Children&rsquo;s Online Privacy
          Protection Act (COPPA) and the Google Play Families policy. If you believe we may
          have inadvertently collected information from a child, please contact us and we will
          delete it.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "10. Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access the personal
          information we hold about you, to correct it, to delete it, to restrict or object to
          processing, or to withdraw a consent you previously gave. To exercise any of these
          rights, email us at{" "}
          <a href="mailto:info@playgamehorizon.com">info@playgamehorizon.com</a>. We will
          respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "11. International data transfers",
    body: (
      <>
        <p>
          Our team is based in Pakistan and some of our service providers (hosting, email,
          analytics, advertising) operate from other countries including the United States and
          the European Union. By using our website you understand that your information may
          be transferred to, stored in and processed in countries other than your own.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to this policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices or the law. When we do, we will update the &ldquo;last updated&rdquo;
          date at the top of this page. If the changes are material we will also make a
          reasonable effort to inform you &mdash; for example through a notice on the website.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "13. Contact us",
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal
          information, please contact us:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:info@playgamehorizon.com">info@playgamehorizon.com</a>
          </li>
          <li>
            Phone: <a href="tel:+923356507151">+92 335 6507151</a>
          </li>
          <li>Post: PlayGame Horizon (SMC-Private) Limited, Main Bazar, Old Anarkali, Lahore, Pakistan</li>
        </ul>
        <p>
          You can also reach us through our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold">
            Legal
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            How we collect, use and protect your information across playgamehorizon.com and
            our games.
          </p>
          <p className="mt-4 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-10">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-24 h-max">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
                On this page
              </h2>
              <nav className="flex flex-col gap-1.5 text-sm">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-slate-400 hover:text-brand-secondary transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Body */}
            <article className="prose-legal text-slate-300 leading-relaxed space-y-10">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display font-bold text-2xl text-white mb-4">
                    {s.title}
                  </h2>
                  <div className="space-y-4 [&_a]:text-brand-secondary [&_a]:underline [&_a:hover]:text-brand-primary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:text-white">
                    {s.body}
                  </div>
                </section>
              ))}

              <p className="pt-8 text-sm text-slate-500 border-t border-brand-border/40">
                This policy is written in English. If a translated version conflicts with the
                English version, the English version prevails.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
