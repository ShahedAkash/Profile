import skills from './data/skills.json'

const Skills = () => {
    return (
        <div className="w-[80%] mx-auto mt-36" id='skills'>
            <h1 className="text-2xl font-bold">SKILLS</h1>
            <div className='grid grid-cols-2 gap-20 my-16'>
                {
                    skills.map(skill => <div key={skill.title} className='w-[45%] flex flex-col items-center border-[2px] border-yellow-300 p-4 mx-auto bg-[rgb(40,47,97)] rounded-lg' style={{ boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                        data-aos='flip-left'
                        data-aos-duration='1000'>
                        <img className='w-[85%] p-4' src={`/src/assets/${skill.imageSrc}`} alt="" />
                        <h1 className='font-bold'>{skill.title}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;