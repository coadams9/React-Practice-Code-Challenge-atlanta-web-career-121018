import React, { Fragment } from 'react'

const Sushi = (props) => {

  const { sushi, eaten, eatenArr } = props

  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) => eaten(sushi)}>
        {eatenArr.includes(sushi) ? null : <img src={sushi.img_url} width="100%"/>}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
