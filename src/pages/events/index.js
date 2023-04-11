import React from 'react'
import SEO from '../../components/SEO'

export const getStaticProps = async () => {
  const url = process.env.CMSURL
  const query = `*[_type == 'events']{name, short, date, image { asset -> {url}}}`
  const res = await fetch(url + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: { data: data.result },
  }
}

const Events = ({ data }) => {
  //  The data prop holds the array of events to be displayed
  //  The array contains:
  // date: data[i].date
  // image url : data[i].image.asset.url
  // name: data[i].name
  // short desc: data[i].short
  return (
    <>
      <SEO title='Events' description='The awesome events at RASAM'/>

      <div>The main events page that lists every event</div>
    </>
  )
}

export default Events
