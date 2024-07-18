import React from 'react';

const Testimonials = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">How to design your site footer like we did</h2>
          <p className="mt-2 text-gray-600">
            Donec eros justo, faucibus eget tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa non
            varius arcu, at scelerisque erat a magna.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img src="/placeholder.svg" alt="Testimonial" className="h-20 w-20 rounded-full mb-4 md:mb-0" />
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <p className="text-gray-600">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed lobortis urna.
              </p>
              <p className="mt-2 font-bold">Tim Smith</p>
              <p className="text-gray-600">British Dragon Boat Racing Association</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center space-x-8">
            <img src="/placeholder.svg" alt="Client 1" className="h-10 w-10 mb-4" />
            <img src="/placeholder.svg" alt="Client 2" className="h-10 w-10 mb-4" />
            <img src="/placeholder.svg" alt="Client 3" className="h-10 w-10 mb-4" />
            <img src="/placeholder.svg" alt="Client 4" className="h-10 w-10 mb-4" />
            <img src="/placeholder.svg" alt="Client 5" className="h-10 w-10 mb-4" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Caring is the new marketing</h2>
          <p className="mt-2 text-gray-600">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who’s
            joining the community, read about how our community are increasing their membership income and lot’s more.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 1" className="mb-4" />
              <h3 className="text-xl font-bold">Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button className="mt-4 text-green-500">Read more →</button>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 2" className="mb-4" />
              <h3 className="text-xl font-bold">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <button className="mt-4 text-green-500">Read more →</button>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 3" className="mb-4" />
              <h3 className="text-xl font-bold">Revamping the Membership Model with Triathlon Australia</h3>
              <button className="mt-4 text-green-500">Read more →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Pellentesque suscipit fringilla libero eu.</h2>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Get a Demo</button>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
