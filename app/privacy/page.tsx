import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Read how Traamp protects your data and handles your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Traamp logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last updated: November 2025</p>
          </div>
        </header>

        <section className="space-y-6 text-gray-700">
          <p>
            Traamp (“we”, “our”, “us”) is committed to protecting your privacy
            and ensuring the security of your personal information.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">1. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Personal and account details</li>
            <li>Location (only if granted permission)</li>
            <li>Usage and analytics data</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">2. How We Use Your Data</h2>
          <ul className="list-decimal pl-6">
            <li>Improve user experience</li>
            <li>Provide travel recommendations</li>
            <li>Enhance safety and app functionality</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">3. Your Rights</h2>
          <p>
            You can request to view, edit, or delete your personal information anytime.
          </p>

          <h2 className="text-lg font-semibold text-gray-900">4. Contact Us</h2>
          <p>
            For privacy questions, email us at:
            <br />
            <strong> infotraamp@gmail.com</strong>
          </p>

          {/* Back links */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/" className="text-sm text-gray-600 hover:underline">
              Back to Home
            </Link>

            <Link href="/contact" className="text-sm text-gray-600 hover:underline">
              Contact Support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
