import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Modipix - Privacy Policy",
    description: "Privacy Policy for Modipix - Learn how we collect, use, and protect your information. Our app is designed with privacy in mind, with minimal data collection and local storage.",
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
        <p className="mb-4">Modipix is designed with privacy in mind. We collect minimal information and store most data locally on your device.</p>

        <h3 className="font-semibold text-lg mt-4">1.1 Personal Information</h3>
        <ul className="list-disc pl-10">
          <li><strong>No Personal Data Collection:</strong> We do not collect, store, or process any personal information such as names, email addresses, phone numbers, or other personally identifiable information.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">1.2 Usage Data</h3>
        <ul className="list-disc pl-10">
          <li><strong>Local Usage Tracking:</strong> We track the number of image exports users perform through a ticket system. This data is stored locally on your device only.</li>
          <li><strong>App Performance:</strong> We may collect anonymous usage statistics to improve app performance and user experience.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">1.3 Device Information</h3>
        <ul className="list-disc pl-10">
          <li><strong>Device Identifiers:</strong> Our application may collect device identifiers (such as Advertising ID) for advertising purposes and app functionality.</li>
          <li><strong>Technical Data:</strong> We may collect technical information such as device model, operating system version, and app version for compatibility and support purposes.</li>
        </ul>

        <h2 className="font-bold">2. How We Use Your Information</h2>
        <p className="mb-4">We use the limited information we collect for specific, legitimate purposes related to app functionality and user experience.</p>

        <h3 className="font-semibold text-lg mt-4">2.1 App Functionality</h3>
        <ul className="list-disc pl-10">
          <li><strong>Ticket System:</strong> Each image export consumes one ticket. Users can earn tickets by watching ads or subscribing to a premium plan through in-app purchases.</li>
          <li><strong>Premium Features:</strong> If you subscribe to Modipix Premium, your subscription status is managed by Google Play. We do not collect or store your payment information. Subscription data is only used to unlock premium features within the app.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">2.2 Advertising and Analytics</h3>
        <ul className="list-disc pl-10">
          <li><strong>Personalized Ads:</strong> We may use device identifiers to display relevant advertisements through our advertising partners.</li>
          <li><strong>App Performance:</strong> We analyze anonymous usage data to improve app performance, fix bugs, and enhance user experience.</li>
          <li><strong>Analytics:</strong> We use analytics services to understand how users interact with our app and to make improvements.</li>
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

        <h2 className="font-bold">5. Data Storage and Retention</h2>
        <p className="mb-4">We follow strict data storage and retention practices to protect your privacy.</p>

        <h3 className="font-semibold text-lg mt-4">5.1 Local Storage</h3>
        <ul className="list-disc pl-10">
          <li><strong>Device-Only Storage:</strong> All data related to image exports and ticket usage is stored locally on your device and is not transmitted to our servers.</li>
          <li><strong>Data Loss on Uninstall:</strong> If you uninstall the Modipix app, all stored data on the device will be permanently lost.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">5.2 Data Retention</h3>
        <ul className="list-disc pl-10">
          <li><strong>Anonymous Analytics:</strong> Anonymous usage data may be retained for up to 2 years for app improvement purposes.</li>
          <li><strong>Advertising Data:</strong> Advertising-related data is retained according to our advertising partners&apos; policies.</li>
          <li><strong>No Personal Data:</strong> Since we do not collect personal information, there is no personal data to retain or delete.</li>
        </ul>

        <h2 className="font-bold">6. Security</h2>
        <ul className="list-disc pl-10">
          <li>We take reasonable measures to protect your data, but please note that no method of transmission over the internet or method of electronic storage is 100% secure.</li>
        </ul>

        <h2 className="font-bold">7. Your Rights and Data Control</h2>
        <p className="mb-4">You have several rights regarding your personal information and data.</p>

        <h3 className="font-semibold text-lg mt-4">7.1 Your Rights</h3>
        <ul className="list-disc pl-10">
          <li><strong>Access:</strong> You have the right to know what personal information we have collected about you.</li>
          <li><strong>Deletion:</strong> You can request the deletion of any collected data by contacting us directly.</li>
          <li><strong>Correction:</strong> You have the right to correct any inaccurate personal information.</li>
          <li><strong>Portability:</strong> You can request a copy of your personal information in a portable format.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">7.2 Third-Party Data</h3>
        <ul className="list-disc pl-10">
          <li><strong>Advertising Partners:</strong> You can opt out of personalized ads through your device settings or by contacting our advertising partners directly.</li>
          <li><strong>Analytics:</strong> You can request information about data collected by our analytics partners by referring to their privacy policies.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">7.3 How to Exercise Your Rights</h3>
        <ul className="list-disc pl-10">
          <li>Contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link> to exercise any of these rights.</li>
          <li>We will respond to your request within 30 days.</li>
        </ul>

        <h2 className="font-bold">8. Children&lsquo;s Privacy (COPPA Compliance)</h2>
        <p className="mb-4">We take children&apos;s privacy seriously and comply with the Children&apos;s Online Privacy Protection Act (COPPA).</p>

        <h3 className="font-semibold text-lg mt-4">8.1 Age Restrictions</h3>
        <ul className="list-disc pl-10">
          <li><strong>Target Audience:</strong> Our application is designed for users of all ages, including children under 13.</li>
          <li><strong>No Personal Data Collection:</strong> We do not knowingly collect, use, or disclose personal information from children under 13 without verifiable parental consent.</li>
          <li><strong>Limited Data Collection:</strong> Any data we collect from children is minimal and used only for app functionality.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">8.2 Parental Rights</h3>
        <ul className="list-disc pl-10">
          <li><strong>Parental Consent:</strong> If we discover that we have collected personal information from a child under 13 without parental consent, we will delete that information immediately.</li>
          <li><strong>Parental Access:</strong> Parents can contact us to review, delete, or refuse further collection of their child&apos;s information.</li>
          <li><strong>No Third-Party Sharing:</strong> We do not share personal information of children under 13 with third parties except as necessary for app functionality.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">8.3 Contact for Children&apos;s Privacy</h3>
        <ul className="list-disc pl-10">
          <li>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link>.</li>
        </ul>

        <h2 className="font-bold">9. Changes to This Privacy Policy</h2>
        <ul className="list-disc pl-10">
          <li>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</li>
        </ul>

        <h2 className="font-bold">10. Contact Us</h2>
        <p className="mb-4">We are committed to addressing your privacy concerns and questions.</p>

        <h3 className="font-semibold text-lg mt-4">10.1 Privacy Questions</h3>
        <ul className="list-disc pl-10">
          <li>If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link>.</li>
          <li>We will respond to your inquiry within 48 hours.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">10.2 Data Protection Officer</h3>
        <ul className="list-disc pl-10">
          <li>For privacy-related concerns, you can reach our Data Protection Officer at the same email address.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">10.3 Updates to This Policy</h3>
        <ul className="list-disc pl-10">
          <li>We will notify users of any material changes to this Privacy Policy through the app or our website.</li>
          <li>The &quot;Effective Date&quot; at the top of this policy will be updated when changes are made.</li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> 22-02-2025<br />
            <strong>Version:</strong> 2.0<br />
            <strong>App Version:</strong> Compatible with all versions of Modipix
          </p>
        </div>
      </div>
    </>
  );
};

export default page;