import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {

  return (
    <section id='projects' className='section projects'>
      <h2 className='sectionTitle'>Projects</h2>

      {/* <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div> */}
    </section>
  )
}

export default Projects

