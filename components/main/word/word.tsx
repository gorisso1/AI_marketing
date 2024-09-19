import Image from "next/image";

const Word = () =>{
    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-16 justify-center">
                <div className="md:hidden block">
                    <Image src="/img/world.png" alt="word" width={300} height={300}/>
                </div>
                <div className="grid grid-cols-1  items-center gap-14">
                    <div className="grid grid-cols-1 justify-center text-center">
                        <span className="bg-gradient-text  text-transparent bg-clip-text md:text-72px text-6xl">AI Marketing.</span>
                        <span className="dark:text-white md:text-72px text-5xl">Optimized Reach.</span>

                    </div>
                    <div className="grid grid-cols-1 text-center ">
                        <span className="dark:text-white md:text-25px text-18px  font-montserrat">Our vision is to revolutionize the way brands and </span>
                        <span className="dark:text-white md:text-25px text-18px font-montserrat font-normal">advertisers target, reach</span>

                    </div>


                    <span className="w-full  bg-gradient-text   h-1"></span>


                    <div
                        className="   flex  justify-center w-220px rounded-23px gap-4  items-center mx-auto  border border-col-9E9C9C p-2 ">
                        <span className="dark:text-white font-montserrat">Get Started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <path d="M3.29785 10.2985H15.7234M10.2872 4.8623L15.7234 10.2985L10.2872 15.7346"
                                  stroke="url(#paint0_linear_16_631)" stroke-width="1.55319" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_16_631" x1="15.0425" y1="2.22659" x2="0.590441"
                                                y2="3.08382" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00F0FF"/>
                                    <stop offset="0.482483" stop-color="#5200FF"/>
                                    <stop offset="1" stop-color="#FF2DF7"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>

                <div className="hidden md:block">
                    <Image src="/img/world.png" alt="word" width={491} height={473}/>
                </div>

            </div>

        </div>
    )
}

export default Word;