'use client'; 

import Image from 'next/image';
import Link from 'next/link';

const TobaccoPage = () => {
  return (
    <div className="container mx-auto py-12 px-6 md:px-0">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Quit Tobacco for a Healthier Life
      </h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Quit Tobacco?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Tobacco use is a leading cause of preventable deaths worldwide.
              Quitting tobacco can significantly improve your physical and
              mental health, increase your lifespan, and enhance your quality
              of life.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Reduce the risk of heart disease and cancer</li>
              <li>Improve lung health and breathing</li>
              <li>Enhance your sense of taste and smell</li>
              <li>Save money spent on tobacco products</li>
            </ul>
          </div>
          <div>
            <Image
              src="/H1.jpg" // Replace with your image
              alt="Quit Tobacco"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Steps to Quit */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Steps to Quit Tobacco
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/H2.png" // Replace with your image
              alt="Steps to Quit Tobacco"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-decimal list-inside text-lg text-gray-600">
              <li className="mb-4">
                <span className="font-semibold text-gray-700">Set a Date:</span>{' '}
                Choose a specific day to quit and stick to it.
              </li>
              <li className="mb-4">
                <span className="font-semibold text-gray-700">
                  Identify Triggers:
                </span>{' '}
                Recognize situations or habits that lead you to smoke or chew
                tobacco.
              </li>
              <li className="mb-4">
                <span className="font-semibold text-gray-700">
                  Seek Support:
                </span>{' '}
                Reach out to friends, family, or support groups for
                encouragement.
              </li>
              <li className="mb-4">
                <span className="font-semibold text-gray-700">
                  Use Alternatives:
                </span>{' '}
                Chewing gum, drinking water, or engaging in hobbies can replace
                tobacco use.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Resources to Help You Quit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Numerous resources are available to help you quit tobacco:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>National Quitline: 1-800-QUIT-NOW</li>
              <li>Mobile Apps like QuitGuide and SmokeFree</li>
              <li>Local support groups and counseling</li>
              <li>Nicotine replacement therapies</li>
              <li>Prescription medications (consult your doctor)</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/H3.jpg" // Replace with your image
              alt="Resources to Quit Tobacco"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Take the First Step Today!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Quitting tobacco is a journey, but you don’t have to do it alone.
          Start today and take control of your health and future.
        </p>
        <Link href="/Help" >
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
          Get Help Now
        </button>
        </Link>
      </section>
    </div>
  );
};

export default TobaccoPage;