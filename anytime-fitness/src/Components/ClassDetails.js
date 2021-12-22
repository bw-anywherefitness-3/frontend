import React from 'react'

export default function ClassDetails(props) {
  const {  
    cType,
    date,
    time,
    duration,
    intensity_level,
    location,
    attendees,
    max_size
} = props

  return (
    <div className='class-details'>
      <p >Class Type: {cType}</p>
      <p >Class Date: {date}</p>
      <p >Class Time: {time}</p>
      <p >Class Duration: {duration}</p>
      <p >Class Intensity: {intensity_level}</p>
      <p >Class Location: {location}</p>
      <p >Class Size: {attendees}</p>
      <p >Class Max Size: {max_size}</p>
    </div>
  )
}