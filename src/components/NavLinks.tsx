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
      title={url}
      target={newTab ? "_blank" : ""}
      rel="noreferrer"
      class="flex items-center justify-end text-base text-zinc-100 hover:text-orange-400 focus:text-orange-400"
    >
      {children}
    </a>
  )
}

export default NavLinks
