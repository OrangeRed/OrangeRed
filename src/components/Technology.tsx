import { useEffect, useRef, useState } from "preact/hooks"

import { TECHNOLOGIES } from "@src/Data"

const TechnologyLink = ({ tech }: { tech: typeof TECHNOLOGIES[number] }) => {
  return (
    <a
      href={tech.url ?? "/"}
      target="_blank"
      rel="noreferrer"
      class="p-3 pr-20 gap-4 
        flex items-center 
        relative cursor-pointer
        group/tech tech-fill
        hover:before:bg-zinc-700
        hover:before:rounded-full
        hover:after:bg-zinc-800
        hover:after:delay-300"
    >
      <div
        class="w-14 h-14 ml-2 
          flex items-center justify-center 
          bg-zinc-800 group-hover/tech:border-orange-400
          shadow-black shadow-md 
          border-t-2 border-zinc-500 
          rounded-full transition-all duration-500"
      >
        <img class="w-8" alt={tech.title} src={tech.icon} />
      </div>

      <p class="text-lg hover-underline group-hover/tech:before:w-full group-hover/tech:before:opacity-100">
        {tech.title}
      </p>
    </a>
  )
}

const Technology = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new IntersectionObserver((entries) => {
        setIsIntersecting(entries[0].isIntersecting)
      }, {})

      observer.observe(ref.current)
    }
  }, [])

  return (
    <>
      <div
        ref={ref}
        class="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {TECHNOLOGIES.map((tech, idx) => {
          return (
            <div
              class={`flex rounded-full opacity-0 ${
                isIntersecting ? "tech-slide-animation" : ""
              }`}
              style={{
                animationDelay: `${idx}00ms`,
              }}
            >
              <TechnologyLink tech={tech} />
            </div>
          )
        })}
      </div>

      {/* Render this when javascript is disabled */}
      <noscript class="absolute translate-y-36 w-full">
        <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 mt-10 sm:mt-0">
          {TECHNOLOGIES.map((tech) => {
            return <TechnologyLink tech={tech} />
          })}
        </div>
      </noscript>
    </>
  )
}

export default Technology
