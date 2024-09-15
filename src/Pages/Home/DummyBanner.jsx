const DummyBanner = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-[80%]">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800">
            Expert Home Services at Your Fingertips
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We connect you with certified professionals for electricity,
            carpentry, painting, and more.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600"
          >
            Book a Service Now
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/qR3HmNy/service-banner.png" // Use a proper link here for your image
            alt="Various home services illustration"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DummyBanner;
