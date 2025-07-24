import About from "./_components/about/About";
import BestSellers from "./_components/bestsller/BestSellers";
import Contact from "./_components/contact/Contact";
import Hero from "./_components/HomeHero/Hero";


export default function Home() {
  return (
    <>
      <Hero/>
      <img src="/Group.png" alt="df" className="w-fu" />
      <BestSellers/>
      <img src="/Group.png" alt="df" className="w-fu" />
      <About/>
      <img src="/Group.png" alt="df" className="w-fu" />
      <Contact/>
      <img src="/Group.png" alt="df" className="w-fu" />
    </>
  );
}
