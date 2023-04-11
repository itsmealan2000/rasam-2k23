import React from 'react'
import SEO from '../../components/SEO'

export const getStaticPaths = async () => {
  const query = `*[_type == 'events']{slug{current}}`
  const url = process.env.CMSURL
  const res = await fetch(url + encodeURIComponent(query))
  const data = await res.json()

  let paths = []

  data.result.map((param, key) => {
    paths.push({ params: { event: param.slug.current } })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const url = process.env.CMSURL
  const query = `*[_type == 'events' && slug.current == '${params.event}']{name, short, date, details,cords[]{name, contact, email},image{asset->{url}}}`
  const res = await fetch(url + encodeURIComponent(query))
  const data = await res.json()

  return {
    props: { data: data.result[0] },
  }
}

const Event = ({ data }) => {
  return (
    <>
      <SEO title={data.name} description={data.short} />
      <div>The page template for each separate events</div>
    </>
  )
}

export default Event
