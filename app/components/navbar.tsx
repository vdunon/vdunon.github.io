import Image from "next/image";

export default function Navbar() {
    return <nav className="sticky z-99 top-0 flex flex-row justify-between w-full p-5">
        <a href="/">
          <Image
            src="/icons/logo_portfolio.png"
            alt="Logo"
            width={30}
            height={30}
            sizes="100%"
            priority
        />
        </a>
        <a href="https://www.epitech.eu/" target="blank">
          <Image
            src="/logos/epitech.svg"
            alt="Epitech's logo"
            width={100}
            height={20}
          />
        </a>
    </nav>
}