import React from 'react';

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 md:flex-row md:text-left">
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Case Study" className="mx-auto mb-8 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold">The unseen of spending three years at Pixelgrade</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at amet lobortis ipsum. Sed accumsan quam est vitae varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
