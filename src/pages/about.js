import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../components/navbar'
import SEO from '../components/SEO'
import styles from '../styles/About.module.scss'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[_type == 'pages' && slug.current == 'pages']{about{ title, Content[]{children[]{_type, text}} ,metadata {title, desc} } }`
  const res = await fetch(url + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: { data: data.result },
  }
}

const About = ({ data }) => {
  const elemList = []
  const pagedata = data[0].about
  const [bodyContent, useBodyContent] = useState([])

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

  const children = pagedata.Content[0].children

  for (let i in children) {
    console.log(children[i]._type, children[i].text)
    if (children[i]._type == 'span') {
      elemList.push(<span>{children[i].text}</span>)
    }
  }

  return (
    <div>
      <SEO title='About' description='This is all about the about page' />
      <NavBar />
      {elemList}
    </div>
  )
}

export default About
