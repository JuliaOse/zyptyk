import LandingPage from "@/pages/LandingPage";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Stats from "@/pages/Stats";
import Testimonial from "@/pages/Testimonial";
import Faq from "@/pages/Faq";
import ContactPage from "@/pages/ContactPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id='home' className="sm:p-6 mx-10 ">
      <main >
        <div className="mb-10">
          <Navbar />
          <hr />
        </div>
        <div className="mx-auto h-sreen mb-10">
          <LandingPage />
        </div>
        <div className=" flex flex-col mb-32 justify-evenly gap-20">
          <Partners />
          <div id='about'/>
          <Features />
        </div>
        <div className="flex flex-col mb-48 justify-evenly gap-32">
          <Solutions />

          <Stats />
        </div>
        <div className=" flex flex-col mb-32 justify-evenly gap-20">
          <Testimonial />
        </div>
        <div id='faqs' className=" flex flex-col mb-32 justify-evenly gap-20">
          <Faq />
        </div>
        <div id='contact' className="mb-20 ">
          <ContactPage />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
