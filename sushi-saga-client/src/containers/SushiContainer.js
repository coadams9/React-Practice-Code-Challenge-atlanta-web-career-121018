import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const { chooseFour, sushis, eaten, eatenArr } = props

  const showSushis = sushis.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} eaten={eaten} eatenArr={eatenArr}/>
  })

  return (
    <Fragment>
      <div className="belt">
        {
          showSushis
        }
        <MoreButton chooseFour={chooseFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
