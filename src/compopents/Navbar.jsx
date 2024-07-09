

const Navbar = () => {
    return (
        <>
            <div className="max-w-[90%] mx-auto flex justify-between items-center font-bold"
                data-aos='fade-down'
                data-aos-duration='1000'>
                <div className="text-2xl">Portfolio</div>
                <div className="space-x-8 p-4 text-yellow-100">
                    <a href="#home" className="hover:border-b-2 border-solid border-yellow-500 p-2">Home</a>
                    <a href="#experience" className="hover:border-b-2 border-solid border-yellow-500 p-2">Experience</a>
                    <a href="#skills" className="hover:border-b-2 border-solid border-yellow-500 p-2">Skills</a>
                    <a href="#projects" className="hover:border-b-2 border-solid border-yellow-500 p-2">Projects</a>
                    <a href="#contact" className="hover:border-b-2 border-solid border-yellow-500 p-2">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;