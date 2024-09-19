import Social from "components/svg/social/social";
import Image from "next/image";

const Footer = () =>{

    return(
        <footer className="w-full bg-footer-color p-20">
            <div className="flex flex-col md:flex-row justify-center items-center dark:text-white gap-32 md:gap-56">
                <div>
                    <Image src="/img/logo.png"  alt="Logo" width={100} height={24}/>

                </div>
                <div>
                    <h4>
                        Contact Us
                    </h4>
                    <h2>Email: admin@casesingh.com</h2>
                    <h2>Address 1: 1806-159 Dundas ST E Toronto ON M5B 0A9 Canada</h2>
                    <h2>Address 2: 18 Strathearn Ave #7B Brampton ON L6T 4X7 Canada</h2>

                </div>
                <div className="grid grid-cols-1 gap-6">
                    <h4>Quick Links</h4>
                    <a>Home</a>
                    <a>Who We Serve</a>
                    <a>Services</a>
                    <Social/>
                </div>
            </div>


        </footer>

    )
}

export default Footer;