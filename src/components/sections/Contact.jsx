import { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({name: "", email: "", message: ""});
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  const contactRef = useRef(null);
  const [showPlane, setShowPlane] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPlane(true);
        }
      },
      {
        threshold: 0.3, // when 30% of contact section is visible
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);


  return(
    <section
      id="contact"
      ref={contactRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {showPlane && (
        <div className="absolute top-10 left-[-100px] w-10 text-white opacity-30 animate-plane-fly pointer-events-none z-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-full h-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </div>
      )}
      
      <RevealOnScroll>
        <div className="contact-wrapper border border-white/10 rounded-xl p-10 hover:-translate-y-1 transition-all">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-center max-w-xl mx-auto mb-8">
            Got a project in mind, a curious question, or just something cool to share? Don’t be shy and drop a message!
          </p>

          <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};