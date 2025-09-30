import React from 'react'

const GreatingsCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default GreatingsCard
