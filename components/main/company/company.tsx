import {companyData} from "data/company.data";
import Image from "next/image";

const Company = () => {
    return (
        <div>


            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6  md:grid-cols-7 md:gap-4" >
                    {companyData.map((item) => (
                        <div key={item.id} className="flex justify-center items-center">
                            <Image
                                src={item.src}
                                width={item.width}
                                height={item.height}
                                alt={`Company ${item.id}`}

                            />
                        </div>
                    ))}

                </div>


            </div>
            <div className="dark:text-white font-montserrat flex justify-center items-center mt-5 text-16px md:text-20px">Companies We’ve Successfully Collaborated With
            </div>


        </div>
    );
};

export default Company;