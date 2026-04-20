import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Annual Tabletop's security posture: hosting, data handling, tenancy isolation, SOC 2 plan, VPAT/508, incident response, and vulnerability disclosure.",
};

/** IA Section 11 / Appendix D: Security page. Live before launch. */
export default function SecurityPage() {
  return (
    <>
      <Hero
        eyebrow="Security"
        title="Annual Tabletop is built by people who run tabletops for a living."
        subtitle="Our security posture is the same one we'd expect from any vendor our public-sector and regulated-SMB buyers bring onboard. The specifics below are the ones procurement teams ask for first."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight space-y-10 text-ink-700">
          <Section heading="Hosting &amp; data residency">
            <p>
              Hosted on a SOC 2 Type II cloud provider in U.S. regions.
              Enterprise / State tier customers can request data-residency
              options (including FedRAMP-boundaried sub-processors) at contract
              time.
            </p>
          </Section>

          <Section heading="Tenancy &amp; isolation">
            <p>
              Multi-tenant by default, with per-tenant logical isolation.
              Enterprise / State and MSP / Partner customers can opt into
              dedicated tenancy. Tenant IDs are scoped at the database and
              storage layer — there is no cross-tenant read path.
            </p>
          </Section>

          <Section heading="Data handling">
            <p>
              Customer data is encrypted in transit (TLS 1.2+) and at rest
              (AES-256). AARs are retained per customer-configurable policy
              (default 7 years for audit evidence). Customer-requested deletion
              honored within 30 days.
            </p>
          </Section>

          <Section heading="Authentication">
            <p>
              SSO (SAML 2.0, OIDC) included on all paid tiers. Password-based
              auth with mandatory MFA is the default. SCIM provisioning available
              on Enterprise / State and MSP / Partner tiers.
            </p>
          </Section>

          <Section heading="SOC 2 &amp; attestations">
            <p>
              SOC 2 Type II in progress — target attestation date published on
              our Trust Center when the audit observation window closes. HIPAA
              BAA available for covered-entity and BA customers. FedRAMP
              equivalency planned for the Enterprise / State wedge after launch.
            </p>
          </Section>

          <Section heading="Accessibility (VPAT / 508)">
            <p>
              WCAG 2.1 AA is the baseline across every page. VPAT / Section 508
              documentation is available on request from public-sector buyers.
              Accessibility practices documented on{" "}
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
              with our security contact. Responsible disclosures are
              acknowledged within two business days.
            </p>
          </Section>

          <Section heading="Incident response">
            <p>
              Annual Tabletop operates under an internal IR plan we exercise —
              on our own product — at least quarterly. Material incidents
              affecting customer data are disclosed to affected customers within
              72 hours of identification.
            </p>
          </Section>
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">Questionnaires &amp; diligence</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            We maintain a Trust Center with pre-filled questionnaires.
          </h2>
          <p className="mt-3 text-ink-700">
            Request access to CAIQ, SIG-Lite, and our latest SOC 2 progress
            letter. Enterprise buyers can request a security questionnaire
            concierge session.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/about#contact">Request Trust Center access</Link>
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
