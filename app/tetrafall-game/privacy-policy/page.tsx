import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Tessera - Privacy Policy",
    description: "Privacy Policy for Tessera: Classic Block & Blast. We collect minimal game data to provide leaderboard features, improve gameplay experience, and support advertising.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 pb-10">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-center">
          <strong>Effective Date:</strong> 22-01-2026
        </p>
        <p className="mt-4">
          At <strong>Tessera: Classic Block & Blast</strong> (formerly Tetrafall), developed by Duc&apos;s Innovation Lab, Ind., we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li><strong>Identifiers (Device ID):</strong> We collect device identifiers (such as IDFA or AAID) to support advertising and app functionality.</li>
          <li><strong>Game Data:</strong> We collect and store game-related information such as scores, achievements, and level progress.</li>
          <li><strong>Usage Data:</strong> We track product interactions (gameplay duration, taps, level completion) and advertising data (ads viewed).</li>
          <li><strong>Diagnostics:</strong> We collect crash logs and performance data to identify bugs and improve stability.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li><strong>Game Features:</strong> Your game data is used to provide features like leaderboards, achievements, and progress tracking.</li>
          <li><strong>Game Improvement:</strong> Usage and diagnostic data help us enhance gameplay mechanics and fix technical issues.</li>
          <li><strong>Advertising:</strong> We display in-game advertisements to maintain the game as a free service.</li>
          <li><strong>Tracking:</strong> We use device identifiers to track user activity across different apps and websites for the purpose of delivering personalized advertisements.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">3. Third-Party Services</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>We utilize the following third-party services:</li>
          <ul className="list-disc pl-14 mt-2">
            <li><Link href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Play Services</Link> - Game updates and downloads</li>
            <li><Link href="https://support.google.com/admob/answer/6128543?hl=vi" className="text-blue-600 underline">AdMob (Google)</Link> - In-game advertisements</li>
            <li><Link href="https://firebase.google.com/support/privacy" className="text-blue-600 underline">Firebase Analytics</Link> - Player behavior analysis</li>
            <li><Link href="https://firebase.google.com/support/privacy/" className="text-blue-600 underline">Firebase Crashlytics</Link> - Game monitoring and bug fixes</li>
          </ul>
          <li className="mt-2">These services may collect anonymous data to improve game performance and ad relevance.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">4. Data Storage</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>Game progress and settings are stored locally on your device.</li>
          <li>Leaderboard data and high scores are stored on our secure servers.</li>
          <li>You can delete your local game data by uninstalling the app.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">5. Security</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>We implement appropriate security measures to protect player information.</li>
          <li>However, no method of data transmission over the internet is 100% secure.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">6. Your Rights & Choices</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li><strong>App Tracking Transparency (iOS):</strong> You can choose to &quot;Ask App Not to Track&quot; when prompted by the app.</li>
          <li><strong>Opt-out:</strong> You can opt out of personalized advertising through your device settings.</li>
          <li><strong>Deletion:</strong> You can request deletion of your leaderboard data by contacting us.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">7. Children&apos;s Privacy</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>While our game is suitable for all ages, we do not knowingly collect personal information from children under 13.</li>
          <li>Parents who believe their child has provided personal information should contact us for removal.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">8. Changes to This Privacy Policy</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>We may update this Privacy Policy periodically. Changes will be posted here with an updated effective date.</li>
          <li>Continued use of the game after changes constitutes acceptance of those changes.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">9. Contact Us</h2>
        <ul className="list-disc pl-10 space-y-1">
          <li>For questions about this Privacy Policy or your data, please contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link>.</li>
        </ul>
      </div>
    </>
  );
};

export default page;