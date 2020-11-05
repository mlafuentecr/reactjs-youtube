import React from 'react'

const Loader=(props)=>{
return <div className='ui text loader'>{props.message }</div>
}

Loader.defaultProps ={
  message: 'Loading...'
}
export default Loader;