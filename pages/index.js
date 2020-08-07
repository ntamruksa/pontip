import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className='section-aboutus'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Welcome to Pontip Thai Market</h2>
      </div>
      <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Pontip was the first Asian grocery store in Chinatown</h3>
                        <p className="paragraph">Alongside wide range of authentic Thai groceries and snacks Pontip also serves variety ready-made meals.</p>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                          <img src="/pontip-2.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
      </div>
    </section>
  )
}
