import React from 'react'
import { useSelector } from 'react-redux'


const Post = () => {
  const adres = useSelector(state => state.addresses.addresses)
  console.log(" adrdlfkjdlkfges : ", adres)

  const count = useSelector(state => state.counter.value)
  return (
    <div>count : {count}</div>
  )
}

export default Post