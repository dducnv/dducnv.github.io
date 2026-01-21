import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Tessera - Privacy Policy",
    description:
      "Privacy Policy for Tessera: Classic Block Puzzle. Learn how we collect, use, and protect your information while you play.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-center">
          <strong>Effective Date:</strong> December 14, 2025
        </p>
        <p className="mt-4">
          Thank you for playing <strong>Tessera: Classic Block Puzzle</strong>{" "}
          (&quot;the game&quot;, &quot;we&quot;, &quot;us&quot;). This Privacy
          Policy describes how we collect, use, and share information about you
          when you play our game. By using the game, you agree to this policy.
        </p>

        <h2 className="font-bold">1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <h3 className="font-semibold">a. Information You Provide to Us</h3>
        <ul className="list-disc pl-10">
          <li>
            <strong>Contact Information:</strong> If you contact us for support,
            we may collect your name, email address, and the content of your
            message.
          </li>
        </ul>
        <h3 className="font-semibold">b. Information Collected Automatically</h3>
        <ul className="list-disc pl-10">
          <li>
            <strong>Usage Data:</strong> How you play the game (score, levels
            achieved, and other in-game interactions). This data is stored
            locally on your device.
          </li>
          <li>
            <strong>Device Information:</strong> Device model, operating system,
            and unique device identifiers.
          </li>
          <li>
            <strong>Analytics Data:</strong> We use third-party services like{" "}
            <Link
              href="https://firebase.google.com/support/privacy"
              className="text-blue-600 underline"
            >
              Google Analytics for Firebase
            </Link>{" "}
            to collect and analyze usage data (which may include IP address and
            mobile network information) to improve the game.
          </li>
        </ul>

        <h2 className="font-bold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-10">
          <li>
            <strong>To Provide and Maintain the Game:</strong> Operate and
            maintain the game, including saving your game progress locally on
            your device.
          </li>
          <li>
            <strong>To Improve and Personalize the Game:</strong> Understand how
            players use the game and improve their experience.
          </li>
          <li>
            <strong>For Customer Support:</strong> Respond to questions and
            support requests.
          </li>
          <li>
            <strong>For Analytics:</strong> Monitor and analyze trends and usage
            of the game.
          </li>
          <li>
            <strong>To Comply with Law:</strong> Fulfill legal obligations.
          </li>
        </ul>

        <h2 className="font-bold">3. Third-Party Services</h2>
        <ul className="list-disc pl-10">
          <li>
            <Link
              href="https://www.google.com/policies/privacy/"
              className="text-blue-600 underline"
            >
              Google Play Services
            </Link>{" "}
            (Android) – for game updates and distribution on Android devices.
          </li>
          <li>
            <Link
              href="https://www.apple.com/privacy/"
              className="text-blue-600 underline"
            >
              Apple App Store
            </Link>{" "}
            (iOS) – for game updates and distribution on iOS devices.
          </li>
          <li>
            <Link
              href="https://support.google.com/admob/answer/6128543?hl=en"
              className="text-blue-600 underline"
            >
              Google AdMob
            </Link>{" "}
            – in-game advertisements (when implemented).
          </li>
          <li>
            <Link
              href="https://firebase.google.com/support/privacy"
              className="text-blue-600 underline"
            >
              Google Analytics for Firebase
            </Link>{" "}
            – player behavior analytics to improve the game.
          </li>
          <li>
            <Link
              href="https://firebase.google.com/support/privacy/"
              className="text-blue-600 underline"
            >
              Firebase Crashlytics
            </Link>{" "}
            – crash reporting and app stability monitoring.
          </li>
        </ul>

        <h2 className="font-bold">4. Sharing Your Information</h2>
        <ul className="list-disc pl-10">
          <li>We do not sell your personal information.</li>
          <li>
            <strong>With Service Providers:</strong> We may share information
            with third-party companies that provide services on our behalf, such
            as data analysis (e.g., Google Analytics for Firebase).
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose your information
            if required by law or to protect the rights, property, or safety of
            us, our players, or others.
          </li>
        </ul>

        <h2 className="font-bold">5. Data Storage and Retention</h2>
        <ul className="list-disc pl-10">
          <li>
            Your game data, including progress and scores, is stored locally on
            your device&apos;s database. We do not store this data on our
            servers.
          </li>
          <li>
            If you uninstall the game, all your game data will be permanently
            deleted from your device and cannot be recovered.
          </li>
        </ul>

        <h2 className="font-bold">6. Advertising</h2>
        <ul className="list-disc pl-10">
          <li>
            We may partner with third-party advertising networks to display
            advertisements within the game in the future. These partners may
            collect and use information (such as device identifiers) to provide
            personalized ads. We will update this policy when advertising is
            implemented.
          </li>
        </ul>

        <h2 className="font-bold">7. Data Security</h2>
        <ul className="list-disc pl-10">
          <li>
            We take reasonable measures to protect your information. Because
            data is stored locally on your device, its security also depends on
            the security of your device.
          </li>
        </ul>

        <h2 className="font-bold">8. Children&apos;s Privacy</h2>
        <ul className="list-disc pl-10">
          <li>
            The game is not intended for children under 13 (or the minimum age
            in the relevant jurisdiction). We do not knowingly collect personal
            data from children. If you believe a child has provided information,
            please contact us.
          </li>
        </ul>

        <h2 className="font-bold">9. Changes to This Policy</h2>
        <ul className="list-disc pl-10">
          <li>
            We may update this Privacy Policy from time to time. We will notify
            you of changes by posting the updated policy on this page. Please
            review it periodically.
          </li>
        </ul>

        <h2 className="font-bold">10. Contact Us</h2>
        <ul className="list-disc pl-10">
          <li>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <Link
              href="mailto:contact.ducnv@gmail.com"
              className="text-blue-600 underline"
            >
              contact.ducnv@gmail.com
            </Link>
            .
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;