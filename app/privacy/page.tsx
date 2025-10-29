import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import data from "@/data/data.json";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mb-8 sm:mb-12">
            Last Updated: October 21, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                When you sign up for the StageBox beta program, we collect the
                following information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Position/Role in your organization</li>
                <li>Information about your interest in StageBox</li>
                <li>
                  Technical information such as browser type and IP address
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Evaluate your application for beta access</li>
                <li>
                  Communicate with you about StageBox updates and beta program
                  details
                </li>
                <li>Improve our product and services</li>
                <li>Send you relevant product information and updates</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                3. Data Storage and Security
              </h2>
              <p className="leading-relaxed">
                Your data is stored securely using industry-standard encryption
                and security practices. We implement appropriate technical and
                organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                4. Data Sharing
              </h2>
              <p className="leading-relaxed">
                We will never sell or share your personal information with third
                parties for their marketing purposes without your explicit
                consent. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>
                  With service providers who assist in our operations (under
                  strict confidentiality agreements)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                We use minimal cookies and tracking technologies to improve your
                experience on our website. These help us understand how visitors
                interact with our site and improve our services. You can control
                cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                7. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this privacy
                policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                8. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any significant changes by posting the new policy
                on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                9. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or how we
                handle your personal information, please contact us at{" "}
                <a
                  href="mailto:privacy@stagebox.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors">
                  privacy@stagebox.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer data={data.footer} />
    </main>
  );
}
