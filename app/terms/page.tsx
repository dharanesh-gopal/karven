import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Karvensen",
  description: "Terms of service for Karvensen",
}

export default function TermsPage() {
  return (
    <>
      <div className="min-h-screen py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">1. Terms</h2>
              <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on 
                Karvensen's website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">3. Disclaimer</h2>
              <p>
                The materials on Karvensen's website are provided on an 'as is' basis. Karvensen makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">4. Limitations</h2>
              <p>
                In no event shall Karvensen or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Karvensen's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Karvensen's website could include technical, typographical, or photographic errors. 
                Karvensen does not warrant that any of the materials on our website are accurate, complete, or current. 
                Karvensen may make changes to the materials contained on our website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">6. Links</h2>
              <p>
                Karvensen has not reviewed all of the sites linked to our website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by Karvensen of the site. 
                Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">7. Modifications</h2>
              <p>
                Karvensen may revise these terms of service for our website at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <span className="font-semibold">Email:</span> legal@karvensen.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
