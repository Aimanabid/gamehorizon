import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of playgamehorizon.com and games published by PlayGame Horizon (SMC-Private) Limited.",
  path: "/terms",
  keywords: ["terms of service", "terms of use", "PlayGame Horizon terms"],
});

const LAST_UPDATED = "November 4, 2026";

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to these terms",
    body: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
          website playgamehorizon.com, together with any games, apps, documentation and
          related services (collectively, the &ldquo;Services&rdquo;) provided by PlayGame
          Horizon (SMC-Private) Limited (&ldquo;PlayGame Horizon&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo; or &ldquo;our&rdquo;), a company registered with the SECP in
          Pakistan with its registered office at Main Bazar, Old Anarkali, Lahore.
        </p>
        <p>
          By using the Services you confirm that you have read, understood and agree to be
          bound by these Terms. If you do not agree, please do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: (
      <>
        <p>
          You must be at least 13 years old to use the website. Some of our games are intended
          for a general audience while others are intended for mature audiences; where a game
          has a specific age rating, that rating prevails over this general requirement. If
          you are below the age of majority in your jurisdiction, you may use the Services
          only with the involvement of a parent or legal guardian.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "3. Accounts and communications",
    body: (
      <>
        <p>
          You do not need an account to browse playgamehorizon.com. If you contact us, apply
          for a job, or subscribe to the newsletter, you are responsible for providing
          accurate information. If you subscribe to our newsletter you consent to receive
          periodic emails from us, which you can stop at any time by replying with an
          unsubscribe request.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable use",
    body: (
      <>
        <p>When using the Services you agree not to:</p>
        <ul>
          <li>violate any applicable law, regulation or third-party right;</li>
          <li>
            copy, reproduce, republish, modify or redistribute material from the Services
            except as expressly permitted by these Terms;
          </li>
          <li>
            attempt to probe, scan, reverse-engineer or otherwise interfere with the security
            or operation of the Services;
          </li>
          <li>
            use automated systems (scrapers, crawlers, bots) in a way that places an
            unreasonable load on our infrastructure or bypasses rate limits;
          </li>
          <li>
            upload or transmit any virus, malware, or other code designed to harm or disrupt
            the Services or other users; or
          </li>
          <li>
            impersonate another person or misrepresent your affiliation with any person or
            entity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual property",
    body: (
      <>
        <p>
          The Services, including all text, graphics, logos, icons, images, software, game
          assets, trailers and the overall look and feel, are the exclusive property of
          PlayGame Horizon or our licensors and are protected by copyright, trademark and
          other intellectual property laws. Nothing in these Terms transfers any ownership of
          our intellectual property to you.
        </p>
        <p>
          Our press kit at <Link href="/press">playgamehorizon.com/press</Link> describes
          what you may use for editorial purposes (logos, screenshots, factsheets and
          boilerplate) under the terms stated on that page. All other uses require our prior
          written permission.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "6. Content you send to us",
    body: (
      <>
        <p>
          If you send us feedback, ideas or suggestions through the contact form, email, or
          social channels, you grant us a worldwide, royalty-free, perpetual, irrevocable,
          non-exclusive licence to use, reproduce and act on that feedback without any
          obligation to compensate you. You are responsible for ensuring that you have the
          right to send us anything you send, and that it does not infringe any third-party
          right or violate the law.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "7. Third-party links and services",
    body: (
      <>
        <p>
          The Services may contain links to third-party websites and services (including the
          Google Play Store, our social media pages, advertising partners and analytics
          providers). We do not control those third parties and are not responsible for their
          content, policies or practices. Accessing them is at your own risk and subject to
          their own terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "8. Advertising",
    body: (
      <>
        <p>
          The Services may display third-party advertising, including through Google AdSense.
          We do not endorse any advertiser or their products, and any transaction you enter
          into with an advertiser is strictly between you and the advertiser. Please see our{" "}
          <Link href="/privacy">Privacy Policy</Link> for more information about how
          advertising cookies and partners work.
        </p>
      </>
    ),
  },
  {
    id: "games",
    title: "9. Games and in-app purchases",
    body: (
      <>
        <p>
          Our games are distributed through storefronts such as Google Play. Your use of a
          game, and any in-app purchases you make, is governed primarily by the terms of the
          storefront from which you installed the game, together with any end-user licence
          agreement included in the game itself. Refund requests for in-app purchases should
          generally be made through the storefront; if you need additional help, contact us at{" "}
          <a href="mailto:info@playgamehorizon.com">info@playgamehorizon.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers",
    body: (
      <>
        <p>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
          without warranties of any kind, whether express or implied, including warranties of
          merchantability, fitness for a particular purpose and non-infringement. We do not
          warrant that the Services will be uninterrupted, timely, secure or error-free, or
          that any information you obtain through the Services will be accurate or reliable.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, PlayGame Horizon and its directors,
          employees and partners will not be liable for any indirect, incidental, special,
          consequential or exemplary damages, including loss of profits, goodwill, use or
          data, arising out of or in connection with your use of the Services. Our total
          liability to you for any claim arising out of these Terms or the Services will not
          exceed PKR 10,000 or the amount you paid us in the 12 months before the claim arose,
          whichever is greater.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "12. Indemnity",
    body: (
      <>
        <p>
          You agree to defend, indemnify and hold harmless PlayGame Horizon and its officers,
          directors, employees and agents from and against any claim, loss, liability or
          expense (including reasonable legal fees) arising out of your breach of these Terms
          or your misuse of the Services.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "13. Termination",
    body: (
      <>
        <p>
          We may suspend or terminate your access to the Services at any time, with or
          without notice, if we reasonably believe you have violated these Terms or if we are
          required to do so by law. Sections of these Terms that by their nature should
          survive termination (including intellectual property, disclaimers, limitation of
          liability and governing law) will survive.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "14. Governing law and jurisdiction",
    body: (
      <>
        <p>
          These Terms and any dispute arising out of or in connection with them are governed
          by the laws of the Islamic Republic of Pakistan, without regard to its conflict of
          law rules. The courts of Lahore, Pakistan will have exclusive jurisdiction over any
          such dispute, except that we may seek injunctive relief in any competent court to
          protect our intellectual property.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to these Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time. When we do, we will update the
          &ldquo;last updated&rdquo; date at the top of this page and, if the changes are
          material, make reasonable efforts to inform you. Continued use of the Services
          after changes become effective means you accept the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "16. Contact us",
    body: (
      <>
        <p>Questions about these Terms can be sent to:</p>
        <ul>
          <li>
            Email: <a href="mailto:info@playgamehorizon.com">info@playgamehorizon.com</a>
          </li>
          <li>
            Phone: <a href="tel:+923356507151">+92 335 6507151</a>
          </li>
          <li>Post: PlayGame Horizon (SMC-Private) Limited, Main Bazar, Old Anarkali, Lahore, Pakistan</li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="relative py-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-secondary text-sm font-semibold">
            Legal
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            The rules for using playgamehorizon.com and the games we publish.
          </p>
          <p className="mt-4 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-10">
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

            <article className="text-slate-300 leading-relaxed space-y-10">
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
                These Terms are written in English. If a translated version conflicts with the
                English version, the English version prevails.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
