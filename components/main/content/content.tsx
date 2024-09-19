import {ContentData} from "data/content.data";
import Image from "next/image";


const Content  = () =>{
    return (
        <div className="dark:text-white">
            <div  className="grid grid-cols-1 gap-32">
                {ContentData.map((item,index) =>(
                    <div key={item.id} className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">


                            {index % 2 === 0 ? (
                                <>

                                    <div className="mx-auto md:mx-0">
                                        <Image width={350} height={350} src={item.img} alt={`${item.id}`}/>
                                    </div>
                                    <div>
                                        <h2 className="bg-gradient-text  text-transparent bg-clip-text text-25px md:text-36px text-center font-montserrat">{item.title}</h2>
                                        <p className="md:w-600px text-18px font-montserrat text-center">{item.description}</p>
                                    </div>

                                </>


                            ) : (
                                <>
                                    <div className="inline-block mx-auto md:mx-0 md:hidden">
                                        <Image width={350} height={350} src={item.img} alt={`${item.id}`}/>
                                    </div>


                                    <div>
                                        <h2 className="bg-gradient-text  text-transparent bg-clip-text text-25px md:text-36px text-center font-montserrat">{item.title}</h2>
                                        <p className="md:w-600px text-18px font-montserrat text-center">{item.description}</p>
                                    </div>

                                    <div className="hidden md:inline-block ">
                                        <Image width={350} height={350} src={item.img} alt={`${item.id}`}/>
                                    </div>

                                </>


                            )}
                    </div>
                ))}
            </div>

        </div>

    )


}

export default Content;