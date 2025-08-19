import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function TermsOfService() {
  return (
    <>
      <Header onBookingClick={() => {}} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose lg:prose-xl">
          <h2>1. Terms</h2>
          <p>By accessing the website at https://aasaan-ent-modern.vercel.app, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on AASAAN ENT Clinic's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on AASAAN ENT Clinic's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>The materials on AASAAN ENT Clinic's website are provided on an 'as is' basis. AASAAN ENT Clinic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall AASAAN ENT Clinic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AASAAN ENT Clinic's website, even if AASAAN ENT Clinic or a AASAAN ENT Clinic authorized representative has been notified orally or in writing of the possibility of such damage.</p>

          <h2>5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Madhya Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
