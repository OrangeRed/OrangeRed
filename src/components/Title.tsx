import { h } from "preact"
import { useObserver } from "preact-intersection-observer"

const Title = ({ title }: { title: string }) => {
  const [ref, inView] = useObserver()

  return (
    <span
      ref={ref}
      class={`
        hover-underline 
        ${inView ? "before:w-full before:opacity-100" : ""}  
      `}
    >
      {title}
    </span>
  )
}

export default Title
