import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-6 md:px-0">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Services</h1>

      {/* Accommodations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Luxurious Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/H2.webp"
              alt="Luxurious Room"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-4">
              Our accommodations offer a blend of modern luxury and comfort. With a variety of rooms available, each designed to provide the utmost relaxation and convenience, you will feel right at home.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>King-sized beds</li>
              <li>Free Wi-Fi</li>
              <li>Room service</li>
              <li>Premium linens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dining Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/H1.jpg"
              alt="Dining Experience"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-4">
              Enjoy a world-class dining experience at our in-house restaurant. From breakfast to dinner, we offer a variety of cuisines, including local and international dishes, prepared by our expert chefs.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Buffet breakfast</li>
              <li>Fine dining options</li>
              <li>Special dietary accommodations</li>
              <li>Outdoor seating</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spa and Wellness Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Spa & Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/H2.png"
              alt="Spa & Wellness"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-4">
              Indulge in relaxation and rejuvenation at our full-service spa. Our wellness treatments are designed to restore balance and offer you a tranquil retreat to unwind.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Massage therapies</li>
              <li>Facial treatments</li>
              <li>Yoga & meditation sessions</li>
              <li>Steam room & sauna</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Event Spaces Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/H3.jpg"
              alt="Event Space"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-4">
              Host your next event at our spacious and modern event halls. Whether it’s a conference, wedding, or a corporate meeting, our spaces are equipped with the latest technology to cater to your needs.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Flexible seating arrangements</li>
              <li>State-of-the-art AV equipment</li>
              <li>Customizable catering options</li>
              <li>Dedicated event coordinator</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Concierge Services Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Concierge Services</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our concierge team is available 24/7 to assist you with any request, from booking tickets to organizing tours, ensuring you have a seamless and stress-free experience during your stay.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Personalized travel planning</li>
          <li>Restaurant reservations</li>
          <li>Transportation arrangements</li>
          <li>Local excursions and activities</li>
        </ul>
      </section>
    </div>
  );
};

export default ServicesPage;