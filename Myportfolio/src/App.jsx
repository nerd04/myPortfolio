import CursorTracker from "./components/CursorTracker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Dynamic Spring Cursor Trailer */}
      <CursorTracker />

      {/* Floating Pill Navigation */}
      <Navbar />

      <main className="w-full">
        {/* Intro/Hero Section */}
        <Hero />

        {/* Experience Timeline */}
        <Experience />

        {/* Education Timeline */}
        <Education />

        {/* Technical Arsenal (Skills) */}
        <Skills />

        {/* Featured Projects */}
        <Projects />

        {/* Certifications Grid */}
        <Certifications />

        {/* LeetCode Analytics Dashboard */}
        <LeetCode />

        {/* Interactive Contact Form */}
        <Contact />
      </main>

      {/* Branding & Social Links Footer */}
      <Footer />
    </>
  );
}

export default App;
