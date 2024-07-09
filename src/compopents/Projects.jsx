import projects from '../compopents/data/projects.json'

const Projects = () => {
    return (
        <div className="w-[90%] mx-auto mt-36" id='projects'>
            <h1 className="text-2xl font-bold">PROJECTS</h1>

            <div className='flex flex-wrap justify-center gap-24 my-20'>
                {
                    projects.map(project => <div key={project.key} className='bg-[rgb(40,47,97)] border-[2px] border-yellow-300 w-[25%] rounded-lg' style={{ boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)' }}
                        data-aos='zoom-out-up'
                        data-aos-duration='1000'>
                        <div className="card">
                            <figure className="px-5 pt-5 ">
                                <img
                                    src={project.imageSrc}
                                    alt="Shoes"
                                    className="rounded-xl border-2 border-yellow-300" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{project.title}!</h2>
                                <p>{project.description}</p>
                                <div className='flex justify-between space-x-8 mt-4'>
                                    <a href={project.demo} target='_blank' className='btn btn-primary'>Demo</a>
                                    <a href={project.source} target='_blank' className='btn btn-warning'>Code</a>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;