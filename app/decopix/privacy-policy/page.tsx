import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Decopix - Privacy Policy",
    description: "Privacy Policy for Decopix - Learn how we collect, use, and protect your information. Decopix processes photos 100% locally on your device with complete privacy.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-center">
          <strong>Effective Date:</strong> October 4, 2026
        </p>
        <p className="mt-4">
          At <strong>Decopix</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take your privacy seriously. This Privacy Policy explains our commitment to protecting your personal data and outlines what information is collected, how it is used, and how your privacy is safeguarded when you use our mobile application on iOS and Android.
        </p>

        <h2 className="font-bold">1. 100% On-Device Image Processing &amp; Photo Privacy</h2>
        <p className="mb-4">
          Your photos belong to you. Decopix is designed from the ground up as a privacy-first, on-device creative photo studio.
        </p>
        <ul className="list-disc pl-10">
          <li><strong>Zero Cloud Uploads:</strong> Decopix does <strong>NOT</strong> upload, transmit, or store your photos, edited images, camera captures, or exported artwork on any remote server, cloud storage, or external database.</li>
          <li><strong>Local Rendering:</strong> All photo adjustments, doodle borders, emoji paths, retro print filters, vintage camera timestamps, smart palette extractions, and canvas rendering are executed 100% locally on your device hardware.</li>
          <li><strong>Gallery Access:</strong> We request photo library access solely to let you choose images to edit and to save your exported creations directly to your local device gallery. We cannot view or access your photos outside of your active session.</li>
        </ul>

        <h2 className="font-bold">2. Information We Collect</h2>
        <p className="mb-4">We collect minimal, non-personal data strictly necessary for app stability, performance, and monetization.</p>

        <h3 className="font-semibold text-lg mt-4">2.1 Personal Information</h3>
        <ul className="list-disc pl-10">
          <li><strong>No Personal Data Collection:</strong> We do not require account registration, and we do not collect, store, or sell personal identifiers such as your name, email address, phone number, contacts, or location.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">2.2 Usage &amp; Ticket Data</h3>
        <ul className="list-disc pl-10">
          <li><strong>Local Export Tickets:</strong> Decopix includes a ticket-based system for image exports. Daily ticket balances, user preferences, and recent tool settings are stored exclusively in your device&apos;s local storage. This data is never sent to our servers.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">2.3 Device &amp; Diagnostic Data</h3>
        <ul className="list-disc pl-10">
          <li><strong>Anonymous Analytics:</strong> We use Google Analytics for Firebase to collect aggregated, anonymous statistics (e.g., app version, session duration, and feature usage) to help us understand which features are popular and how to optimize user experience.</li>
          <li><strong>Crash Diagnostics:</strong> We use Firebase Crashlytics to receive anonymous crash reports and stack traces so we can quickly identify and fix bugs.</li>
          <li><strong>Device Identifiers:</strong> Advertising networks (Google AdMob) may collect standard advertising identifiers (such as Apple IDFA or Google Advertising ID) in accordance with platform policies and your consent settings.</li>
        </ul>

        <h2 className="font-bold">3. In-App Purchases &amp; Subscriptions (Decopix PRO)</h2>
        <ul className="list-disc pl-10">
          <li><strong>Secure Payment Processing:</strong> All in-app purchases and subscriptions for Decopix PRO (weekly, monthly, annual, or lifetime) are processed directly by Apple App Store (iOS) or Google Play Store (Android).</li>
          <li><strong>No Financial Data Stored:</strong> We never receive, store, or have access to your credit card number, bank details, or billing address.</li>
          <li><strong>Managing &amp; Canceling Subscriptions:</strong> You can manage or cancel your subscription at any time through your app store account settings:
            <ul className="list-disc pl-8 mt-2">
              <li><strong>iOS users:</strong> Open iPhone Settings &gt; tap your Apple ID &gt; Subscriptions, or visit <a href="https://support.apple.com/en-us/HT202039" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Apple Support: Cancel a subscription</a>.</li>
              <li><strong>Android users:</strong> Open Google Play Store &gt; Profile icon &gt; Payments &amp; subscriptions &gt; Subscriptions, or visit <a href="https://support.google.com/googleplay/answer/7018481" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Play Help: Cancel, pause, or change a subscription</a>.</li>
            </ul>
          </li>
          <li>After cancellation, your PRO benefits remain active until the conclusion of the current billing cycle.</li>
        </ul>

        <h2 className="font-bold">4. Third-Party Services</h2>
        <p className="mb-4">Decopix integrates trusted, industry-standard third-party SDKs for diagnostics, configuration, and advertising:</p>
        <ul className="list-disc pl-10">
          <li>
            <Link href="https://policies.google.com/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Google AdMob &amp; Google Play Services
            </Link> &ndash; for rewarded video ads, banner ads, and app distribution.
          </li>
          <li>
            <Link href="https://firebase.google.com/support/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Google Analytics for Firebase &amp; Crashlytics
            </Link> &ndash; for anonymous stability monitoring, error reporting, and performance insights.
          </li>
          <li>
            <Link href="https://www.apple.com/legal/privacy/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Apple App Store &amp; StoreKit
            </Link> &ndash; for iOS in-app purchases, subscription management, and App Tracking Transparency compliance.
          </li>
        </ul>

        <h2 className="font-bold">5. Data Storage and Retention</h2>
        <h3 className="font-semibold text-lg mt-4">5.1 Local Storage</h3>
        <ul className="list-disc pl-10">
          <li><strong>Device-Only Storage:</strong> Your preferences, ticket counts, and customized configurations reside solely on your device.</li>
          <li><strong>Data Removal on Uninstall:</strong> Uninstalling Decopix deletes all locally saved preferences and cached data from your device.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">5.2 Data Retention</h3>
        <ul className="list-disc pl-10">
          <li>Aggregated, anonymous crash and analytics reports collected by Firebase are retained in accordance with Google&apos;s standard data retention policies.</li>
          <li>Since Decopix does not collect user accounts or photos, we retain zero personal user content on any server.</li>
        </ul>

        <h2 className="font-bold">6. Security</h2>
        <p className="mb-4">
          Because Decopix performs all creative image operations locally on your hardware, your photos are never exposed to remote network transmission risks. We implement standard security practices within the app to protect local preferences.
        </p>

        <h2 className="font-bold">7. Children&apos;s Privacy (COPPA &amp; GDPR-K)</h2>
        <p className="mb-4">
          Decopix does not knowingly collect or solicit personal information from children under the age of 13 (or under 16 in the European Union). The app does not require account creation, and user photos never leave the device. If you believe that a child has provided us with any information, please contact us immediately so we can take appropriate steps.
        </p>

        <h2 className="font-bold">8. Your Rights and Choices</h2>
        <ul className="list-disc pl-10">
          <li><strong>Ad Personalization Opt-Out:</strong> You can reset or limit your advertising identifier via your device settings (iOS: Settings &gt; Privacy &amp; Security &gt; Tracking; Android: Settings &gt; Google &gt; Ads).</li>
          <li><strong>Device Permissions:</strong> You can revoke photo library access at any time through your device settings.</li>
        </ul>

        <h2 className="font-bold">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect app updates or regulatory requirements. Any modifications will be published on this page with an updated &ldquo;Effective Date&rdquo;.
        </p>

        <h2 className="font-bold">10. Contact Us</h2>
        <p className="mb-4">
          If you have questions, feedback, or concerns regarding this Privacy Policy or your privacy in Decopix, please contact us:
        </p>
        <ul className="list-disc pl-10">
          <li><strong>Email:</strong> <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link></li>
          <li><strong>Developer:</strong> DucInnovaLab / Nguyễn Văn Đức</li>
          <li><strong>Website:</strong> <Link href="https://dducnv.github.io" className="text-blue-600 underline">https://dducnv.github.io</Link></li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> 04-10-2026<br />
            <strong>Version:</strong> 2.0<br />
            <strong>App:</strong> Decopix (com.ducinnovalab.decopix) &ndash; Compatible with iOS &amp; Android
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
