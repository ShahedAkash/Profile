import experiences from './data/experience.json'

const Experience = () => {
    return (
        <div className="max-w-[90%] mx-auto mt-20" id='experience'>
            <h1 className="text-2xl font-bold">EXPERIENCE</h1>

            {
                experiences.map(experience => <div key={experience.id} className='w-[53%] flex items-center p-8 m-14 gap-8 bg-[rgb(40,47,97)]  mx-auto rounded-lg border-[2px] border-yellow-300' style={{ boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                    data-aos='zoom-in'
                    data-aos-duration='1000'>
                    <div><img className='w-full h-full bg-white' src={experience.imageSrc} alt="" /></div>
                    <div>
                        <h1 className='text-xl font-bold'>{experience.role}</h1>
                        <h2 className='text-lg font-semibold'><span className='text-[greenyellow]'>{experience.startDate} - {experience.endDate}</span> , <span className='text-yellow-200'>{experience.location}</span></h2>
                        <p className='text-yellow-200'>{experience.experiences[0]}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Experience;