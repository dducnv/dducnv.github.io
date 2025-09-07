import { Database, Download, Eye, Github, Key, Lock, Shield, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "CyberSafe | Open Source Offline Password Manager",
    description: "Securely store and manage your passwords offline. Full control. No cloud. No internet.",
    keywords: "CyberSafe, Offline Password Manager, Data Security, Encryption, AES-256, SQLCipher, Argon2id",
    author: "Duc's Innovation Lab, Ind.",
  };
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="relative">
          <Image
            src="/cybersafe.png"
            alt="CyberSafe Icon"
            width={100}
            height={100}
            className="rounded-2xl mb-6 shadow-lg border-4 border-gray-200"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          CyberSafe
        </h1>
        <h2 className="text-xl text-gray-600 mb-6 font-medium">
          Open Source Offline Password Manager
        </h2>

        <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
          Securely store and manage your passwords offline.
          <br />
          <strong>Full control. No cloud. No internet.</strong>
        </p>

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt"
            className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            <ShieldCheck className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Free Version</div>
              <div className="text-xs text-gray-500">Limited Edition</div>
            </div>
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 font-semibold shadow-lg"
          >
            <Star className="w-5 h-5" />
            <div className="text-left">
              <div className="font-bold">Pro Version</div>
              <div className="text-xs text-gray-700">Full Features</div>
            </div>
          </Link>
        </div>

        {/* Open Source Badge */}
        <div className="flex items-center gap-2 mb-6">
          <Github className="w-5 h-5 text-gray-600" />
          <Link
            href="https://github.com/dducnv/cybersafe_pro"
            target="_blank"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Open Source on GitHub
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/cybersafe/en/privacy-policy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cybersafe/en/terms-of-service" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
        </div>
      </header>

      {/* Security Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Military-Grade Security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CyberSafe uses the most advanced encryption algorithms to protect your data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AES-256 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">AES-256</h3>
                  <p className="text-sm text-gray-600">Military-grade encryption</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Data is encrypted using AES-256 - the encryption standard used by government agencies and military organizations.
              </p>
            </div>

            {/* SQLCipher */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">SQLCipher</h3>
                  <p className="text-sm text-gray-600">Encrypted database</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                SQLite database is encrypted with SQLCipher, ensuring all data is protected even if files are accessed without authorization.
              </p>
            </div>

            {/* Argon2id */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Argon2id</h3>
                  <p className="text-sm text-gray-600">Secure password hashing</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Uses Argon2id - the password hashing algorithm recommended by security experts, resistant to brute-force attacks.
              </p>
            </div>

            {/* Offline Operation */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">100% Offline</h3>
                  <p className="text-sm text-gray-600">No internet required</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Operates completely offline. Your data never leaves your device, eliminating all network-based attack vectors.
              </p>
            </div>

            {/* Device-Specific Keys */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Unique Keys</h3>
                  <p className="text-sm text-gray-600">One key per device</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Each device generates a unique encryption key. Data can only be accessed on the device where it was created.
              </p>
            </div>

            {/* Backup Security */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Secure Backup</h3>
                  <p className="text-sm text-gray-600">PIN-protected</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Backup files are encrypted with your chosen password. Can be stored on Google Drive with double encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600">
              Everything you need to manage passwords securely
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Store Account Information</h3>
                  <p className="text-sm text-gray-600">Passwords, 2FA codes, and private notes encrypted securely</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">App Locking</h3>
                  <p className="text-sm text-gray-600">Protected by PIN and biometric authentication</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Auto-Lock</h3>
                  <p className="text-sm text-gray-600">Automatically locks the app when not in use</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Modern Interface</h3>
                  <p className="text-sm text-gray-600">Beautiful, user-friendly design</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">No Data Collection</h3>
                  <p className="text-sm text-gray-600">No analytics, no ads, no tracking</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cyber Attack Resistant</h3>
                  <p className="text-sm text-gray-600">Designed to resist phishing, keyloggers, and brute-force</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Google Drive Backup</h3>
                  <p className="text-sm text-gray-600">Sync backups to Google Drive with encryption</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Open Source</h3>
                  <p className="text-sm text-gray-600">Review and contribute to the source code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start protecting your passwords today</h2>
          <p className="text-xl mb-8 opacity-90">
            Download CyberSafe and experience absolute security
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cybersafe_lmt"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Free
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.duc_app_lab_ind.cyber_safe"
              className="px-8 py-4 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition-colors"
            >
              Buy Pro
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}