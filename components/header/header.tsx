"use client"
import Image from "next/image";
import {headerData} from "data/header.data";
import {useState} from "react";

const Header =  () =>{
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const switchMenu = () =>{
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <div className="w-full">
            <div className=" hidden md:flex justify-center items-center p-10 gap-56">
                <div className=" hidden md:flex gap-4 items-center ">
                    <Image src="/img/logo.png"  alt="Logo" width={100} height={40}/>
                    {headerData && headerData.map((item)=>(
                        <div className="dark:text-white font-actor" key={item.id}>
                            {item.name}
                        </div>

                    ))}

                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <input placeholder="Search DOML" type="search"
                           className="text-amber-50 rounded bg-search_bg p-4 w-240px h-30px"/>
                    <div className="dark:text-white font-actor">Sign in</div>
                    <div className="dark:text-white rounded border border-col-9E9C9C p-1 font-actor ">Sign up</div>
                </div>
            </div>


            <div className="md:hidden flex gap-6 justify-center items-center p-10">
                <Image src="/img/logo.png" alt="Logo" width={100} height={24}/>
                <input placeholder="Search DOML" type="search"
                       className="text-amber-50 rounded bg-search_bg p-4 w-240px h-30px"/>

                <button onClick={switchMenu} className="text-white">
                        ☰
                </button>



            </div>

            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-start p-4 bg-gray-800 text-white">
                    {headerData &&
                        headerData.map((item) => (
                            <div className="font-actor mb-2" key={item.id}>
                                {item.name}
                            </div>
                        ))}
                    <div className="font-actor mt-2">Sign in</div>
                    <div className="font-actor mt-2 border border-gray-500 p-2">Sign up</div>
                </div>
            )}


        </div>
    )

}

export default Header;