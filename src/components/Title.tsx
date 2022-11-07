import { h } from "preact"
import { useState, useRef, useEffect } from "preact/hooks"

const Title = ({ title }: { title: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
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
    <span
      ref={ref}
      class={`
        hover-underline
        ${
          isIntersecting
            ? "before:w-full before:opacity-100"
            : `group-hover/title:before:w-full group-hover/title:before:opacity-100`
        }
      `}
    >
      {title}
    </span>
  )
}

export default Title
