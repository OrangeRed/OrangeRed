import { useEffect, useRef, useState } from "preact/hooks"

import { TECHNOLOGIES } from "@src/Data"

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
    <div ref={ref} class="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {TECHNOLOGIES.map((tech, idx) => {
        return (
          <div
            class={`
              flex 
              items-center 
              group/tech 
              rounded-full 
              p-3 
              gap-4 
              opacity-0
              ${isIntersecting ? "slide-in" : ""}
            `}
            style={{
              animationDelay: `${idx}00ms`,
            }}
          >
            <div class="w-20 hover:bg-orange-700 h-14 ml-2 flex items-center justify-center border-t-2 shadow-black shadow-md border-zinc-600 group-hover/tech:border-orange-400 rounded-full transition-all duration-500 ">
              <img class="w-8" alt={tech.title} src={tech.icon} />
            </div>

            <p class="text-lg w-full">{tech.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Technology

/**
 * .button17::before,
.button17::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: '';
  transform-origin: right top;
  transform: scale(0, 1);
  transition: transform .3s;
}
.button17::before {
  background: #666;
}
.button17::after {
  background: #333;
}
.button17:hover::before,
.button17:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
.button17:hover::after {
  transition-delay: .3s;
}

 * 
 * 
 */
