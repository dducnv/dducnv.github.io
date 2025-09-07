import Link from 'next/link';
export async function generateMetadata() {
  return {
    title: "CyberSafe - Privacy Policy | Offline Password Manager",
    description: "Learn about the Privacy Policy of CyberSafe, the offline password manager application. Discover how we protect your data and ensure your privacy.",
    keywords: "Privacy Policy, CyberSafe, Offline Password Manager, Data Security, Encryption",
    author: "Duc's Innovation Lab, Ind.",
  };
}

const page = () => {
  return (
    <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5">
      <h1>Privacy Policy</h1>
      <h2>CyberSafe - Offline Password Manager Application</h2>
      <h3>Duc&lsquo;s Innovation Lab, Ind.</h3>
      <p>
        <strong>Last Updated:</strong> April 3, 2025
      </p>
      <hr />
      <div className="section animate">
        <h2>1. Introduction</h2>
        <p>
          At Duc&lsquo;s Innovation Lab, Ind., we are committed to protecting your privacy and securing your information. CyberSafe is an offline password manager application designed to ensure that your data is always protected, free from data breaches of online services, resistant to cyberattacks such as phishing, keyloggers, or brute-force attacks, and operates without server connections or cloud synchronization. CyberSafe gives you full control over your information without the risk of data collection or tracking.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>2. Information We Do Not Collect</h2>
        <p>
          CyberSafe operates entirely <strong>offline</strong>. This means:
        </p>
        <ul>
          <li>
            <strong>
              We do not collect, store, or transmit any of your personal data, passwords, or sensitive information.
            </strong>
          </li>
          <li>
            All data is stored locally on your device and cannot be accessed by us or any third party.
          </li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>3. Data Security</h2>
        <h3>3.1. Local Storage</h3>
        <ul>
          <li>
            Your data is encrypted and stored locally on your device using advanced encryption algorithms such as <strong>AES-256</strong>.
          </li>
          <li>
            Encryption keys are generated and managed on your device, ensuring that only you can access the data.
          </li>
        </ul>
        <h3>3.2. Unique Encryption Key for Each Device</h3>
        <ul>
          <li>
            Each device is assigned a <strong>unique encryption key</strong> when you set up the application for the first time.
          </li>
          <li>
            This encryption key is not shared between devices and cannot be duplicated.
          </li>
          <li>
            This ensures that your data can only be accessed on the device where it was created.
          </li>
        </ul>
        <h3>3.3. Data Encryption</h3>
        <ul>
          <li>
            <strong>Passwords, TOTP, and personal information</strong> are encrypted using unique encryption keys for each type of data.
          </li>
          <li>
            Encryption and decryption operations are performed locally on your device.
          </li>
        </ul>
        <h3>3.4. Backup & Restore</h3>
        <ul>
          <li>
            <strong>Data Backup:</strong>
            <p>Backup files are encrypted using the application key combined with your password, ensuring that only you can access and decrypt them.</p>
          </li>
          <li>
            <strong>Data Restore:</strong>
            <p>To restore, you must provide the password used when creating the backup file. If the password is lost, the backup file cannot be recovered.</p>
          </li>
          <li>
            <strong>Backup to Google Drive:</strong>
            <p>If you choose to store backups on Google Drive, the files are encrypted with the same mechanism as local backups. The backup files are hidden in Google Drive and can only be opened by the application.</p>
          </li>
          <li>
            <strong>Restore from Google Drive:</strong>
            <p>Backup files stored in Google Drive must be decrypted with your password, just like local backups. If the password is forgotten, the data cannot be accessed.</p>
          </li>
          <li>
            <strong>Process:</strong>
            <p>All backup and restore operations must be performed manually by you. The application does not automatically initiate any backup or restore actions without your explicit request.</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>4. Security Features</h2>
        <h3>4.1. Offline Password Management</h3>
        <ul>
          <li>CyberSafe does not require an internet connection to operate.</li>
          <li>
            Your data is never uploaded to servers or shared with third parties.
          </li>
        </ul>
        <h3>4.2. TOTP and Password Encryption</h3>
        <ul>
          <li>
            TOTP (Time-based One-Time Password) and passwords are encrypted using advanced algorithms.
          </li>
          <li>Only you can decrypt and use this data.</li>
        </ul>
      </div>
      <hr />
      <div className="section animate">
        <h2>5. Third-Party Services</h2>
        <p>
          CyberSafe does not integrate with any third-party services. Your data is never shared or transmitted outside your device.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>6. Changes to the Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post any changes on this page and update the &ldquo;Last Updated&ldquo; date. Your continued use of CyberSafe after any changes indicates your acceptance of the new Privacy Policy.
        </p>
      </div>
      <hr />
      <div className="section animate">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Duc&apos;s Innovation Lab, Ind.</strong>
        </p>
        <p>
          <Link href="mailto:contact.ducnv@gmail.com" className="text-blue-600 underline">
            contact.ducnv@gmail.com
          </Link>
        </p>
        <p>Thank you for using CyberSafe!</p>
      </div>
    </div>
  )
}

export default page