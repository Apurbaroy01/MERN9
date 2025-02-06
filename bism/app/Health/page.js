import Head from 'next/head';

const HealthInsurance = () => {
  return (
    <div className="">
      <Head>
        <title>Health Insurance</title>
        <meta
          name="description"
          content="Learn about health insurance plans, benefits, and tips for choosing the right coverage for you and your family."
        />
      </Head>
      <header className="bg text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Health Insurance</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What is Health Insurance?</h2>
          <p className="text-gray-700">
            Health insurance helps cover medical expenses, protecting you from high healthcare costs. 
            It ensures access to essential services, from routine check-ups to emergency care.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Benefits of Health Insurance</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Coverage for hospitalization and medical expenses.</li>
            <li>Access to preventive care and regular check-ups.</li>
            <li>Protection against unexpected healthcare costs.</li>
            <li>Peace of mind for you and your family.</li>
          </ul>
        </section>

        {/* Types of Plans */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Types of Health Insurance Plans</h2>
          <div className="space-y-4">
            <div className="bg-green-300 shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">1. Individual Plans</h3>
              <p className="text-gray-700">
                Designed for individuals seeking personal health coverage.
              </p>
            </div>
            <div className="bg-green-300 shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">2. Family Plans</h3>
              <p className="text-gray-700">
                Covers multiple family members under a single policy.
              </p>
            </div>
            <div className="bg-green-300 shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">3. Employer-Sponsored Plans</h3>
              <p className="text-gray-700">
                Offered by employers as part of employee benefits.
              </p>
            </div>
            <div className="bg-green-300 shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">4. Government Plans</h3>
              <p className="text-gray-700">
                Provided by the government, including programs like Medicare and Medicaid.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Choosing a Plan */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tips for Choosing the Right Plan</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Assess your medical needs and budget.</li>
            <li>Check for coverage of essential services.</li>
            <li>Compare premiums, deductibles, and out-of-pocket costs.</li>
            <li>Ensure access to your preferred healthcare providers.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <h2 className="text-xl font-semibold mb-4">Get Covered Today</h2>
          <p className="text-gray-700 mb-6">
            Protect yourself and your loved ones by choosing the right health insurance plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </section>
      </main>

      <footer className="bg text-white py-4 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Health Insurance Info. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HealthInsurance;
