import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsCon'>
      <h1 className='newsTitle'>Newsletter</h1>
      <div className='newsDesc'>Get Timely update from your favourite products.</div>
      <div className='inputCon'>
        <input placeholder='Your email...'/>
        <button>
            <i className='bx bx-send'></i>
        </button>
      </div>

    </div>
  )
}

export default Newsletter
