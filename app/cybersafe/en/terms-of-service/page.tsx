import Link from 'next/link'
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Terms of Service - CyberSafe | Offline Password Manager",
        description: "Learn about the Terms of Service of CyberSafe, the offline password manager application. Discover your rights and responsibilities when using the application.",
        keywords: "Terms of Service, CyberSafe, Offline Password Manager, Data Security, Encryption",
        author: "Duc's Innovation Lab, Ind.",
    };
}

const page = () => {
    return (
        <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
            <h1 className="animate">Terms of Service</h1>
            <h2 className="animate">CyberSafe - Offline Password Manager Application</h2>
            <p className="animate"><strong>Duc&lsquo;s Innovation Lab, Ind.</strong></p>
            <p className="animate"><strong>Last Updated:</strong> April 3, 2025</p>
            <hr />

            <div className="section animate">
                <h2>1. Introduction</h2>
                <p>Welcome to CyberSafe! By using our application, you agree to comply with these Terms of Service. Please read them carefully before using the application.</p>
                <p>CyberSafe is an offline password manager application designed to protect your data using advanced encryption technologies.</p>
            </div>

            <hr />

            <div className="section animate">
                <h2>2. User Rights and Responsibilities</h2>
                <ul>
                    <li>You are responsible for protecting your device and the data stored in the application.</li>
                    <li>You agree not to use the application for any illegal or unauthorized purposes.</li>
                    <li>You are responsible for remembering your PIN or biometric authentication. If you forget your PIN or lose access to your device, your data cannot be recovered.</li>
                    <li>You may not copy, modify, or distribute any part of the application without written consent from Duc&lsquo;s Innovation Lab, Ind.</li>
                </ul>
            </div>

            <hr />

            <div className="section animate">
                <h2>3. Limitation of Liability</h2>
                <ul>
                    <li>CyberSafe is provided &quot;as is&quot; without any warranties, express or implied.</li>
                    <li>Duc&apos;s Innovation Lab, Ind. is not responsible for any data loss, unauthorized access, or security breaches caused by:
                        <ul>
                            <li>A lost or stolen device.</li>
                            <li>Use on rooted (Android) or jailbroken (iOS) devices.</li>
                            <li>User negligence or failure to follow security guidelines.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <hr />

            <div className="section animate">
                <h2>4. Intellectual Property Rights</h2>
                <ul>
                    <li>All intellectual property rights related to CyberSafe, including but not limited to application design, source code, and trademarks, are owned by Duc&apos;s Innovation Lab, Ind.</li>
                    <li>You may not copy, modify, or distribute any part of the application without written consent from us.</li>
                </ul>
            </div>

            <hr />

            <div className="section animate">
                <h2>5. Privacy Policy</h2>
                <p>Your privacy is our top priority. Please refer to our <Link href="/cybersafe/en/privacy-policy">Privacy Policy</Link> for more details on how we handle your data.</p>
            </div>

            <hr />

            <div className="section animate">
                <h2>6. Updates and Changes</h2>
                <ul>
                    <li>We reserve the right to update or change these Terms of Service at any time. Changes will be posted on this page along with the &quot;Last Updated&quot; date.</li>
                    <li>Your continued use of CyberSafe after any changes indicates your acceptance of the new Terms of Service.</li>
                </ul>
            </div>

            <hr />

            <div className="section animate">
                <h2>7. Contact Us</h2>
                <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
                <p><strong>Duc&apos;s Innovation Lab, Ind.</strong></p>
                <p><Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link></p>
            </div>

            <p>Thank you for using CyberSafe!</p>
        </div>
    )
}

export default page