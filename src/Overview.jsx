import React from 'react'

const Overview = ({items}) => {
  return (
    <>
    {
    items.map((item, i) => 
      <div key={i}>{item}</div>
    )
    }
    </>
  )
}

export default Overview