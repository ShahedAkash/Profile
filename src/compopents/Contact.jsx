import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="w-[90%] mx-auto mt-36 py-10" id="contact"
            data-aos='fade-right'
            data-aos-duration='1000'>
            <h1 className="text-2xl font-bold">CONTACT ME</h1>

            <div className="flex justify-center items-center space-x-10 mt-10">
                <a href="https://www.facebook.com/shahedakash.baker/" target="_blank" className="p-3 rounded-full bg-black hover:bg-yellow-500 border-2 border-yellow-300 text-3xl"><FaFacebook /></a>
                <a href="mailto:baker.akash48@gmail.com" target="_blank" className="p-3 rounded-full bg-black hover:bg-yellow-500 border-2 border-yellow-300 text-3xl"><MdEmail /></a>
                <a href="" target="_blank" className="p-3 rounded-full bg-black hover:bg-yellow-500 border-2 border-yellow-300 text-3xl"><FaInstagram /></a>
                <a href="https://github.com/ShahedAkash" target="_blank" className="p-3 rounded-full bg-black hover:bg-yellow-500 border-2 border-yellow-300 text-3xl"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/shahed-akash-858734159/" target="_blank" className="p-3 rounded-full bg-black hover:bg-yellow-500 border-2 border-yellow-300 text-3xl"><FaLinkedin /></a>
            </div>
        </div>
    );
};

export default Contact;