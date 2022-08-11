import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './About.css'

const About = () => {

  return (
    <div className='about center'>
        <h1> Hey! I'm Chiranjeevi Chimmili </h1>

        <div id="avatar"> </div>

      <h2 className='about__role'> Computer Science and Math Student at Georgia Tech</h2>
      <p className='about__desc'> This website is currently a work in progress. Please check back soon! </p>

      <div className='about__contact center'>
          <a>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

              <a
                // href={"e"}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            

              <a
                // href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
      </div>
    </div>
  )
}

export default About
