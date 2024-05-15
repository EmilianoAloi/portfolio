"use client"

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main>

      {isLoading ? <p>cargando</p> :
        <>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </>
      }

    </main>

  );
}
