import React from 'react'

const MoreButton = (props) => {
  const { chooseFour } = props
    return <button onClick={() => chooseFour()}>
            More sushi!
          </button>
}

export default MoreButton
