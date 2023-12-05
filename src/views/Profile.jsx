import React from 'react'
import { increaseCount } from '../redux/slices/counterSlice'
import { useDispatch } from 'react-redux'
const Profile = () => {
  const dispatch = useDispatch()
  return (
    <div><button onClick={() => dispatch(increaseCount())}>click me</button></div>
  )
}

export default Profile