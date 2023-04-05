import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../components/navbar'
import SEO from '../components/SEO'
import styles from '../styles/About.module.scss'

const About = () => {
  const videoRef = useRef(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mobileQuery.matches)

    const handleResize = () => {
      setIsMobile(mobileQuery.matches)
    }
    mobileQuery.addEventListener('change', handleResize)

    return () => {
      mobileQuery.removeEventListener('change', handleResize)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      const source = video.querySelector('source')

      if (isMobile) {
        source.src = '/videos/mob_background.mp4'
      } else {
        source.src = '/videos/raw_background.mp4'
      }

      video.load()
    }
  }, [isMobile])
  return (
    <div>
      <SEO title='About' description='This is all about the about page' />
      <NavBar />
      <div className={styles.videoContainer}>
        <video autoPlay muted loop ref={videoRef}>
          <source src='/videos/raw_background.mp4' type='video/mp4' />
        </video>
        This is the about page Yaaya
      </div>
    </div>
  )
}

export default About
