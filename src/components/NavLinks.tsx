const NavLinks = ({
  url,
  newTab,
  children,
}: {
  url: string
  newTab?: boolean
  children: any
}) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : ""}
      rel="noreferrer"
      class="text-lg text-zinc-100 hover:text-orange-400 flex items-center justify-end transition"
    >
      {children}
    </a>
  )
}

export default NavLinks
