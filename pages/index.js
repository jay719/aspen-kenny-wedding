import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{'A&K Wedding'}</title>
        <link rel='icon' href='../images/wedding-icon.jpeg' />
      </Head>
      <h1>Aspen and Kenneth Wedding 2022</h1>
      <p id='sub-title'>RSVP</p>
      <div className='contact-conatiner'>
      
      <form>
        <div className='col'>
          <div className='form-group'>
            <label>First Name</label>
            <input type='text' />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input type='text' />
          </div>
          <div className='form-group'>
            <label>Email </label>
            <input type='email' />
            
          </div>
          <div id='submit-fg'>
            <input type='submit' />
          </div>
        </div>
        
      </form>
      </div>
    </div>
  )
}
