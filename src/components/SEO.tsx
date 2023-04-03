import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  imageURL?: string
  keywords?: string
}

const SEO = ({ title, description, imageURL, keywords }: SEOProps) => {
  return (
    <Head>
      <title>{title + ' | RASAM 2023'}</title>
      <meta charSet='UTF-8'> </meta>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords ? keywords : ''}></meta>
    </Head>
  )
}

export default SEO
