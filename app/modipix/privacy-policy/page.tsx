import React from 'react'
import Link from 'next/link'

export async function generateMetadata() {
    return {
        title: "Modipix - Privacy Policy",
        description: "Modipix does not collect or store any personal information from users. We track the number of image exports users perform through the use of tickets. This data is stored locally on your device and will be lost if you uninstall the app.",
    };
}

const page = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 ">
                <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
                <p className="text-center">
                    <strong>Effective Date:</strong> 22-02-2025 (dd-mm-yyyy)
                </p>
                <p className="mt-4">
                    At <strong>Modipix</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>
                
                <h2 className="font-bold">1. Information We Collect</h2>
                <ul className="list-disc pl-10">
                    <li><strong>User Data:</strong> We do not collect or store any personal information from users.</li>
                    <li><strong>Usage Data:</strong> We track the number of image exports users perform through the use of tickets. This data is stored locally on your device and will be lost if you uninstall the app.</li>
                    <li><strong>Device Identifiers:</strong> Our application may collect and use device identifiers, such as Advertising ID, to provide personalized ads and improve services.</li>
                </ul>
                
                <h2 className="font-bold">2. How We Use Your Information</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Image Exports:</strong> Each image export consumes one ticket. Users can earn tickets by watching ads or subscribing to a premium plan through in-app purchases.</li>
                    <li><strong>In-App Subscriptions:</strong> If you subscribe to Modipix Premium, your subscription status is managed by Google Play. We do not collect or store your payment information. Subscription data (such as active status) is only used to unlock premium features within the app.</li>
                    <li><strong>Advertising & Analytics:</strong> We may use device identifiers to display relevant advertisements and analyze app performance.</li>
                </ul>
                
                <h2 className="font-bold">3. Subscription Management</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Subscription Handling:</strong> All subscriptions are handled securely by Google Play. We do not have access to your payment details.</li>
                    <li><strong>Canceling Subscription:</strong> You can cancel your Modipix Premium subscription at any time via your Google Play account. For instructions, visit <a href="https://support.google.com/googleplay/answer/7018481" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Play Help: Cancel, pause, or change a subscription</a>.</li>
                    <li>After cancellation, you will retain premium access until the end of the current billing period.</li>
                </ul>
                
                <h2 className="font-bold">4. Third-Party Services</h2>
                <ul className="list-disc pl-10">
                    <li>We may use third-party services such as:</li>
                    <ul className="list-disc pl-14">
                        <li><Link href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Ads</Link></li>
                        <li><Link href="https://unity.com/legal/privacy-policy" className="text-blue-600 underline">Unity Ads</Link></li>
                        <li><Link href="https://unity.com/legal/privacy-policy" className="text-blue-600 underline">Unity Mediation</Link></li>
                        <li><Link href="https://www.applovin.com/privacy" className="text-blue-600 underline">AppLovin</Link></li>
                        <li><Link href="https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" className="text-blue-600 underline">IronSource</Link></li>
                    </ul>
                    <li>These services may collect data such as device identifiers for ad personalization and app performance analysis.</li>
                </ul>
                
                <h2 className="font-bold">5. Data Storage</h2>
                <ul className="list-disc pl-10">
                    <li>All data related to image exports and ticket usage is stored locally on your device and is not stored on any servers. If you uninstall the Modipix app, all stored data on the device will be lost.</li>
                </ul>
                
                <h2 className="font-bold">6. Security</h2>
                <ul className="list-disc pl-10">
                    <li>We take reasonable measures to protect your data, but please note that no method of transmission over the internet or method of electronic storage is 100% secure.</li>
                </ul>
                
                <h2 className="font-bold">7. Your Rights</h2>
                <ul className="list-disc pl-10">
                    <li>You have the right to request the deletion of any collected data by third-party services. Please refer to their privacy policies for more details.</li>
                </ul>
                
                <h2 className="font-bold">8. Children&lsquo;s Privacy</h2>
                <ul className="list-disc pl-10">
                    <li>Our application is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</li>
                </ul>
                
                <h2 className="font-bold">9. Changes to This Privacy Policy</h2>
                <ul className="list-disc pl-10">
                    <li>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</li>
                </ul>
                
                <h2 className="font-bold">10. Contact Us</h2>
                <ul className="list-disc pl-10">
                    <li>If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link>.</li>
                </ul>
            </div>
        </>
    );
};

export default page;