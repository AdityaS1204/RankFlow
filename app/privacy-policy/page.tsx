import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Rankflow",
    description: "Privacy Policy for Rankflow services.",
};

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                        Privacy Policy
                    </h1>
                    <p className="font-sans text-black/50 mb-12">
                        Last updated: 30 January 2026
                    </p>

                    <div className="prose prose-slate max-w-none font-sans text-black/70 leading-relaxed space-y-8">
                        <section>
                            <p>
                                Rankflow ("we", "our", "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you visit <a href="https://rankflow.in" className="text-blue-600 hover:underline">rankflow.in</a> or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">1. Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-black">a. Information you provide</h3>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Company name</li>
                                        <li>Any information submitted via forms, demos, or onboarding</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black">b. Automatically collected information</h3>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>IP address</li>
                                        <li>Browser and device details</li>
                                        <li>Pages visited and interactions</li>
                                        <li>Referral source</li>
                                    </ul>
                                    <p className="mt-2 text-sm italic">This information is collected using analytics and monitoring tools.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">2. How We Use Your Information</h2>
                            <p>We use your information to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Respond to inquiries and requests</li>
                                <li>Provide and improve our services</li>
                                <li>Analyze site usage and performance</li>
                                <li>Communicate service updates or offers</li>
                                <li>Maintain security and prevent abuse</li>
                            </ul>
                            <p className="mt-4 font-medium text-black">We do not sell your personal data.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">3. Cookies and Tracking</h2>
                            <p>We use cookies and similar technologies to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Understand user behavior</li>
                                <li>Improve website performance</li>
                                <li>Measure marketing effectiveness</li>
                            </ul>
                            <p className="mt-2">
                                You can disable cookies in your browser settings, but some features may not work correctly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">4. Third-Party Services</h2>
                            <p>We use trusted third-party tools for:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Analytics</li>
                                <li>Hosting</li>
                                <li>Email communication</li>
                                <li>CRM and automation</li>
                            </ul>
                            <p className="mt-2">
                                These providers only access data required to perform their services and are obligated to protect it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">5. Data Retention</h2>
                            <p>
                                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">6. Data Security</h2>
                            <p>
                                We use reasonable technical and organizational measures to protect your data. However, no system is 100 percent secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">7. Your Rights</h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Access your personal data</li>
                                <li>Request correction or deletion</li>
                                <li>Withdraw consent</li>
                                <li>Ask how your data is used</li>
                            </ul>
                            <p className="mt-2">Contact us to exercise these rights.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">8. Children’s Privacy</h2>
                            <p>
                                Rankflow does not knowingly collect personal data from individuals under 13. If such data is identified, it will be removed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">9. Policy Updates</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Updates will be posted on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">10. Contact</h2>
                            <p>
                                For questions regarding this Privacy Policy, contact:<br />
                                Email: <a href="mailto:contact@rankflow.in" className="text-blue-600 hover:underline">contact@rankflow.in</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicyPage;
