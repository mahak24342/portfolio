import Link from "next/link"


export const NavL=({title,href})=>{
    return (
        <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
    )
}