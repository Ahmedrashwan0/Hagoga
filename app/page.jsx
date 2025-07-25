import About from "./_components/about/About";
import BestSellers from "./_components/bestsller/BestSellers";
import Contact from "./_components/contact/Contact";
import Hero from "./_components/HomeHero/Hero";


export default function Home() {
  return (
    <>
      <Hero/>
      <img src="/Group.png" alt="df" className="h-3 w-full object-cover" />
      <BestSellers/>
      <img src="/Group.png" alt="df" className="w-full h-3 object-cover" />
      <About/>
      <img src="/Group.png" alt="df" className="w-full h-3 object-cover" />
      <Contact/>
      <img src="/Group.png" alt="df" className="w-full h-3 object-cover" />
    </>
  );
}
