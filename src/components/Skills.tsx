"use client"

import data from "@/data/skills.json"
import { useState } from "react";
import Image from "next/image";
import { FC } from "react"

interface Tech {
  id: number;
  name: string;
  iconSrc: string;
  description: string;
}

interface SkillsData {
  frontend: Tech[];
  backend: Tech[];
  tools: Tech[];
}

const Skills: FC = () => {

  const [skills, setSkills] = useState<SkillsData>(data)


  return (

    <section id="skills" className="px-4 container mx-auto lg:max-w-screen-lg lg:mx-auto mb-28 flex flex-col mt-10">
      <h2 className='text-4xl lg:text-5xl font-bold  mb-14'>Habilidades </h2>
      <div className="grid lg:grid-cols-1 lg:grid-rows-3 gap-14 ">

        {/* Bloque Frontend */}

        <div className="" >
          <h3 className="dev-title text-2xl font-semibold mb-10">FRONTEND</h3>
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-4 ">
            {skills.frontend.map((tech: Tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex items-center gap-4 p-4 bgCards rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden">
                  <Image src={tech.iconSrc} width={40} height={40} alt="tech logo" />
                  <div>
                    <h3 className="text-sm">{tech.name}</h3>
                    <p className="text-sm text-zinc-500">{tech.description}</p>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>

        {/* Bloque Backend */}

        <div className=" ">
          <h3 className="dev-title text-2xl font-semibold mb-10">BACKEND</h3>
          <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-4">
            {skills.backend.map((tech: Tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex gap-4 items-center p-4 bgCards rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden">
                  <Image src={tech.iconSrc} width={40} height={40} alt="tech logo" />
                  <div>
                    <h3 className="text-sm">{tech.name}</h3>
                    <p className="text-sm text-zinc-500">{tech.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bloque Tools */}

        <div className="">
          <h3 className="dev-title text-2xl font-semibold mb-10">TOOLS</h3>
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-4">
            {skills.tools.map((tech: Tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex gap-4 items-center p-4 bgCards rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden">
                  <Image src={tech.iconSrc} width={40} height={40} alt="tech logo" />
                  <div>
                    <h3 className="text-sm">{tech.name}</h3>
                    <p className="text-sm text-zinc-500">{tech.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills