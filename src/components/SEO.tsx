import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  imageURL?: string
  keywords?: string
}

const SEO = ({
  title,
  description,
  imageURL,
  keywords,
}: SEOProps): JSX.Element => {
  return (
    <Head>
      <title>{title + ' | RASAM 2023'}</title>
      <meta charSet='UTF-8' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords ? keywords : ''} />
      <meta property='og:title' content={title + ' | RASAM 2023'} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imageURL ? imageURL : '/images/logo.png'} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='/' />
    <meta property='' />  
    </Head>
  )
}

export default SEO
