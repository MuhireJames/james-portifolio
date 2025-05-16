import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-950 text-gray-300"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 shadow-lg"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <div className="space-y-4">
              <div className="flex justify-center items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <a
                  href="mailto:mujames006@gmail.com"
                  className="hover:underline"
                >
                  mujames006@gmail.com
                </a>
              </div>

              <div className="flex justify-center items-center gap-3">
                <Github size={20} className="text-gray-400" />
                <a
                  href="https://github.com/MuhireJames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/MuhireJames
                </a>
              </div>

              <div className="flex justify-center items-center gap-3">
                <Linkedin size={20} className="text-gray-400" />
                <a
                  href="https://linkedin.com/in/muhire-james"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/muhire-james
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact
