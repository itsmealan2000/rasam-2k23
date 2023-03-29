import React, { useEffect, useState } from 'react'

const Days = () => {
  const [days, setDays] = useState(0)

  const end = new Date('27 April 2023')
  const _day = 1000 * 60 * 60 * 24

  const showRemaining = () => {
    let now = new Date()
    const distance = end - now

    setDays(Math.floor(distance / _day))
  }

  useEffect(() => {
    showRemaining()
  })

  return <div>{days}Days till descent</div>
}

export default Days
