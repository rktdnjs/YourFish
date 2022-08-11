import React from 'react'
import { HashLoader } from 'react-spinners'
import '../styles/loading.css'

const Loading = () => {
  return (
    <div>
      <div className='loading'>
        <HashLoader color="#3bd3dd" size={100}/>
      </div>
    </div>
  )
}

export default Loading