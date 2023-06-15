import React from 'react'
import { useSelector } from 'react-redux'

const MyComponent = () => {

  const temp = useSelector((state: any) => state.temp)
  console.log(temp,'temp')

  return (
    <div className='flex justify-center items-center m-5'>
      <p className='text-4xl font-sans font-medium'>{temp}</p>
    </div>
  )
}

export default MyComponent