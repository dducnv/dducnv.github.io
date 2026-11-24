import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Unblox 3D - Privacy Policy",
    description:
      "Privacy Policy for Unblox 3D: 3D Blocks Puzzle Game. Learn how we collect, use, and protect your information while you play.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 pb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-center text-gray-500">
          <strong>Effective Date:</strong> November 24, 2026
        </p>

        <p className="mt-6">
          Thank you for playing <strong>Unblox 3D: 3D Blocks Puzzle Game</strong>{" "}
          (&quot;the game&quot;, &quot;we&quot;, &quot;us&quot;). This Privacy
          Policy describes how we collect, use, and protect your information
          when you play our game on iOS and Android devices. By installing and
          using the game, you agree to the collection and use of information in
          accordance with this policy and our{" "}
          <Link
            href="/unblox-3d/term"
            className="text-blue-600 underline font-medium"
          >
            Terms of Use
          </Link>
          .
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">1. Information We Collect</h2>
        <p>We collect minimal information necessary to deliver a smooth and enjoyable 3D puzzle gaming experience:</p>

        <h3 className="font-semibold text-xl mt-4 mb-2">a. Information You Provide to Us</h3>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>Customer Support &amp; Bug Reports:</strong> If you choose to submit a bug report via the in-game feedback tool or contact us by email, we collect the message or email you send, along with an optional diagnostic snapshot (OS version, screen dimensions, game state, and session error logs) to diagnose and resolve the issue. No personal identity information is collected automatically in bug reports.
          </li>
        </ul>

        <h3 className="font-semibold text-xl mt-4 mb-2">b. Information Collected Automatically</h3>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>Gameplay Progress &amp; Statistics:</strong> Highest level reached, star ratings, combo streaks, and sound/haptic preferences. This information is saved locally on your device.
          </li>
          <li>
            <strong>Device &amp; Hardware Diagnostics:</strong> Device model, operating system version (iOS / Android), graphics capabilities, and crash reports. This data is used solely to optimize 3D rendering performance and fix platform-specific crashes.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>To Deliver Core Gameplay:</strong> Maintain and restore your puzzle progress, levels cleared, and in-game settings.
          </li>
          <li>
            <strong>Leaderboards &amp; Achievements:</strong> Submit and display your high level and combo streaks on Apple Game Center and Google Play Games Services if you choose to participate.
          </li>
          <li>
            <strong>Game Optimization &amp; Bug Resolution:</strong> Identify gameplay bottlenecks, fix rendering glitches on various mobile GPUs, and enhance game stability.
          </li>
          <li>
            <strong>Customer Care:</strong> Address your feedback, inquiries, and technical issues.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and platform requirements.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">3. Third-Party Services &amp; Platform Integrations</h2>
        <p>
          The game integrates with standard platform gaming services to provide competitive leaderboards and cloud progress synchronization:
        </p>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <Link
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Apple Game Center
            </Link>{" "}
            (iOS / iPadOS) – provides global leaderboards, achievements, and cloud progress restoration for Apple players.
          </li>
          <li>
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Google Play Games Services
            </Link>{" "}
            (Android) – provides global leaderboards, achievements, and player authentication for Android players.
          </li>
          <li>
            <Link
              href="https://www.apple.com/legal/internet-services/itunes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Apple App Store
            </Link>{" "}
            &amp;{" "}
            <Link
              href="https://play.google.com/intl/en_us/about/play-terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Google Play Store
            </Link>{" "}
            – facilitate game distribution, license checks, and updates.
          </li>
          <li>
            <Link
              href="https://support.google.com/admob/answer/6128543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Google AdMob
            </Link>{" "}
            – delivers gameplay banner ads, occasional between-level interstitial ads, and optional player-initiated rewarded video ads to keep the game free to play.
          </li>
          <li>
            <Link
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              Firebase Analytics &amp; Crashlytics
            </Link>{" "}
            – collects anonymized gameplay telemetry and crash diagnostics to improve level balance, 3D rendering stability, and app performance.
          </li>
          <li>
            <Link
              href="https://www.revenuecat.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              RevenueCat
            </Link>{" "}
            – validates Apple App Store and Google Play receipts anonymously to sync and restore your Lifetime VIP (Pro) entitlement across sessions and devices.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">4. Sharing Your Information</h2>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>We Do Not Sell Your Data:</strong> We never sell, rent, or trade your personal information to third parties.
          </li>
          <li>
            <strong>Platform Game Services:</strong> When you connect to Apple Game Center or Google Play Games, your display name and leaderboard scores are shared with Apple or Google according to their respective privacy terms and your public profile settings.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, or to protect the rights, property, and safety of our users and the public.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">5. Data Storage, Retention &amp; Cloud Restore</h2>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>Local Storage:</strong> Your primary puzzle levels, combo streaks, and sound settings are saved directly on your device storage.
          </li>
          <li>
            <strong>Cloud Progress Restore:</strong> If you sign in with Apple Game Center or Google Play Games, your highest cleared level and highest combo are recorded on the cloud. If you reinstall the game or switch to a new phone, your progress can be automatically restored.
          </li>
          <li>
            <strong>Data Deletion:</strong> You can reset or clear all locally stored data at any time by uninstalling the application or clearing the app storage via your device settings.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">6. Advertising &amp; Lifetime VIP (Pro) Upgrade</h2>
        <p>
          We partner with mobile advertising networks (such as Google AdMob) to serve in-game advertisements that keep Unblox 3D free to play, including gameplay banner ads, occasional between-level interstitial ads, and optional rewarded video ads. You can manage personalized ad preferences through your device privacy settings (e.g., Apple App Tracking Transparency on iOS or Google Advertising ID on Android).
        </p>
        <p className="mt-3">
          <strong>Lifetime VIP (Pro) In-App Purchase:</strong> If you purchase the one-time <strong>Lifetime VIP (Pro)</strong> upgrade, all payment processing is handled directly by the Apple App Store or Google Play Store (with receipt verification via RevenueCat)—we never collect or store your credit card or billing information. Lifetime VIP permanently disables all forced Banner Ads and automatic Interstitial Ads, grants <strong>1 free +3 Hearts instant revive per level attempt</strong>, and automatically <strong>resets your hint balance to 3 free hints on every level or match restart</strong>. Optional, player-initiated Rewarded Video Ads remain available only when you voluntarily choose to request extra hints after exhausting all 3 free hints within the same level, request a second revive after using your 1 free revive on the same level attempt, double your earned stars (x2 Stars) on Victory, or activate a 3-level trial of a locked 3D block skin. For full details on Pro privileges, please see our{" "}
          <Link
            href="/unblox-3d/term"
            className="text-blue-600 underline font-medium"
          >
            Terms of Use
          </Link>
          .
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">7. Data Security</h2>
        <p>
          We take appropriate technical measures to safeguard your information. Since primary game progress is kept locally on your phone, the security of that data also depends on the physical and passcode protection of your device.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">8. Children&apos;s Privacy</h2>
        <p>
          Unblox 3D is a family-friendly casual puzzle game. We do not knowingly collect or solicit personal information from children under 13 (or under the applicable age of consent in your jurisdiction). If you are a parent or guardian and believe your child has provided us with personal data without your consent, please contact us so we can immediately delete it.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">9. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy periodically to reflect game updates or legal requirements. Any modifications will be posted directly on this page with an updated &quot;Effective Date&quot;. We encourage you to review this policy from time to time.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">10. Contact Us</h2>
        <p>
          If you have any questions, suggestions, or concerns regarding this Privacy Policy or your privacy while playing Unblox 3D, please contact us at:
        </p>
        <ul className="list-disc pl-10 mt-2 space-y-1">
          <li>
            Email:{" "}
            <Link
              href="mailto:contact.ducnv@gmail.com"
              className="text-blue-600 underline font-medium"
            >
              contact.ducnv@gmail.com
            </Link>
          </li>
          <li>
            Terms of Use:{" "}
            <Link
              href="/unblox-3d/term"
              className="text-blue-600 underline font-medium"
            >
              https://dducnv.github.io/unblox-3d/term
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
