
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ed9SLJF3cps
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Nexcent Logo" className="h-10 w-10" />
            <span className="ml-3 text-xl font-bold">Nexcent</span>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Feature
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Product
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Testimonial
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              FAQ
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
          </div>
        </div>
      </header>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold">
            Lessons and insights <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Register</button>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Clients</h2>
          <p className="mt-2 text-gray-600">We have been working with some Fortune 500+ clients</p>
          <div className="mt-8 flex justify-center space-x-8">
            <img src="/placeholder.svg" alt="Client 1" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 2" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 3" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 4" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 5" className="h-10 w-10" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Manage your entire community in a single system</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
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
      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="Case Study" className="mx-auto mb-8 md:mb-0" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold">The unseen of spending three years at Pixelgrade</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at amet lobortis ipsum. Sed accumsan quam est
              vitae varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
            </p>
            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Learn More</button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Helping a local <span className="text-green-500">business reinvent itself</span>
          </h2>
          <p className="mt-2 text-gray-600">We reached here with our hard work and dedication</p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold">2,245,341</h3>
              <p className="text-gray-600">Members</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">46,328</h3>
              <p className="text-gray-600">Clubs</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">828,867</h3>
              <p className="text-gray-600">Event Bookings</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">1,926,436</h3>
              <p className="text-gray-600">Payments</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">How to design your site footer like we did</h2>
          <p className="mt-2 text-gray-600">
            Donec eros justo, faucibus eget tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa non
            varius arcu, at scelerisque erat a magna.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img src="/placeholder.svg" alt="Testimonial" className="h-20 w-20 rounded-full" />
            <div className="mt-4 md:mt-0 md:ml-8">
              <p className="text-gray-600">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed lobortis urna.
              </p>
              <p className="mt-2 font-bold">Tim Smith</p>
              <p className="text-gray-600">British Dragon Boat Racing Association</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <img src="/placeholder.svg" alt="Client 1" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 2" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 3" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 4" className="h-10 w-10" />
            <img src="/placeholder.svg" alt="Client 5" className="h-10 w-10" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Caring is the new marketing</h2>
          <p className="mt-2 text-gray-600">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who’s
            joining the community, read about how our community are increasing their membership income and lot’s more.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 1" className="mb-4" />
              <h3 className="text-xl font-bold">Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button className="mt-4 text-green-500">Readmore →</button>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 2" className="mb-4" />
              <h3 className="text-xl font-bold">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <button className="mt-4 text-green-500">Readmore →</button>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/placeholder.svg" alt="Blog 3" className="mb-4" />
              <h3 className="text-xl font-bold">Revamping the Membership Model with Triathlon Australia</h3>
              <button className="mt-4 text-green-500">Readmore →</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Pellentesque suscipit fringilla libero eu.</h2>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Get a Demo</button>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src="/placeholder.svg" alt="Nexcent Logo" className="h-10 w-10" />
            <p className="mt-4 text-gray-400">© 2020 Nexcent ltd. All rights reserved</p>
            <div className="mt-4 flex space-x-4">
              <a href="#">
                <img src="/placeholder.svg" alt="Social 1" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src="/placeholder.svg" alt="Social 2" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src="/placeholder.svg" alt="Social 3" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src="/placeholder.svg" alt="Social 4" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Stay up to date</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-400 placeholder-gray-500"
              />
              <button className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}