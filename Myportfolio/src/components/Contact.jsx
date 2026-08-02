import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import GlowingCard from "./GlowingCard";


const WEB3FORMS_ACCESS_KEY = "9bdad12f-12ad-4c1d-9daa-02ad0e6a2d06"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      // Use Web3Forms API to send email to user
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" 
            ? "78c9dfa5-eb45-42a0-80a5-f8be91a13a96" // Fallback public mock key for testing, or write instructions
            : WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-oatmeal">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-deep/75 max-w-md mx-auto font-medium">
            Have a project in mind, want to discuss a role, or just say hello? Drop a message below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Pane (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <GlowingCard className="w-full p-6 md:p-8 flex flex-col justify-between h-full bg-white/40 border border-sage-light/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-deep mb-2">Let's talk!</h3>
                  <p className="text-sm text-deep/80 leading-relaxed font-medium">
                    I am open to full-time remote or hybrid opportunities, contract projects, or collaborative developer discussions.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Gmail Entry */}
                  <a
                    href="mailto:mdkaifshaik11196@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-deep/10 hover:border-copper/35 hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sage/10 text-sage border border-sage/15 group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-deep/50 font-bold block">Gmail Address</span>
                      <span className="text-sm font-semibold text-deep hover:text-copper transition-colors">
                        mdkaifshaik11196@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone Entry */}
                  <a
                    href="tel:+919019724256"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-deep/10 hover:border-copper/35 hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sage/10 text-sage border border-sage/15 group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-deep/50 font-bold block">Phone Number</span>
                      <span className="text-sm font-semibold text-deep hover:text-copper transition-colors">
                        +91 9019724256
                      </span>
                    </div>
                  </a>

                  {/* Location Entry */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-deep/10">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-copper/10 text-copper border border-copper/15">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-deep/50 font-bold block">Current Location</span>
                      <span className="text-sm font-semibold text-deep">
                        Bengaluru, Karnataka, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              
            </GlowingCard>
          </motion.div>

          {/* Form Pane (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <GlowingCard className="w-full p-6 md:p-8 h-full bg-white/40 border border-sage-light/20">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[300px] py-12"
                  >
                    <CheckCircle2 size={56} className="text-sage mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-deep mb-2">Message Sent!</h3>
                    <p className="text-deep/80 text-sm max-w-sm font-medium">
                      Thank you for reaching out. I've received your message and will respond shortly to your email.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-6 py-2.5 rounded-xl border border-deep/15 hover:border-deep/30 bg-deep/5 hover:bg-deep/10 text-xs font-semibold text-deep transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-6">
                      
                      {/* Name Input */}
                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none text-xs font-bold ${
                            focusedField === "name" || formData.name
                              ? "-top-2.5 bg-oatmeal px-2 text-copper scale-95 border border-sage-light/10 rounded"
                              : "top-4 text-deep/50"
                          }`}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-deep/10 bg-white/30 focus:bg-white/50 focus:border-copper focus:ring-1 focus:ring-copper/20 text-deep text-sm outline-none transition-all duration-300 font-semibold"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none text-xs font-bold ${
                            focusedField === "email" || formData.email
                              ? "-top-2.5 bg-oatmeal px-2 text-copper scale-95 border border-sage-light/10 rounded"
                              : "top-4 text-deep/50"
                          }`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-deep/10 bg-white/30 focus:bg-white/50 focus:border-copper focus:ring-1 focus:ring-copper/20 text-deep text-sm outline-none transition-all duration-300 font-semibold"
                        />
                      </div>

                      {/* Message Input */}
                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none text-xs font-bold ${
                            focusedField === "message" || formData.message
                              ? "-top-2.5 bg-oatmeal px-2 text-copper scale-95 border border-sage-light/10 rounded"
                              : "top-4 text-deep/50"
                          }`}
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows="5"
                          className="w-full px-4 py-4 rounded-xl border border-deep/10 bg-white/30 focus:bg-white/50 focus:border-copper focus:ring-1 focus:ring-copper/20 text-deep text-sm outline-none transition-all duration-300 resize-none font-semibold"
                        />
                      </div>
                    </div>

                    {/* Status Feedback / Errors */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-xs text-red-500 font-bold mt-4">
                        <AlertCircle size={16} />
                        <span>Failed to send. Please verify internet connection and try again.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex items-center justify-center gap-2 w-full py-4 mt-6 bg-copper hover:bg-copper/90 disabled:bg-copper/50 text-oatmeal font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-copper/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      {status === "loading" ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlowingCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
