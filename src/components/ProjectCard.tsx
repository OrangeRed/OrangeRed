import { useState } from "preact/hooks"

import type { IProject } from "../env.d"

interface Props {
  project: IProject
  children: any
}

export default function ProjectCard({ project, children }: Props) {
  return (
    <div
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const rect = currentTarget.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        currentTarget.style.setProperty("--mouse-x", `${x}px`)
        currentTarget.style.setProperty("--mouse-y", `${y}px`)
      }}
      class="project-card group/card rounded-xl border-t-2 border-zinc-600 shadow-md shadow-black hover:shadow-xl hover:shadow-black hover:border-orange-400 transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-col p-4 gap-2">
        <header class="flex justify-between items-center ">
          <h2 class=" text-xl font-semibold hover-underline group-hover/card:before:w-full group-hover/card:before:opacity-100">
            {project.title}
          </h2>
          <div class="flex items-center">{children}</div>
        </header>

        <ul class="flex gap-3 flex-wrap">
          {project.tags?.map((tag) => {
            return (
              <li class="flex bg-zinc-700 py-0.5 px-2 text-sm rounded-md shadow shadow-black cursor-default select-none">
                ✹ {tag}
              </li>
            )
          })}
        </ul>

        {/*  */}
        <p class="pt-3">{project.description}</p>
      </div>
    </div>
  )
}
