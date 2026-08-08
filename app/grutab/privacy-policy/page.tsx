import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Grutab - Privacy Policy",
    description: "Privacy Policy for Grutab - Learn how we collect, use, and protect your information. Grutab is designed with privacy as a top priority, ensuring all your browsing data stays locally on your device.",
  };
}

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 ">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-center">
          <strong>Effective Date:</strong> 09-08-2026 (dd-mm-yyyy)
        </p>
        <p className="mt-4">
          At <strong>Grutab</strong>, we value your privacy and believe that your browsing data belongs solely to you. This Privacy Policy outlines how we handle your information when you use the Grutab browser extension.
        </p>

        <h2 className="font-bold">1. Information We Collect</h2>
        <p className="mb-4">Grutab operates entirely on your local device. We have designed the extension to require minimal permissions while ensuring maximum privacy.</p>

        <h3 className="font-semibold text-lg mt-4">1.1 Personal Information</h3>
        <ul className="list-disc pl-10">
          <li><strong>No Personal Data Collection:</strong> We do not collect, store, or process any personal information such as your name, email address, passwords, or any other personally identifiable information.</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">1.2 Browsing History & Data</h3>
        <ul className="list-disc pl-10">
          <li><strong>Local History Access:</strong> To provide the core functionality of grouping your work documents (e.g., Figma, GitHub, Google Docs), Grutab requires permission to read your browser's history. </li>
          <li><strong>Strictly Local Processing:</strong> This history data is processed and indexed <strong>strictly locally</strong> on your device. It is never sent to our servers or any third-party services.</li>
        </ul>

        <h2 className="font-bold">2. How We Use Your Information</h2>
        <p className="mb-4">Any data accessed by Grutab is used exclusively to provide and improve the functionality of the extension on your machine.</p>

        <h3 className="font-semibold text-lg mt-4">2.1 Core Functionality</h3>
        <ul className="list-disc pl-10">
          <li><strong>Dashboard Organization:</strong> Your browsing history is used to identify work-related URLs and group them logically on your New Tab dashboard.</li>
          <li><strong>Background Sync (Alarms):</strong> We use the browser's background task (alarms) permission to periodically re-index your recent history locally. This ensures your dashboard is always up-to-date without transmitting any data outside your browser.</li>
        </ul>

        <h2 className="font-bold">3. Data Sharing and Third-Party Services</h2>
        <ul className="list-disc pl-10">
          <li><strong>Zero Data Sharing:</strong> We do not sell, rent, or share your data with any third parties.</li>
          <li><strong>No External Tracking:</strong> Grutab does not integrate with any third-party analytics, advertising networks, or external tracking SDKs.</li>
        </ul>

        <h2 className="font-bold">4. Data Storage and Retention</h2>
        <p className="mb-4">We do not own or hold any of your data.</p>

        <h3 className="font-semibold text-lg mt-4">4.1 Local Storage</h3>
        <ul className="list-disc pl-10">
          <li><strong>Device-Only Storage:</strong> All settings, preferences, and indexed document lists are saved using your browser's local storage (`chrome.storage.local`).</li>
          <li><strong>Data Loss on Uninstall:</strong> If you uninstall the Grutab extension, all stored preferences and indexed data will be permanently and automatically deleted by the browser.</li>
        </ul>

        <h2 className="font-bold">5. Security</h2>
        <ul className="list-disc pl-10">
          <li>Because Grutab does not transmit data over the internet, your information is as secure as your local device and browser environment. We recommend keeping your browser updated and using standard device security practices.</li>
        </ul>

        <h2 className="font-bold">6. Your Rights and Data Control</h2>
        <p className="mb-4">Since your data never leaves your device, you have complete control over it.</p>
        <ul className="list-disc pl-10">
          <li><strong>Clear Data:</strong> You can clear the extension's data at any time by clearing your browser's local storage or uninstalling the extension.</li>
          <li><strong>History Control:</strong> If you delete items from your browser's native history, Grutab will naturally stop displaying them after the next local re-index.</li>
        </ul>

        <h2 className="font-bold">7. Changes to This Privacy Policy</h2>
        <ul className="list-disc pl-10">
          <li>We may update this Privacy Policy from time to time to reflect changes in our extension's features or permissions. Any updates will be posted on this page with a revised effective date.</li>
        </ul>

        <h2 className="font-bold">8. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy or how Grutab handles your data, please feel free to reach out.</p>

        <ul className="list-disc pl-10">
          <li><strong>Email:</strong> <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link></li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> 09-08-2026<br />
            <strong>Version:</strong> 1.0<br />
            <strong>App:</strong> Grutab Browser Extension
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
