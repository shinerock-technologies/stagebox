import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import data from "@/data/data.json";

export default function TermsPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <Nav
        brand={data.brand}
        ctaText={data.hero_cta_primary}
        ctaUrl={data.hero_cta_primary_redirect_url}
      />

      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 mb-8 sm:mb-12">
            Last Updated: October 21, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the StageBox website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                2. Beta Program
              </h2>
              <p className="mb-4 leading-relaxed">
                The StageBox beta program is an invitation-only program for
                early access to our product. By participating in the beta
                program, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  The product is in development and may contain bugs or
                  incomplete features
                </li>
                <li>Features and functionality may change without notice</li>
                <li>We may request feedback and suggestions for improvement</li>
                <li>
                  Beta access may be revoked at any time at our discretion
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                3. User Responsibilities
              </h2>
              <p className="mb-4 leading-relaxed">As a user, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Provide accurate and complete information when signing up
                </li>
                <li>
                  Use the product only for lawful purposes and in accordance
                  with these terms
                </li>
                <li>
                  Not attempt to reverse engineer, decompile, or disassemble the
                  product
                </li>
                <li>
                  Not use the product in any way that could damage, disable, or
                  impair our services
                </li>
                <li>
                  Maintain the confidentiality of any beta access credentials
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content, features, and functionality of StageBox, including
                but not limited to software, text, graphics, logos, and images,
                are owned by StageBox and are protected by copyright, trademark,
                and other intellectual property laws. You may not copy,
                reproduce, distribute, or create derivative works without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                StageBox is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied. We do not warrant that the product will be
                uninterrupted, error-free, or free of viruses or other harmful
                components. Your use of the product is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, StageBox shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from your use of
                the product.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                7. Pre-Orders and Payments
              </h2>
              <p className="mb-4 leading-relaxed">
                If you choose to pre-order a StageBox unit:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Pre-orders are subject to availability and production
                  schedules
                </li>
                <li>
                  We reserve the right to cancel or modify pre-orders if
                  necessary
                </li>
                <li>
                  Refund policies will be clearly communicated at the time of
                  pre-order
                </li>
                <li>
                  Delivery dates are estimates and may be subject to change
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                8. Privacy
              </h2>
              <p className="leading-relaxed">
                Your use of StageBox is also governed by our Privacy Policy.
                Please review our{" "}
                <a
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </a>{" "}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                9. Termination
              </h2>
              <p className="leading-relaxed">
                We reserve the right to terminate or suspend your access to
                StageBox at any time, without prior notice or liability, for any
                reason, including if you breach these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                10. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes by posting the updated
                terms on this page and updating the &quot;Last Updated&quot;
                date. Your continued use of StageBox after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                11. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the jurisdiction in which StageBox
                operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                12. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:legal@stagebox.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors">
                  legal@stagebox.com
                </a>
              </p>
            </section>

            <section className="pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-400 leading-relaxed">
                By using StageBox, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service and
                our Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer data={data.footer} />
    </main>
  );
}
