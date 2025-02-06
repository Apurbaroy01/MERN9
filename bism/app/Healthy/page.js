import Head from 'next/head';

const HealthyAging = () => {
  return (
    <div className="text-gray-300">
      <Head>
        <title>Healthy Aging</title>
        <meta
          name="description"
          content="Explore tips and advice for healthy aging, focusing on mental and physical well-being."
        />
      </Head>
      <header className="bg  py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Healthy Aging</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            Aging gracefully means taking care of your body and mind through all stages of life. 
            Here, you'll find tips and resources to support your healthy aging journey.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Physical Health</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Stay active with regular exercise.</li>
            <li>Maintain a balanced diet rich in fruits and vegetables.</li>
            <li>Stay hydrated and get regular check-ups.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mental Wellness</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Engage in activities that challenge your brain, like puzzles or reading.</li>
            <li>Maintain social connections with friends and family.</li>
            <li>Practice mindfulness and stress management techniques.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tips for Everyday Life</h2>
          <p className="text-gray-700">
            Small changes in your daily routine can make a big difference. Take regular walks, 
            get enough sleep, and always make time for yourself.
          </p>
        </section>
      </main>

      <footer className="bg text-white py-4 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Healthy Aging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HealthyAging;
