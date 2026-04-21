import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Annual Tabletop's security posture — hosting, data handling, tenancy isolation, AI model data flow, sub-processors, logging, SOC 2 plan, HIPAA BAA, VPAT / 508, incident response, and vulnerability disclosure.",
};

/**
 * IA Section 11 / Appendix D: Security page. This page is the one every
 * procurement team opens before a POC. It maps directly to CAIQ, SIG-Lite,
 * and the top dozen cyber-insurance / SOC 2 diligence questions we've been
 * asked. It is not a stub — it is the trust artifact.
 */
export default function SecurityPage() {
  return (
    <>
      <Hero
        eyebrow="Security"
        title="We run tabletops for a living. Ours run continuously."
        subtitle="Every answer on this page is the one we'd expect if Annual Tabletop were the vendor being onboarded. The headings below mirror CAIQ and SIG-Lite so procurement teams can paste responses straight into their questionnaire."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight space-y-10 text-ink-700">
          <p className="text-sm text-ink-500">
            Last updated 20 April 2026. Material changes are announced to
            customers and logged in the{" "}
            <Link href="/status" className="text-signal underline">
              status page
            </Link>
            .
          </p>

          <Section heading="Hosting & data residency">
            <p>
              Annual Tabletop is hosted on a SOC 2 Type II cloud provider in
              U.S. regions (us-east-1 primary, us-west-2 DR). Data does not
              leave the United States by default. Enterprise / State tier
              customers can request pinned single-region residency and, with
              notice, FedRAMP-boundaried sub-processors for the components that
              have them.
            </p>
          </Section>

          <Section heading="Tenancy & isolation">
            <p>
              Multi-tenant by default, with per-tenant logical isolation
              enforced at the database row, object-storage prefix, and KMS key
              level. Every request is scoped to a tenant ID that travels in a
              signed request context; there is no cross-tenant read path by
              design. Enterprise / State and MSP / Partner customers can opt
              into dedicated tenancy with a per-customer VPC and KMS CMK at
              contract time.
            </p>
          </Section>

          <Section heading="Data handling & encryption">
            <p>
              Customer data is encrypted in transit with TLS 1.2 or higher and
              at rest with AES-256. Keys are managed in AWS KMS under a
              per-environment CMK hierarchy; dedicated-tenancy customers get
              their own CMK. Database and object-storage backups run daily,
              are encrypted with the same CMK, and are retained for 35 days.
              Customer-requested deletion is honored within 30 days and
              propagated to backups on the backup-retention rollover.
            </p>
          </Section>

          <Section heading="How Atlas uses your exercise data">
            <p>
              Atlas is our AI facilitator. During an exercise, player inputs,
              injects, and facilitator prompts are sent to a model provider
              over a TLS-terminated private connection. Model providers are
              contractually bound to a zero-retention data-processing addendum
              — your exercise text is not retained by the model provider and{" "}
              <strong>is not used to train any model</strong>, ours or
              theirs. Full list of model providers below under{" "}
              <em>Sub-processors</em>. AARs are generated against a
              deterministic schema and stored in your tenant — they never
              cross back to a model provider.
            </p>
          </Section>

          <Section heading="Sub-processors">
            <p>
              We maintain a current sub-processor list at{" "}
              <Link
                href="/legal/subprocessors"
                className="text-signal underline"
              >
                /legal/subprocessors
              </Link>
              . Categories today include cloud hosting (AWS), database and
              object storage (AWS RDS + S3), authentication (our own +
              optionally your IdP), transactional email, error monitoring, and
              foundation-model providers (Anthropic, OpenAI — tenant-scoped).
              We commit to a 30-day notice window on new sub-processors that
              touch customer data, with the right to object built into every
              paid contract.
            </p>
          </Section>

          <Section heading="Authentication & access">
            <p>
              Primary authentication runs inside the Annual Tabletop
              application — no third-party identity sub-processor for
              self-serve tiers. Supported methods: email + password with
              mandatory 2FA (TOTP and WebAuthn / passkeys), magic-link
              sign-in, and Google / Microsoft OAuth. User records, sessions,
              and credentials live in our own Postgres under the primary
              hosting provider.
            </p>
            <p>
              SAML 2.0 and OIDC SSO are available on Financial Institutions,
              Regulated SMB, MSP / Partner, and Enterprise / State tiers
              through an identity partner (typically WorkOS) wired at the
              time of deployment. SCIM provisioning ships with Enterprise /
              State and MSP / Partner. When enterprise SSO is engaged for a
              given customer, that provider is added to the sub-processor
              list for that environment with written notice.
            </p>
            <p>
              Internal access to production is least-privilege, MFA-enforced,
              routed through a short-lived-credential broker, and logged to
              the same immutable audit stream that customer tenants forward
              to their SIEM.
            </p>
          </Section>

          <Section heading="Logging, monitoring & audit surfaces">
            <p>
              Every tenant has an in-product audit log covering auth events,
              exercise activity, AAR generation, and admin actions. Enterprise
              / State and MSP / Partner customers can forward that audit
              stream to their SIEM (Splunk HEC, Sumo, Datadog, or generic
              webhook). Platform-side, we run continuous logging into a
              WORM-mode store retained for 400 days and alert on the control
              signals that matter for SOC 2 CC7.2 / CC7.3.
            </p>
          </Section>

          <Section heading="Network model">
            <p>
              Compute is private-subnet only. There is no ingress from the
              public internet to any database or application process — all
              traffic is terminated at a managed load balancer and forwarded
              over mTLS to the service mesh. Egress to model providers is
              routed over a dedicated VPC endpoint or private link where the
              provider offers one.
            </p>
          </Section>

          <Section heading="SOC 2, HIPAA & attestations">
            <p>
              SOC 2 Type II is in progress — observation window closes in Q3
              2026. Progress letters, a current SOC 2 Type I, CAIQ, and
              SIG-Lite are available under mutual NDA through the Trust
              Center. HIPAA BAA is available for covered-entity and
              business-associate customers on the Hospital and Enterprise /
              State tiers. FedRAMP equivalency sits on the Enterprise / State
              roadmap for the second year post-launch.
            </p>
          </Section>

          <Section heading="AAR & exercise transcript retention">
            <p>
              AARs are the product of record and are retained under a
              customer-configurable policy — default seven years to match the
              longest common audit retention (CJIS, HIPAA, FFIEC). Exercise
              transcripts behind the AAR can be retained separately or
              redacted on a per-exercise basis. Redacted transcripts preserve
              the framework crosswalk and decision log but strip participant
              names, free-text chat, and any content flagged as sensitive.
            </p>
          </Section>

          <Section heading="Business continuity & disaster recovery">
            <p>
              RPO of 24 hours and RTO of four hours for the application
              surface. DR runbooks are exercised on our own platform at least
              twice a year — the exercise is itself an AAR we publish to the{" "}
              <Link href="/status" className="text-signal underline">
                status page
              </Link>
              . Our production incident-response plan maps to NIST CSF 2.0
              RS.* and is reviewed at every tabletop we run internally.
            </p>
          </Section>

          <Section heading="Accessibility (VPAT / 508)">
            <p>
              WCAG 2.1 AA is the baseline across every page. A VPAT against
              Section 508 Revised is available to public-sector buyers on
              request. Day-to-day accessibility practice is documented on{" "}
              <Link href="/accessibility" className="text-signal underline">
                our accessibility page
              </Link>
              .
            </p>
          </Section>

          <Section heading="Vulnerability disclosure">
            <p>
              We publish a{" "}
              <Link
                href="/.well-known/security.txt"
                className="text-signal underline"
              >
                security.txt
              </Link>{" "}
              under{" "}
              <code className="rounded bg-paper-50 px-1 text-[0.9em]">
                security@annualtabletop.com
              </code>
              . Responsible disclosures are acknowledged within two business
              days. We commit to a good-faith safe-harbor for researchers who
              follow{" "}
              <Link
                href="https://cert.org/vulnerability-analysis/vul-disclosure.cfm"
                className="text-signal underline"
              >
                CERT coordinated disclosure
              </Link>
              . Hall-of-fame acknowledgments are listed below.
            </p>
          </Section>

          <Section heading="Incident response">
            <p>
              Annual Tabletop runs an internal IR plan we exercise on our own
              product at least quarterly. Material incidents affecting
              customer data are disclosed to the affected customers within 72
              hours of identification, in line with the commitments in our
              DPA. Postmortems are published to the{" "}
              <Link href="/status" className="text-signal underline">
                status page
              </Link>
              .
            </p>
          </Section>

          <div id="acknowledgments">
            <Section heading="Security acknowledgments">
              <p className="text-sm text-ink-500">
                No public acknowledgments to list yet. Researchers who
                responsibly disclose a validated vulnerability will be listed
                here with their consent.
              </p>
            </Section>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">Questionnaires & diligence</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            We keep the Trust Center questionnaire-ready.
          </h2>
          <p className="mt-3 text-ink-700">
            CAIQ, SIG-Lite, HECVAT (Lite and Full for public-sector / higher-ed
            buyers), our latest SOC 2 progress letter, DPA, and BAA are
            available under mutual NDA. Enterprise / State and MSP / Partner
            buyers can request a concierge session where our team walks your
            security reviewer through the questionnaire line-by-line.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/about#contact">Request Trust Center access</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/sample-aar.pdf">Download the sample AAR</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABlock title="Have a specific security question? Ask the founder directly." />
    </>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-navy">{heading}</h2>
      <div className="mt-2 leading-relaxed">{children}</div>
    </div>
  );
}
