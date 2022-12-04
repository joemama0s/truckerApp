import { useRouter } from "next/router";
import Header from "../../components/navbarNew";
import Features from "./home/features";
import HeroHome from "./home/heroHome";
import Testimonials from "./home/testimonials";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <Features />
        <Testimonials />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}
