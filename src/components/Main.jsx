import React from 'react'

export default function Main(props) {
  const { data } = props
  return (
    <div className='img-container'>
        <img src={data?.url} alt={data?.title} className="bgimage" />

    </div>
  )
}
