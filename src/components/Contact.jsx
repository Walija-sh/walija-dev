import { motion } from "motion/react";
import PrimaryButton from "./PrimaryButton";
import MeshGradientBg from "./MeshGradientBg";
import { useForm, ValidationError } from '@formspree/react';
import SubHeaderMarquee from "./SubHeaderMarquee";


const Contact = () => {
  const [state, handleSubmit] = useForm("meellvaz");

  
  return (
    <section id="contact" className="bg-black-1 relative z-50 px-6 py-20 lg:py-40 text-white overflow-hidden">
      <MeshGradientBg/>
     
     {/* gradient */}
    
      <div className="max-w-6xl mx-auto relative border border-white/10 rounded-xl px-5 py-10 backdrop-blur-2xl z-10">
        
        <div 
          
          className="text-center mb-16"
        >
          <SubHeaderMarquee text="Get in touch" className="mx-auto"/>
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
 {state.succeeded ? (
              <SuccessMessage />
            ) : (
              <ContactForm
                state={state}
                handleSubmit={handleSubmit}
              />
            )}

            
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;

const SuccessMessage = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-bold mb-4">
      Message Sent 🚀
    </h2>
    <p>I’ll get back to you within 24 hours.</p>
  </div>
);

const ContactForm = ({ state, handleSubmit }) => (
  <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Full Name</label>
                  <input 
                  id="name"
                  name="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors "
                  />
                  <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Email Address</label>
                  <input 
                  id="email"
                  name="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-2 ml-1">Your Message</label>
                <textarea 
                id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-2/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                ></textarea>
                 <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </div>

              {/* Submit Button */}
              <PrimaryButton
             type="submit"
             as="button"
  text={state.submitting ? "Sending..." : "Send Message"}
            disabled={state.submitting}
            
              />
               

            </form>
);