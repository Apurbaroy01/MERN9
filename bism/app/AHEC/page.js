import Head from 'next/head';

const AHECScholars = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>AHEC Scholars</title>
        <meta
          name="description"
          content="Learn about the AHEC Scholars program, a community-based training opportunity for health profession students."
        />
      </Head>

      {/* Header */}
      <header className="bg text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">AHEC Scholars</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What is the AHEC Scholars Program?</h2>
          <p className="text-gray-700">
            The AHEC Scholars Program is a national initiative designed to prepare health profession students 
            for interprofessional, community-based, and patient-centered care. It emphasizes serving rural and underserved areas.
          </p>
        </section>

        {/* Program Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Interprofessional education and training.</li>
            <li>Community-based learning opportunities.</li>
            <li>Focus on rural and underserved communities.</li>
            <li>Experience with culturally competent care.</li>
            <li>Emphasis on patient-centered, team-based care.</li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Who is Eligible?</h2>
          <p className="text-gray-700">
            The program is open to health profession students, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Medical, nursing, and dental students.</li>
            <li>Public health and allied health students.</li>
            <li>Other health-related professions interested in underserved areas.</li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Why Join AHEC Scholars?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Real-World Experience</h3>
              <p className="text-gray-700">
                Gain hands-on experience in rural and underserved communities, preparing you for future challenges.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Professional Development</h3>
              <p className="text-gray-700">
                Enhance your skills with interprofessional collaboration and culturally competent care.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Networking Opportunities</h3>
              <p className="text-gray-700">
                Connect with health professionals and mentors dedicated to serving underserved areas.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Make an Impact</h3>
              <p className="text-gray-700">
                Contribute to improving health outcomes in communities that need it most.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
          <p className="text-gray-700">
            Interested in joining the AHEC Scholars Program? Follow these steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Visit the official AHEC Scholars website or contact your local AHEC center.</li>
            <li>Complete the application form and provide required documentation.</li>
            <li>Attend an orientation session to learn more about the program.</li>
          </ol>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-4">Join AHEC Scholars Today</h2>
          <p className="text-gray-700 mb-6">
            Take the next step in your health profession career by enrolling in the AHEC Scholars Program.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Learn More
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg- text-white py-4 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} AHEC Scholars. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AHECScholars;
