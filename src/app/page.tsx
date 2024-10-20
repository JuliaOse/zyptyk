import LandingPage from "@/pages/LandingPage";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Stats from "@/pages/Stats";

export default function Home() {
  return (
    <div className="sm:p-6 mx-10 ">
      <main>
        <div className="mb-10">
          <Navbar />
          <hr />
        </div>
        <div className="mx-auto h-sreen mb-10">
          <LandingPage />
        </div>
        <div className=" flex flex-col mb-32 justify-evenly gap-20">
          <Partners />
          <Features />
        </div>
        <div className="flex flex-col mb-48 justify-evenly gap-32">
          <Solutions />

          <Stats />
        </div>
      </main>
    </div>
  );
}
