import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Biography from "@/components/Biography";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Legacy from "@/components/Legacy";
import Philanthropy from "@/components/Philanthropy";
import QuoteBlock from "@/components/QuoteBlock";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Biography />
      <Timeline />
      <Achievements />
      <Legacy />
      <Philanthropy />
      <QuoteBlock />
      <Gallery />
      <Footer />
    </main>
  );
}
