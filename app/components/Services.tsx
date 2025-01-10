import { Music, Target, List, PlusSquare } from 'lucide-react'

const Services = () => {
  return (
    <main>
      <div className="w-full">
        <div className="relative w-full px-3 pb-20 pt-36 sm:pt-40 banner-image">
          <div className="relative z-10 text-center">
            <section id="services" className="py-12 bg-gray-50">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Our Services
                  </h2>
                  <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    We provide comprehensive music distribution and management
                    services to help independent artists succeed in the digital
                    music industry.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Music Distribution Service */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-gray-800 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19V6l12-2v14M9 17h12"
                        />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Music Distribution
                      </h3>
                      <p className="text-gray-600">
                        Get your music on all major streaming platforms
                        including Spotify, Apple Music, Amazon Music, and more.
                      </p>
                    </div>
                  </div>

                  {/* Global Reach Service */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-gray-800 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12V3l9 9-9 9v-6H3V9h12z"
                        />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Global Reach
                      </h3>
                      <p className="text-gray-600">
                        Expand your audience across Africa and worldwide with
                        our extensive distribution network.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Dashboard Service */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-gray-800 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Analytics Dashboard
                      </h3>
                      <p className="text-gray-600">
                        Track your streams, revenue, and audience engagement
                        with our comprehensive analytics tools.
                      </p>
                    </div>
                  </div>

                  {/* Revenue Management Service */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-gray-800 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3l9 9-9 9v-6H3V9h12z"
                        />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Revenue Management
                      </h3>
                      <p className="text-gray-600">
                        Collect 100% of your streaming revenue and manage your
                        earnings with our simple withdrawal system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
