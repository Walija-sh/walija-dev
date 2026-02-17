import { motion } from "motion/react";
import PrimaryButton from "./PrimaryButton";


const Contact = () => {
  return (
    <section id="contact" className="bg-black-1 relative z-50 px-6 py-20 lg:py-40 text-white overflow-hidden">
     
     {/* gradient */}
     {/* <div className="bg-accent w-20 aspect-square rounded-full absolute top-15% left-40 z-1"></div> */}
      <div className="max-w-6xl mx-auto relative border border-white/10 rounded-xl px-5 py-10 backdrop-blur-2xl z-10">
        
        <div 
          
          className="text-center mb-16"
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-6">
            Ready to transform <br /> your vision?
          </h3>
          <p className="text-gray-2 max-w-lg mx-auto text-sm lg:text-base leading-relaxed">
            Let's discuss how we can bring your ideas to life. Drop a message below and I'll get back to you shortly.
          </p>
        </div>

        <div
     
          className="relative p-1 max-w-4xl mx-auto"
        >
          <div className="bg-black-1/90  p-8 lg:p-12 rounded-[1.8rem] ">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <PrimaryButton
            text=" Send Message"

              />
               

            </form>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;