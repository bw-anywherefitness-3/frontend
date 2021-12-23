import React from 'react'

export default function ClassDetails(props) {
  const {  cDetails } = props

  return (
    <div className='class-details'>
      <p >Class Type: {cDetails.cType}</p>
      <p >Class Date: {cDetails.date}</p>
      <p >Class Time: {cDetails.time}</p>
      <p >Class Duration: {cDetails.duration}</p>
      <p >Class Intensity: {cDetails.intensity_level}</p>
      <p >Class Location: {cDetails.location}</p>
      <p >Class Size: {cDetails.attendees}</p>
      <p >Class Max Size: {cDetails.max_size}</p>
    </div>
  )
}