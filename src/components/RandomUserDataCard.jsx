import React from 'react'

const RandomUserDataCard = (props) => {
  return (
    <div className='postcards'>
        <div className='postcards__container'>
        <img style={{width:"100px", height:"100px"}} src={props.data.picture.large} />
        <h3>{props.data.id.name}</h3>
        <h1>{props.data.name.first}</h1>
        <h3>{props.gender}</h3>
        <h3>{props.data.email}</h3>
        <h3>{props.data.phone}</h3>
        </div>
    </div>
  )
}

export default RandomUserDataCard