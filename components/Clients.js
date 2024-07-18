import React from 'react';

const Clients = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <p className="mt-2 text-gray-600">We have been working with some Fortune 500+ clients</p>
        <div className="mt-8 flex flex-wrap justify-center space-x-8">
          <img src="/placeholder.svg" alt="Client 1" className="h-10 w-10 mb-4" />
          <img src="/placeholder.svg" alt="Client 2" className="h-10 w-10 mb-4" />
          <img src="/placeholder.svg" alt="Client 3" className="h-10 w-10 mb-4" />
          <img src="/placeholder.svg" alt="Client 4" className="h-10 w-10 mb-4" />
          <img src="/placeholder.svg" alt="Client 5" className="h-10 w-10 mb-4" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
