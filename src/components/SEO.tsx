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
    </Head>
  )
}

export default SEO
