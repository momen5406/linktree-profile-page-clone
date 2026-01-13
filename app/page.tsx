import Image from "next/image";
import profileImg from "../public/profile.jpg"
import Link from "./_components/Link";
import { PiDiscordLogo, PiInstagramLogo, PiLinkedinLogo, PiWhatsappLogo, PiYoutubeLogo } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  const links = [
    {
      icon: AiOutlineGlobal,
      name: "Portfolio Website",
      link: "https://momenhussein.vercel.app/",
      iconColor: "from-violet-500 to-purple-500",
      bgColor: "hover:from-violet-500 hover:to-purple-500"
    },
    {
      icon: PiLinkedinLogo,
      name: "Linkedin Profile",
      link: "http://linkedin.com/in/momen5406",
      iconColor: "from-blue-500 to-cyan-500",
      bgColor: "hover:from-blue-500 hover:to-cyan-500"
    },
    {
      icon: PiWhatsappLogo,
      name: "Whatsapp",
      link: "https://wa.me/201001476514?text=Hello%20I%20found%20you%20via%20your%20portfolio",
      iconColor: "from-green-500 to-emerald-500",
      bgColor: "hover:from-green-500 hover:to-emerald-500"
    },
    {
      icon: MdOutlineMail,
      name: "Email Me",
      link: "mailto:morenocoder@gmail.com",
      iconColor: "from-rose-500 to-pink-500",
      bgColor: "hover:from-rose-500 hover:to-pink-500"
    },
    {
      icon: PiYoutubeLogo,
      name: "Youtube",
      link: "https://www.youtube.com/",
      iconColor: "from-red-500 to-pink-500",
      bgColor: "hover:from-red-500 hover:to-pink-500"
    },
    {
      icon: PiInstagramLogo,
      name: "Follow on Instagram",
      link: "https://www.instagram.com/",
      iconColor: "from-purple-500 to-pink-500",
      bgColor: "hover:from-purple-500 hover:to-pink-500"
    },
    {
      icon: PiDiscordLogo,
      name: "Join my Discord",
      link: "https://www.discord.com/",
      iconColor: "from-indigo-500 to-purple-500",
      bgColor: "hover:from-indigo-500 hover:to-purple-500"
    }
  ]

  return (
    <div className="relative">
      <div className=" absolute top-1/6 left-1/4 w-65 h-65 bg-purple-800 rounded-full blur-3xl animate-opacity" />
      <div className=" absolute right-1/6 bottom-1/4 w-65 h-65 bg-indigo-900 rounded-full blur-3xl animate-opacity" />
      <div className="xl:w-1/2 md:w-2/3 m-auto text-center py-16 px-6 relative">
        <div className="relative w-37.5 m-auto group">
          <div className="rounded-full overflow-hidden border-4 border-black relative z-10">
            <Image src={profileImg} alt="Profile"/>
          </div>
          <div className="absolute h-full w-full top-0 left-0 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md shadow opacity-50 transition duration-500 group-hover:opacity-100" />
        </div>
        <h1 className="text-white my-3">@momen5406</h1>
        <p className="text-gray-400 text-center leading-relaxed">Front-End Developer (React & Next.js) based in Egypt ✨.</p>
      
        <section className="flex flex-col space-y-3 mt-6">
          {
            links.map((link, index) => (
              <Link key={index} Icon={link.icon} bgColor={link.bgColor} iconColor={link.iconColor} link={link.link} name={link.name} />
            ))
          }
        </section>
        <footer className="my-6">
          <p>Crafted with ❤️ by Mo’men Hussein.</p>
        </footer>
      </div>
    </div>
  );
}
