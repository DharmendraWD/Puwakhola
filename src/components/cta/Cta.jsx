import { ArrowRight, LocationEdit, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

 function CTASection() {
  return (
    <section id='contact' className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl mb-6">
              Ready to Power Your Vision?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're interested in partnership opportunities, career prospects, or learning more about our projects, we'd love to hear from you.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Email us</div>
                  <div>puwakholahydropower@gmail.com
</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Email us</div>
                  <div>Malunhydro@gmail.com
</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Call us</div>
                  <div>01-4102710</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <LocationEdit className="w-5 h-5" />
                </div>
                <Link className='group transition-all duration-300' href="https://maps.app.goo.gl/zBEoZtxCqZJDw8mH6" target="_blank">
                  <div className="text-sm text-blue-100">Address</div>
                  <div className='group-hover:underline group-hover:text-[cyan] transition-all duration-300'>Durga bhawan, Anamnagar, Kathmandu</div>
                </Link>
              </div>
            </div>

            <Link href="mailto:puwakholahydropower@gmail.com" className="px-8 w-fit py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 group">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right content - Contact form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;