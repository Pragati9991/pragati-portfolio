import { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitAtRef = useRef(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (formData.website) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill in every field before sending.");
      return;
    }

    if (now - lastSubmitAtRef.current < 15000) {
      alert("Please wait a moment before sending another message.");
      return;
    }

    try {
      setIsSubmitting(true);
      lastSubmitAtRef.current = now;

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_PUBLIC_KEY
      );

      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      lastSubmitAtRef.current = 0;
      console.error("EmailJS send failed:", error);
      const errorMessage = error?.text || "Oops! Something went wrong. Please try again.";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactRef = useRef(null);
  const [showPlane, setShowPlane] = useState(false);

  useEffect(() => {
    const contactElement = contactRef.current;
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

    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
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
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={120}
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
              maxLength={254}
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
              maxLength={2000}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
