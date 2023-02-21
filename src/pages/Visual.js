import React from 'react'

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className='visual'>
      <div className='inner'>
        <img className='' src={`${path}/images/visual.png`} alt='visual'></img>
      </div>
    </div>
  )
}

export default Visual