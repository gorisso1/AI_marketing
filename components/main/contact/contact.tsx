import Image from "next/image";
import Social from "components/svg/social/social";

const Contact = () =>{
    return(
        <div className="mx-auto" >
            <div
                className="p-10 flex flex-col md:flex-row justify-center items-center  dark:text-white bg-gradient-text md:w-1000px rounded-20px">
                <div className="md:hidden block">
                    <Image src="/img/content/6.webp" alt="cart" width={400} height={400}/>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <h2 className="dark:text-white font-bold">Let’s work together</h2>
                    <div>
                        <p>Location 1</p>
                        <p>1806-159 Dundas ST E Toronto ON M5B 0A9 Canada</p>
                    </div>
                    <div>
                        <p>Location 2</p>
                        <p>18 Strathearn Ave #7B Brampton ON L6T 4X7 Canada</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" fill="#6ec1e4" width="17px"
                             height="13px" viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                        <span>admin@casesingh.com</span>
                    </div>
                    <Social/>
                </div>

                <div className="hidden md:block">
                    <Image src="/img/content/6.webp" alt="cart" width={400} height={400}/>
                </div>
            </div>

        </div>


    )

}

export default Contact;