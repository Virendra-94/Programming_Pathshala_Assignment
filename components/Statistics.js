"use client"
import React from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">
          Helping a local <span className="text-green-500">business reinvent itself</span>
        </h2>
        <p className="mt-2 text-gray-600">We reached here with our hard work and dedication</p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={3456133} duration={5} separator="," />
            </h3>
            <p className="text-gray-600">Members</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={25560} duration={5} separator="," />
            </h3>
            <p className="text-gray-600">Clubs</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={828867} duration={5} separator="," />
            </h3>
            <p className="text-gray-600">Communities</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={1926436} duration={5} separator="," />
            </h3>
            <p className="text-gray-600">Forums</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
