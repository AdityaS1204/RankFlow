import * as React from 'react';

interface AuditConfirmationEmailProps {
    firstName: string;
    website: string;
}

export const AuditConfirmationEmail = ({ firstName, website }: AuditConfirmationEmailProps) => {
    const year = new Date().getFullYear();

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Your Rankflow.in SEO Audit is Coming</title>
            </head>
            <body style={styles.body}>
                <table width="100%" cellPadding={0} cellSpacing={0} style={styles.outerTable}>
                    <tr>
                        <td align="center">
                            <table width={600} cellPadding={0} cellSpacing={0} style={styles.card}>

                                {/* ── Header ── */}
                                <tr>
                                    <td style={styles.header}>
                                        <p style={styles.brandName}>rankflow.in</p>
                                        <p style={styles.headerSubtitle}>AI SEO Audit Confirmed</p>
                                    </td>
                                </tr>

                                {/* ── Body ── */}
                                <tr>
                                    <td style={styles.body_cell}>
                                        <p style={styles.greeting}>
                                            Hi <strong>{firstName}</strong>,
                                        </p>

                                        <p style={styles.paragraph}>
                                            Thanks for requesting a <strong>FREE AI SEO audit</strong> for{' '}
                                            <a href={website} style={styles.link}>
                                                {website}
                                            </a>
                                            !
                                        </p>

                                        <p style={styles.paragraph}>
                                            Your personalized report will arrive within <strong>24 hours</strong>.
                                        </p>

                                        {/* ── Divider ── */}
                                        <table width="100%" cellPadding={0} cellSpacing={0}>
                                            <tr>
                                                <td style={styles.dividerCell}>
                                                    <p style={styles.questionText}>
                                                        <strong>Questions?</strong> Reply to this email anytime — I read every reply.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>

                                        <p style={styles.signoffLine}>Talk soon,</p>
                                        <p style={styles.signoffName}>Aditya</p>
                                        <p style={styles.signoffRole}>Founder, Rankflow.in</p>
                                        <p style={styles.signoffContact}>
                                            <a href="mailto:aditya@rankflow.in" style={styles.link}>
                                                aditya@rankflow.in
                                            </a>
                                            &nbsp;|&nbsp;+91-7028914355
                                        </p>
                                    </td>
                                </tr>

                                {/* ── Footer ── */}
                                <tr>
                                    <td style={styles.footer}>
                                        <p style={styles.footerText}>
                                            You received this email because you submitted an audit request at{' '}
                                            <a href="https://rankflow.in" style={styles.link}>
                                                rankflow.in
                                            </a>
                                            .<br />
                                            © {year} Rankflow.in. All rights reserved.
                                        </p>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    );
};

// ── Styles ────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#f4f4f5',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    outerTable: {
        backgroundColor: '#f4f4f5',
        padding: '40px 16px',
    },
    card: {
        maxWidth: 600,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    },
    header: {
        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        padding: '40px 48px 32px',
        textAlign: 'center',
    },
    brandName: {
        margin: 0,
        fontSize: 28,
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.5px',
    },
    headerSubtitle: {
        margin: '8px 0 0',
        fontSize: 13,
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    body_cell: {
        padding: '40px 48px',
    },
    greeting: {
        margin: '0 0 24px',
        fontSize: 17,
        color: '#18181b',
        lineHeight: 1.7,
    },
    paragraph: {
        margin: '0 0 16px',
        fontSize: 16,
        color: '#3f3f46',
        lineHeight: 1.7,
    },
    link: {
        color: '#2563eb',
        textDecoration: 'none',
        fontWeight: 600,
    },
    dividerCell: {
        borderTop: '1px solid #e4e4e7',
        paddingTop: 24,
        marginTop: 16,
    },
    questionText: {
        margin: '0 0 8px',
        fontSize: 15,
        color: '#3f3f46',
    },
    signoffLine: {
        margin: '28px 0 4px',
        fontSize: 16,
        color: '#18181b',
    },
    signoffName: {
        margin: 0,
        fontSize: 16,
        color: '#18181b',
        fontWeight: 700,
    },
    signoffRole: {
        margin: '2px 0 0',
        fontSize: 14,
        color: '#71717a',
    },
    signoffContact: {
        margin: '4px 0 0',
        fontSize: 13,
        color: '#a1a1aa',
    },
    footer: {
        backgroundColor: '#f9f9fb',
        padding: '20px 48px',
        textAlign: 'center',
        borderTop: '1px solid #e4e4e7',
    },
    footerText: {
        margin: 0,
        fontSize: 12,
        color: '#a1a1aa',
        lineHeight: 1.6,
    },
};
