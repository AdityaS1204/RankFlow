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

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32 space-y-4">
                            <h3 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">Contents</h3>
                            <nav className="flex flex-col space-y-3">
                                {[
                                    { id: "about", label: "1. About Rankflow" },
                                    { id: "scope", label: "2. Project Scope" },
                                    { id: "payment", label: "3. Payment Terms" },
                                    { id: "refunds", label: "4. Refund Policy" },
                                    { id: "revisions", label: "5. Revisions & Support" },
                                    { id: "responsibilities", label: "6. Client Duties" },
                                    { id: "ip", label: "7. IP Ownership" },
                                    { id: "confidentiality", label: "8. Confidentiality" },
                                    { id: "third-party", label: "9. Third-Party Tools" },
                                    { id: "liability", label: "10. Liability" },
                                    { id: "termination", label: "11. Termination" },
                                    { id: "disputes", label: "12. Dispute Resolution" },
                                    { id: "changes", label: "13. Changes to Terms" },
                                    { id: "contact", label: "14. Contact" },
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-sm text-black/50 hover:text-black transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                            Terms of Service
                        </h1>
                        <p className="font-sans text-black/50 mb-12">
                            Last updated: April 2026
                        </p>

                    <div className="max-w-none font-sans text-black/70 leading-relaxed space-y-12">
                        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="text-lg text-black/80">
                                These Terms of Service (“Terms”) govern your engagement with Rankflow (“Rankflow”, “we”, “us”) for any service, project, or deliverable. By signing a project proposal, making a payment, or using our website, you confirm that you have read, understood, and agree to these Terms.
                            </p>
                            <p className="mt-4 font-semibold text-black">
                                If you do not agree, do not proceed with any engagement.
                            </p>
                        </section>

                            <section id="about" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">1</span>
                                About Rankflow
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Rankflow is an AI-first development studio that designs, builds, and deploys digital products for founders, startups, and growth-stage businesses. Our core services are:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <li className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                        <div className="font-bold text-black mb-1">AI-Optimised Landing Pages</div>
                                        <p className="text-sm">Landing pages and supporting blog content engineered to be cited by AI search engines including ChatGPT, Perplexity, and Google AI Overviews.</p>
                                    </li>
                                    <li className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                        <div className="font-bold text-black mb-1">App Development</div>
                                        <p className="text-sm">Full-stack mobile and web application development, from UX/UI design through to deployment, QA testing, and app store submission.</p>
                                    </li>
                                    <li className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                        <div className="font-bold text-black mb-1">AI Chatbots</div>
                                        <p className="text-sm">Custom AI chatbots trained on client data, integrated with CRM and helpdesk systems, deployed for lead generation and customer support automation.</p>
                                    </li>
                                    <li className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                                        <div className="font-bold text-black mb-1">Enterprise AI</div>
                                        <p className="text-sm">LLM fine-tuning on proprietary data and voice AI agent development for enterprise clients (scoped separately).</p>
                                    </li>
                                </ul>
                                <p className="mt-6 pt-4 border-t border-slate-100 italic">
                                    Rankflow operates as a professional service provider, not as a software platform or automated tool. Every project is delivered by a human team.
                                </p>
                            </div>
                        </section>

                            <section id="scope" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">2</span>
                                Services and Project Scope
                            </h2>
                            <p className="mb-6">
                                The exact scope of every project is defined in a written Project Proposal or Statement of Work (“SOW”) agreed upon before any work begins. The SOW specifies deliverables, timelines, revision rounds, and fees.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-green-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        What is included
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-2"><span>•</span> One agreed design direction</li>
                                        <li className="flex gap-2"><span>•</span> The revision rounds specified per plan</li>
                                        <li className="flex gap-2"><span>•</span> The post-delivery support window specified per plan</li>
                                        <li className="flex gap-2"><span>•</span> Transfer of all final deliverable files upon receipt of full payment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        What is not included
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-2"><span>•</span> Third-party software licences, hosting, or domain fees</li>
                                        <li className="flex gap-2"><span>•</span> Content creation (copywriting, photography, video) unless specified</li>
                                        <li className="flex gap-2"><span>•</span> Ongoing maintenance after the support window closes</li>
                                        <li className="flex gap-2"><span>•</span> Work requested after SOW signing that changes agreed deliverables</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-8 p-4 bg-amber-50 rounded-lg text-sm text-amber-900 border border-amber-100">
                                Rankflow does not guarantee search rankings, AI citation frequency, traffic volume, lead conversion rates, or any specific business outcome. We guarantee delivery of the agreed technical and design deliverables to the standard described in the SOW.
                            </p>
                        </section>

                            <section id="payment" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">3</span>
                                Payment Terms
                            </h2>
                            <div className="overflow-x-auto mb-8">
                                <h3 className="text-lg font-bold text-black mb-4">3.1 Payment Schedule by Service</h3>
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-3 border border-slate-200 font-bold">Service / Plan</th>
                                            <th className="p-3 border border-slate-200 font-bold">Price (USD)</th>
                                            <th className="p-3 border border-slate-200 font-bold">Deposit</th>
                                            <th className="p-3 border border-slate-200 font-bold">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3 border border-slate-200">AI Landing Page — Starter Page</td>
                                            <td className="p-3 border border-slate-200">$995</td>
                                            <td className="p-3 border border-slate-200">50% ($497.5)</td>
                                            <td className="p-3 border border-slate-200">50% on delivery</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">AI Landing Page — Pro</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">$2,125</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">50% ($1,062.5)</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">50% on delivery</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">AI Landing Page — AEO Retainer</td>
                                            <td className="p-3 border border-slate-200">$105/month</td>
                                            <td className="p-3 border border-slate-200">First month upfront</td>
                                            <td className="p-3 border border-slate-200">Monthly on invoice date</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">App Dev — Mobile App + Stores</td>
                                            <td className="p-3 border border-slate-200">$4,500</td>
                                            <td className="p-3 border border-slate-200">40% ($1,800)</td>
                                            <td className="p-3 border border-slate-200">60% on delivery</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">App Dev — Complex / SaaS</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Custom</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">40% of agreed</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Milestone-based</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">AI Chatbot — Lead Gen Bot</td>
                                            <td className="p-3 border border-slate-200">$1,500 setup + $150/mo</td>
                                            <td className="p-3 border border-slate-200">100% setup upfront</td>
                                            <td className="p-3 border border-slate-200">Monthly on invoice date</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">AI Chatbot — Support + Lead Bot</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">$2,800 setup + $210/mo</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">100% setup upfront</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Monthly on invoice date</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">AI Chatbot — Enterprise Bot</td>
                                            <td className="p-3 border border-slate-200">Custom</td>
                                            <td className="p-3 border border-slate-200">40% of agreed</td>
                                            <td className="p-3 border border-slate-200">Milestone-based</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Enterprise AI (LLM / Voice AI)</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">From $11,000</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">30% on SOW sign</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Milestone-based</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.2 Deposit and Commencement</h4>
                                    <p>Work does not commence until the deposit payment is confirmed in cleared funds. Project timelines stated in the SOW begin from the date the deposit clears.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.3 Milestone Payments</h4>
                                    <p>For custom-scoped projects, payments are tied to milestones. A milestone payment is due within 5 business days of completion confirmation. Work on the subsequent phase does not begin until payment is received.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.4 Monthly Retainer Payments</h4>
                                    <p>First month is payable upfront. Subsequent months are invoiced on the same calendar date. A 3-month minimum engagement applies to AEO Retainers and AI Chatbot plans.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.5 Late Payments</h4>
                                    <p>Invoices are due within 7 days. Late payments may result in work being paused. A late fee of 1.5% per month may be applied after 7 days.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.6 Accepted Payment Methods</h4>
                                    <p>Payments are accepted via bank transfer (SWIFT/IBAN), Stripe, or Wise. All international transfer fees are the responsibility of the client.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">3.7 Currency and Taxes</h4>
                                    <p>Invoices are USD by default. Rankflow is not currently registered for VAT/GST. Clients are responsible for any applicable taxes in their jurisdiction.</p>
                                </div>
                            </div>
                        </section>

                            <section id="refunds" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">4</span>
                                Refund Policy and Satisfaction Guarantee
                            </h2>
                            <div className="p-6 bg-slate-900 text-white rounded-2xl mb-8">
                                <h3 className="text-xl font-bold mb-4">Rankflow Satisfaction Guarantee</h3>
                                <p className="text-slate-300">
                                    If you are not satisfied with the delivered work after all included revision rounds have been used, we will continue to revise until the deliverables meet the agreed scope — or we will issue a full refund.
                                </p>
                                <p className="mt-4 text-xs text-slate-400">
                                    * This guarantee applies to deliverables that do not meet SOW specifications. It does not apply to changes in preference, direction, or business strategy after work has commenced.
                                </p>
                            </div>

                            <div className="space-y-6 text-sm">
                                <div>
                                    <h4 className="font-bold text-black mb-2">4.1 Pre-commencement Cancellations</h4>
                                    <p>If cancelled before work begins, the full deposit is refunded minus administrative or payment processing fees.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">4.2 Cancellations After Commencement</h4>
                                    <p>The deposit is non-refundable. If work completed exceeds the deposit value, the client is invoiced for the additional work at the agreed pro-rata rate.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-2">4.3 Monthly Retainer Cancellations</h4>
                                    <p>May be cancelled after the minimum term with 30 days’ written notice. No refund is issued for the current billing month.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 text-red-600">4.4 Exclusions</h4>
                                    <p>Refunds are not available for delivered and approved work, third-party costs already incurred, or work paused due to client inaction.</p>
                                </div>
                            </div>
                        </section>

                            <section id="revisions" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">5</span>
                                Revisions and Support
                            </h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-3 border border-slate-200 font-bold whitespace-nowrap">Service / Plan</th>
                                            <th className="p-3 border border-slate-200 font-bold whitespace-nowrap">Revisions</th>
                                            <th className="p-3 border border-slate-200 font-bold whitespace-nowrap">Support Window</th>
                                            <th className="p-3 border border-slate-200 font-bold">What Support Covers</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3 border border-slate-200">Starter Page</td>
                                            <td className="p-3 border border-slate-200">1 round</td>
                                            <td className="p-3 border border-slate-200">30 days</td>
                                            <td className="p-3 border border-slate-200">Bug fixes, broken links, schema errors</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Pro</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">2 rounds</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">30 days</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Above + CWV fixes, AEO updates, copy edits</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">AEO Retainer</td>
                                            <td className="p-3 border border-slate-200">Included</td>
                                            <td className="p-3 border border-slate-200">Ongoing</td>
                                            <td className="p-3 border border-slate-200">Monthly content updates, citations</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200">Mobile App</td>
                                            <td className="p-3 border border-slate-200">2 rounds</td>
                                            <td className="p-3 border border-slate-200">60 days</td>
                                            <td className="p-3 border border-slate-200">Store compliance, bug fixes, crashes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">AI Chatbots</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">1-2 rounds</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Ongoing</td>
                                            <td className="p-3 border border-slate-200 bg-slate-50/30">Response quality, retraining, integrations</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm italic text-black/60">
                                Additional revisions or extended support are available at £150 / $185 per hour or by separate retainer.
                            </p>
                        </section>

                            <section id="responsibilities" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">6</span>
                                Client Responsibilities
                            </h2>
                            <ul className="space-y-4 text-sm">
                                <li className="flex gap-4">
                                    <span className="font-bold text-black min-w-[120px]">Timely feedback:</span>
                                    <span>Feedback must be provided within 5 business days. If not received within 10 days, the deliverable may be treated as approved.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-black min-w-[120px]">Asset supply:</span>
                                    <span>Brand guidelines, logos, copy, and API keys must be provided before the relevant phase. Delays will extend project timelines.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-black min-w-[120px]">Accurate info:</span>
                                    <span>Clients are responsible for the accuracy of all content they provide. Rankflow is not liable for deliverables built on inaccurate info.</span>
                                </li>
                            </ul>
                        </section>

                            <section id="ip" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">7</span>
                                Intellectual Property
                            </h2>
                            <div className="space-y-4 text-sm">
                                <p><span className="font-bold">7.1 Client ownership:</span> Upon receipt of all payments, the client receives full ownership of final design files, source code, and content. No licences, no lock-in.</p>
                                <p><span className="font-bold">7.2 Rankflow rights:</span> We retain rights to internal frameworks, boilerplate code, and the right to display work in our portfolio (unless confidentiality is requested).</p>
                                <p><span className="font-bold">7.4 Work before payment:</span> Until all payments are received in full, all work product remains the property of Rankflow. You may not deploy or use any deliverable until final payment.</p>
                            </div>
                        </section>

                            <section id="confidentiality" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">8</span>
                                Confidentiality and NDAs
                            </h2>
                            <p className="text-sm">
                                Rankflow treats all client information and project details as confidential. A mutual Non-Disclosure Agreement (NDA) is available and will be signed upon request before any project begins.
                            </p>
                        </section>

                            <section id="third-party" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">9</span>
                                Third-Party Tools
                            </h2>
                            <p className="text-sm">
                                Rankflow is not responsible for outages or policy changes imposed by third-party providers (OpenAI, Cloud Hosting, etc.). If a platform change affects functionality post-delivery, remediation will be quoted as new scope.
                            </p>
                        </section>

                            <section id="liability" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">10</span>
                                Limitation of Liability
                            </h2>
                            <p className="text-sm italic">
                                To the maximum extent permitted by law, Rankflow’s total liability in connection with any project is limited to the total fees paid by the client for that specific project. We are not liable for loss of revenue or platform algorithm changes.
                            </p>
                        </section>

                            <section id="termination" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">11</span>
                                Termination
                            </h2>
                            <div className="space-y-4 text-sm">
                                <p><span className="font-bold">11.1 Termination by Rankflow:</span> We may terminate services if payments are not met within 21 days, or due to abusive behavior, unethical requests, or persistent non-responsiveness (15+ days). Payments made to date are retained.</p>
                                <p><span className="font-bold">11.2 Termination by Client:</span> Clients may terminate at any time subject to Section 4.2 (cancellation after commencement).</p>
                            </div>
                        </section>

                            <section id="disputes" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">12</span>
                                Dispute Resolution
                            </h2>
                            <p className="text-sm">
                                Both parties agree to first attempt resolution through good-faith communication within 14 days. These Terms are governed by the laws of India. For UK/EU clients, we comply with mandatory statutory rights.
                            </p>
                        </section>

                            <section id="changes" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">13</span>
                                Changes to These Terms
                            </h2>
                            <p className="text-sm">
                                Updated Terms take effect only at the start of a new project or renewal cycle. Clients will be notified of material changes with a minimum of 14 days’ notice.
                            </p>
                        </section>

                            <section id="contact" className="border-t border-slate-100 pt-12 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">14</span>
                                Contact
                            </h2>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 text-sm">
                                        <div className="font-bold text-black mb-1">Rankflow Contact Details</div>
                                        <p>Email: contact@rankflow.in</p>
                                        <p>Website: rankflow.in</p>
                                        <p>Response time: Within 2 business days</p>
                                        <p>Business hours: Mon–Fri, 10:00–18:00 IST (GMT+5:30)</p>
                                    </div>
                                    <div className="flex flex-col justify-center space-y-4">
                                        <p className="text-sm italic">For clients in the UK and US: We are available for calls during your business hours by appointment.</p>
                                        <a href="mailto:contact@rankflow.in" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors inline-block text-center w-full">
                                            Send an Inquiry
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TermsPage;
