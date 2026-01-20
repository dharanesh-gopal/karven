import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Karvensen",
  description: "Privacy policy for Karvensen",
}

export default function PrivacyPage() {
  return (
    <>
      <div className="min-h-screen py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">1. Introduction</h2>
              <p>
                Karvensen ("Company", "we", "our", or "us") operates the website. This page informs you of our policies 
                regarding the collection, use, and disclosure of personal data when you use our service and the choices 
                you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Personal Data: Name, email address, phone number, and other contact information</li>
                <li>Usage Data: Browser type, IP address, pages visited, and time spent on pages</li>
                <li>Cookies: We use cookies to enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">3. Use of Data</h2>
              <p>Karvensen uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To provide and maintain our website</li>
                <li>To notify you about changes to our website</li>
                <li>To allow you to participate in interactive features</li>
                <li>To gather analysis or valuable information to improve our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the internet 
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="font-semibold">Email:</span> privacy@karvensen.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
