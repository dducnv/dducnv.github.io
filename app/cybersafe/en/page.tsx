import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Star } from 'lucide-react'
export async function generateMetadata() {
  return {
    title: "CyberSafe -  Offline Password Manager",
    description: " Securely store and organize your passwords offline.  Full control. No cloud. No internet.",
    keywords: "CyberSafe, Offline Password Manager, Data Security, Encryption",
    author: "Duc's Innovation Lab, Ind.",
  };
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <Image
          src="/cybersafe.png"
          alt="CyberSafe Icon"
          width={80}
          height={80}
          className="rounded-xl mb-4 shadow-md"
        />
        <h1 className="text-4xl font-extrabold tracking-tight font-mono text-gray-900">
          CyberSafe - Offline Password Manager
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Securely store and organize your passwords offline.
          <br />
          Full control. No cloud. No internet.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt"} className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-100 transition">
            <ShieldCheck className="w-5 h-5" />
            Free version
          </Link>
          <Link href={"https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"} className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition font-semibold shadow-md">
            <Star className="w-5 h-5" />
            Pro version
          </Link>
        </div>

        {/* Policy Links */}
        <div className="mt-4 text-sm text-gray-500 flex gap-4">
          <Link href="/cybersafe/en/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cybersafe/en/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </header>

      {/* Feature Highlights */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Privacy-First Features</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🔐 100% Offline Mode</h3>
              <p className="text-gray-600 text-sm">
                CyberSafe works fully offline. Your data never leaves your device. No cloud, no sync, total control.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🛡️ AES-256 Encryption</h3>
              <p className="text-gray-600 text-sm">
                Military-grade AES-256 encryption is applied locally to all stored data, including passwords and OTP codes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🔑 Unique Per-Device Key</h3>
              <p className="text-gray-600 text-sm">
                Each installation generates a unique encryption key, ensuring your data is locked to your device only.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🚫 No Third-Party Integration</h3>
              <p className="text-gray-600 text-sm">
                No analytics, no ads, no trackers. CyberSafe is completely self-contained for maximum privacy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🧱 Resilient to Cyber Attacks</h3>
              <p className="text-gray-600 text-sm">
                Designed to resist phishing, keyloggers, and brute-force by avoiding online surfaces and exposing no APIs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">🙅 No Data Collection</h3>
              <p className="text-gray-600 text-sm">
                CyberSafe collects absolutely no data from you. No email required. No account needed. Just pure offline privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
