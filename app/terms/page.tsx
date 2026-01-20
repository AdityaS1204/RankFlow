import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms of Service | Rankflow",
    description: "Terms of Service for Rankflow services.",
};

const TermsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                        Terms of Service
                    </h1>
                    <p className="font-sans text-black/50 mb-12">
                        Last updated: January 2026
                    </p>

                    <div className="prose prose-slate max-w-none font-sans text-black/70 leading-relaxed space-y-8">
                        <section>
                            <p>
                                Welcome to Rankflow. By accessing or using our website or services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">1. About Rankflow</h2>
                            <p>
                                Rankflow provides AI-search-optimized landing page design and optimization services. Our services are focused on improving discoverability, relevance, and conversion performance across modern search platforms, including AI-driven search systems.
                            </p>
                            <p className="mt-2">
                                Rankflow operates as a service provider, not as a software platform or automated tool.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">2. Services Provided</h2>
                            <p>Rankflow may provide the following services:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Design and development of landing pages</li>
                                <li>Optimization for AI-based search systems and modern SEO</li>
                                <li>Conversion-focused UI and content structuring</li>
                                <li>Website audits related to performance, search visibility, and structure</li>
                                <li>Related consulting or optimization services as agreed upon</li>
                            </ul>
                            <p className="mt-2">
                                The exact scope of services will be defined and agreed upon before the start of any project.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">3. Project Scope and Revisions</h2>
                            <p>
                                Each project includes a clearly defined scope. Any work requested outside the agreed scope may require additional fees or a revised timeline.
                            </p>
                            <p className="mt-2 text-black/90 font-medium">Unless otherwise stated:</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Reasonable revisions are included</li>
                                <li>Excessive or scope-changing revisions may be billed separately</li>
                            </ul>
                            <p className="mt-2 italic">
                                Rankflow does not guarantee rankings, traffic volume, or specific business outcomes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">4. Payments and Billing</h2>
                            <p>All services are provided on a paid engagement basis.</p>
                            <p className="mt-2 text-black/90 font-medium">Payment terms are as follows unless otherwise agreed in writing:</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>An advance payment is required before work begins</li>
                                <li>For one-time projects, payment may be required in full upfront</li>
                                <li>For larger or multi-phase projects, payment may be split into milestones</li>
                            </ul>
                            <p className="mt-2">
                                Invoices must be paid within the specified timeframe. Failure to make timely payments may result in paused or terminated services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">5. Refund Policy</h2>
                            <p>Due to the nature of digital and consulting services:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Payments are non-refundable once work has started</li>
                                <li>No refunds are provided for completed or partially completed work</li>
                                <li>If a project is canceled before work begins, a refund may be issued at Rankflow’s discretion</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">6. Client Responsibilities</h2>
                            <p>Clients agree to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Provide accurate information and timely feedback</li>
                                <li>Supply required assets, content, or access needed for project completion</li>
                                <li>Review deliverables within reasonable timeframes</li>
                            </ul>
                            <p className="mt-2">
                                Delays caused by the client may impact timelines and delivery.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">7. Intellectual Property</h2>
                            <p>Upon full payment:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>The client receives rights to the final deliverables produced for them</li>
                                <li>Rankflow retains the right to showcase completed work in portfolios, case studies, and marketing materials unless otherwise agreed</li>
                            </ul>
                            <p className="mt-2">
                                Any tools, frameworks, or internal systems used by Rankflow remain the property of Rankflow.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">8. Third-Party Tools and Platforms</h2>
                            <p>
                                Rankflow may use third-party tools, platforms, or services during delivery. Rankflow is not responsible for outages, changes, or limitations imposed by third-party providers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">9. Limitation of Liability</h2>
                            <p>Rankflow is not liable for:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Loss of revenue, profits, or business opportunities</li>
                                <li>Search engine or AI platform algorithm changes</li>
                                <li>Indirect or consequential damages</li>
                            </ul>
                            <p className="mt-2">All services are provided on an “as-is” basis.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">10. Termination</h2>
                            <p>Rankflow reserves the right to terminate services if:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Payment obligations are not met</li>
                                <li>There is misuse, abuse, or unethical behavior</li>
                                <li>Continued collaboration becomes unfeasible</li>
                            </ul>
                            <p className="mt-2">
                                Clients may terminate services by written notice, subject to payment obligations already incurred.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">11. Governing Law</h2>
                            <p>
                                These Terms of Service are governed by the laws applicable in India. Any disputes shall be subject to the appropriate jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">12. Changes to These Terms</h2>
                            <p>
                                Rankflow may update these Terms of Service at any time. Continued use of the website or services constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-4">13. Contact</h2>
                            <p>
                                For questions regarding these Terms, contact:<br />
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

export default TermsPage;
