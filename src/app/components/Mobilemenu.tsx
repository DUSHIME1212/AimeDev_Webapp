import React, {useState} from 'react'
import Link from "next/link";

const Mobilemenu = () => {

    const [isOpen, setisOpen ] = useState(false);
    const link = [
        {title:'Home',path:'/'},
        {title:'Friends',path:'/'},
        {title:'Groups',path:'/'},
        {title:'Stories',path:'/'},
        {title:'Login',path:'/'},
    ]


    return (
        <div>
            <div onClick={() => {setisOpen((prev) => !prev)}} className={'md:hidden flex cursor-pointer gap-[7px] items-center flex-col justify-between'}>
                <div className={`bg-blue-500 h-[3px] duration-700 origin-left ${isOpen ? 'rotate-45':'' } w-7`}/>
                <div className={`bg-blue-500 h-[3px] duration-700 ${isOpen ? 'opacity-0':''} w-7 `}/>
                <div className={`bg-blue-500 h-[3px] duration-700 origin-left w-7 ${isOpen ? '-rotate-45':'' }`}/>
            </div>
            {isOpen &&
                <div className={'fixed z-[100] top-16 bg-opacity-20 backdrop-blur-md h-screen w-screen bg-gray-50 left-1/2 -translate-x-1/2 flex justify-center text-2xl gap-4 flex-col items-center'}>
                    {link.map((item, index) => (
                        <Link key={index} href={item.path}>{item.title}</Link>
                    ))}
                </div>}
        </div>
    )
}
export default Mobilemenu
