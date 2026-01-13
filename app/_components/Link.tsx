import React from 'react'
import { IconType } from 'react-icons';
import { IoChevronForward } from 'react-icons/io5'

interface linkProps {
  Icon: IconType;
  name: string;
  link: string;
  iconColor: string;
  bgColor: string;

}

const Link = ({Icon, name, link, iconColor, bgColor}: linkProps) => {
  return (
    <a href={link}>
      <div className={"flex items-center justify-between relative backdrop-blur-xl bg-white/10 border border-white/10 group-hover:border-white/20 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-linear-to-r " + `${bgColor}`}>
        <div className="flex items-center space-x-3">
          <div className={"p-3 rounded-2xl text-2xl shadow-md bg-linear-135 " + iconColor}>
            <Icon />
          </div>
          <h4 className="font-semibold">{name}</h4>
        </div>
        <IoChevronForward className="text-gray-300" />
      </div>
    </a>
  )
}

export default Link