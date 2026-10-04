import React from 'react';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Decopix - Terms of Service",
    description: "Read the terms of service for Decopix, covering features, subscriptions, user rights, and usage guidelines.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
        <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="text-center">
          <strong>Effective Date:</strong> October 4, 2026
        </p>
        <p className="mt-4">
          Welcome to <strong>Decopix</strong> (&ldquo;the App&rdquo;), developed by DucInnovaLab. By downloading, accessing, or using Decopix on iOS or Android, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
        </p>

        <h2 className="font-bold">1. Acceptance of Terms</h2>
        <ul className="list-disc pl-10">
          <li>By downloading, installing, or using Decopix, you confirm that you are at least 13 years old (or the legal age of majority in your jurisdiction) and agree to comply with these Terms of Service and our Privacy Policy.</li>
          <li>If you are using the app on behalf of an entity or minor, you represent that you have the authority to accept these terms on their behalf.</li>
        </ul>

        <h2 className="font-bold">2. Use of Service &amp; User Content Ownership</h2>
        <ul className="list-disc pl-10">
          <li><strong>Your Content, Your Ownership:</strong> You retain complete ownership, copyright, and intellectual property rights in all photos, artwork, and exported designs created or edited using Decopix. We do not claim any ownership rights over your content.</li>
          <li><strong>Privacy First:</strong> Decopix operates with 100% on-device image processing. Your photos are never uploaded to our servers.</li>
          <li><strong>Permitted Use:</strong> You may use the images you edit and export with Decopix for personal, artistic, and commercial purposes (e.g., social media, portfolio, prints).</li>
          <li><strong>Prohibited Conduct:</strong> You agree not to:
            <ul className="list-disc pl-8 mt-1">
              <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code of Decopix.</li>
              <li>Sublicense, rent, lease, distribute, or extract proprietary graphic assets, filters, or shaders for use in competing applications.</li>
              <li>Use the app for any unlawful purpose or in violation of any applicable laws.</li>
            </ul>
          </li>
        </ul>

        <h2 className="font-bold">3. In-App Purchases &amp; Decopix PRO Subscriptions</h2>
        <ul className="list-disc pl-10">
          <li><strong>Free Tier &amp; Ticket System:</strong> Decopix offers free access with local export tickets that refresh daily or can be earned by watching rewarded video ads.</li>
          <li><strong>Decopix PRO Benefits:</strong> Upgrading to Decopix PRO unlocks unlimited image exports, all doodle border patterns &amp; stickers, retro print styles, aesthetic frame packs, smart palette tools, high-resolution exports, and an ad-free experience.</li>
          <li><strong>Billing &amp; Payment:</strong> Subscriptions (e.g., weekly, monthly, annual) and lifetime one-time purchases are processed securely through Apple App Store (In-App Purchase) or Google Play Billing. Payment is charged to your respective store account at confirmation of purchase.</li>
          <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
          <li><strong>Managing &amp; Canceling:</strong> You can manage or cancel your subscription at any time through your device&apos;s app store settings:
            <ul className="list-disc pl-8 mt-2">
              <li><strong>Apple App Store (iOS):</strong> Go to iPhone Settings &gt; Apple ID &gt; Subscriptions, or follow <a href="https://support.apple.com/en-us/HT202039" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Apple&apos;s cancellation guide</a>.</li>
              <li><strong>Google Play Store (Android):</strong> Go to Google Play Store &gt; Profile icon &gt; Payments &amp; subscriptions &gt; Subscriptions, or follow <a href="https://support.google.com/googleplay/answer/7018481" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Play&apos;s cancellation guide</a>.</li>
            </ul>
          </li>
          <li><strong>Refunds:</strong> Refund requests are governed by the refund policies of Apple App Store or Google Play Store. We do not process refunds directly.</li>
        </ul>

        <h2 className="font-bold">4. Intellectual Property</h2>
        <ul className="list-disc pl-10">
          <li>All rights, title, and interest in and to Decopix (excluding your personal photos), including but not limited to the app name, branding, logo, UI/UX designs, shaders, icons, and proprietary algorithms, are owned by DucInnovaLab.</li>
        </ul>

        <h2 className="font-bold">5. Disclaimer of Warranties</h2>
        <ul className="list-disc pl-10">
          <li>Decopix is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis, without warranties of any kind, whether express or implied.</li>
          <li>While we strive to provide a seamless, high-performance photo editing experience, we do not guarantee that the app will always be error-free, uninterrupted, or compatible with every device hardware configuration.</li>
        </ul>

        <h2 className="font-bold">6. Limitation of Liability</h2>
        <ul className="list-disc pl-10">
          <li>To the maximum extent permitted by applicable law, DucInnovaLab and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the application.</li>
        </ul>

        <h2 className="font-bold">7. Termination</h2>
        <ul className="list-disc pl-10">
          <li>You may terminate these terms at any time by simply deleting and uninstalling the application from your device.</li>
          <li>We reserve the right to suspend or discontinue features or the application at our discretion.</li>
        </ul>

        <h2 className="font-bold">8. Changes to Terms</h2>
        <ul className="list-disc pl-10">
          <li>We reserve the right to update these Terms of Service periodically. Updated terms will be posted on this page with a revised effective date. Continued use of Decopix after changes constitute acceptance of the new terms.</li>
        </ul>

        <h2 className="font-bold">9. Contact Us</h2>
        <ul className="list-disc pl-10">
          <li>If you have any questions or concerns regarding these Terms of Service, please reach out to us at:
            <ul className="list-disc pl-8 mt-1">
              <li><strong>Email:</strong> <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link></li>
              <li><strong>Developer:</strong> DucInnovaLab / Nguyễn Văn Đức</li>
              <li><strong>Website:</strong> <Link href="https://dducnv.github.io" className="text-blue-600 underline">https://dducnv.github.io</Link></li>
            </ul>
          </li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Last Updated:</strong> 04-10-2026<br />
            <strong>Version:</strong> 2.0<br />
            <strong>App:</strong> Decopix (com.ducinnovalab.decopix)
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
