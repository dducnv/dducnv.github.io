import React from 'react'
import Link from 'next/link'

export async function generateMetadata() {
    return {
        title: "Tetrafall - Privacy Policy",
        description: "Privacy Policy for Tetrafall - A Classic Block Puzzle Game. We collect minimal game data to provide leaderboard features and improve gameplay experience.",
    };
}

const page = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
                <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
                <p className="text-center">
                    <strong>Effective Date:</strong> 10-05-2024 (dd-mm-yyyy)
                </p>
                <p className="mt-4">
                    At <strong>Tetrafall</strong>, developed by Duc&apos;s Innovation Lab, Inc., we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>
                
                <h2 className="font-bold">1. Information We Collect</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Game Data:</strong> We collect and store game-related information such as scores, achievements, and gameplay statistics.</li>
                    <li><strong>Usage Data:</strong> We track gameplay duration and frequency to improve game performance and user experience.</li>
                    <li><strong>Device Information:</strong> Basic device information including operating system and model for compatibility purposes.</li>
                    <li><strong>Network Data:</strong> Device IP address for leaderboard functionality and game services.</li>
                </ul>
                
                <h2 className="font-bold">2. How We Use Your Information</h2>
                <ul className="list-disc pl-10">
                    <li><strong>Game Features:</strong> Your game data is used to provide features like leaderboards, achievements, and progress tracking.</li>
                    <li><strong>Game Improvement:</strong> Usage data helps us enhance gameplay mechanics and fix technical issues.</li>
                    <li><strong>Advertising:</strong> We may display in-game advertisements to maintain the game as a free service.</li>
                </ul>
                
                <h2 className="font-bold">3. Third-Party Services</h2>
                <ul className="list-disc pl-10">
                    <li>We utilize the following third-party services:</li>
                    <ul className="list-disc pl-14">
                        <li><Link href="https://www.google.com/policies/privacy/" className="text-blue-600 underline">Google Play Services</Link> - Game updates and downloads</li>
                        <li><Link href="https://support.google.com/admob/answer/6128543?hl=en" className="text-blue-600 underline">AdMob</Link> - In-game advertisements</li>
                        <li><Link href="https://firebase.google.com/support/privacy" className="text-blue-600 underline">Firebase Analytics</Link> - Player behavior analysis</li>
                        <li><Link href="https://firebase.google.com/support/privacy/" className="text-blue-600 underline">Firebase Crashlytics</Link> - Game monitoring and bug fixes</li>
                    </ul>
                    <li>These services may collect anonymous data to improve game performance and ad relevance.</li>
                </ul>
                
                <h2 className="font-bold">4. Data Storage</h2>
                <ul className="list-disc pl-10">
                    <li>Game progress and settings are stored locally on your device.</li>
                    <li>Leaderboard data and high scores are stored on our secure servers.</li>
                    <li>You can delete your local game data by uninstalling the app.</li>
                </ul>
                
                <h2 className="font-bold">5. Security</h2>
                <ul className="list-disc pl-10">
                    <li>We implement appropriate security measures to protect player information.</li>
                    <li>However, no method of data transmission over the internet is 100% secure.</li>
                </ul>
                
                <h2 className="font-bold">6. Your Rights</h2>
                <ul className="list-disc pl-10">
                    <li>You can opt out of personalized advertising through your device settings.</li>
                    <li>You can request deletion of your leaderboard data by contacting us.</li>
                </ul>
                
                <h2 className="font-bold">7. Children&apos;s Privacy</h2>
                <ul className="list-disc pl-10">
                    <li>While our game is suitable for all ages, we do not knowingly collect personal information from children under 13.</li>
                    <li>Parents who believe their child has provided personal information should contact us for removal.</li>
                </ul>
                
                <h2 className="font-bold">8. Changes to This Privacy Policy</h2>
                <ul className="list-disc pl-10">
                    <li>We may update this Privacy Policy periodically. Changes will be posted here with an updated effective date.</li>
                    <li>Continued use of the game after changes constitutes acceptance of those changes.</li>
                </ul>
                
                <h2 className="font-bold">9. Contact Us</h2>
                <ul className="list-disc pl-10">
                    <li>For questions about this Privacy Policy or your data, please contact us at <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">contact.ducnv@gmail.com</Link>.</li>
                </ul>
            </div>
        </>
    );
};

export default page;