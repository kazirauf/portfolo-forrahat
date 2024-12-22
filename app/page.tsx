"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Number from "@/components/Number";
import AboutUs from "@/components/AboutUs";
import Skills from "@/components/Skills";
import Card from "@/components/Card";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Number />
        <AboutUs />

        <Experience />
        <Skills />
        <RecentProjects />
        <Clients />
        <Card />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
