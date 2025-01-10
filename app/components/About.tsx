import { Music, Target, List, PlusSquare } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About SongDis</h2>
        <p className="text-lg text-gray-600 text-justify max-w-3xl mx-auto mb-12">
          SongDis is a cutting-edge digital music distribution service designed to empower independent artists, emerging talents, and small labels, primarily focusing on the African music industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Purpose and Offerings */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="text-center mb-4">
              <Music className="w-8 h-8 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Purpose and Offerings</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-justify">
              <li>Global Music Distribution: Reach a worldwide audience effortlessly.</li>
              <li>Monetization: Ensures artists earn fair royalties.</li>
              <li>Brand Building: Supports fanbase growth with playlist pitching and marketing support.</li>
              <li>Simplified Processes: Focus on creation while administrative tasks are handled.</li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="text-center mb-4">
              <Target className="w-8 h-8 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Target Audience</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-justify">
              <li><strong>Independent Artists:</strong> Self-funded individuals seeking affordable and efficient ways to distribute and monetize music.</li>
              <li><strong>Emerging Professionals:</strong> Career-oriented artists needing tools like analytics and playlist pitching.</li>
              <li><strong>Small Labels:</strong> Managing multiple artists with scalable, cost-effective solutions.</li>
            </ul>
          </div>

          {/* Membership Plans */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="text-center mb-4">
              <List className="w-8 h-8 text-gray-800 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Membership Plans</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-justify">
              <li><strong>Basic Plan (₦1,999.99/month):</strong> Unlimited releases, fast payments, lyrics distribution, and community access.</li>
              <li><strong>Growth Plan (₦9,999.99/month):</strong> Includes all basic features plus multiple artist accounts, cover licensing, and playlist consideration.</li>
              <li><strong>Professional Plan (₦499,999.99/year):</strong> Ideal for labels, includes unlimited artist management, Billboard chart registration, and advanced support.</li>
            </ul>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-12 bg-white p-8 shadow-lg rounded-lg">
          <div className="text-center mb-4">
            <PlusSquare className="w-8 h-8 text-gray-800 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision and Mission</h3>
          </div>
          <p className="text-gray-600 text-justify">
            SongDis is powered by The Heavenly Wave Music, which aims to provide innovative, artist-centric solutions to nurture both creative and commercial growth. It promotes sustainability, community support, and integrity while helping artists thrive.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

