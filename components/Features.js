import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Manage your entire community in a single system</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Membership Organisations</h3>
            <p className="mt-2 text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">National Associations</h3>
            <p className="mt-2 text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Clubs And Groups</h3>
            <p className="mt-2 text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
