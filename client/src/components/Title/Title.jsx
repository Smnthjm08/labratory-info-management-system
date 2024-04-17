import React from 'react'
import './Title.css'

const Title = ( {subTitle, title} ) => {
  return (
    <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title

{/* <p>Our Services</p>
<h2>What We Provide</h2> */}