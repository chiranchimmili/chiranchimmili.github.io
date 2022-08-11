import './Contact.css'

const Contact = () => {
  return (
    <section className='section contact center' id='contact'>
      <h2 className='sectionTitle'>Contact</h2>
      <a href="mailto:cchimmili3@gatech.edu">
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact

