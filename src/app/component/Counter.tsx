'use client'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment, decrement } from "../../../store/slices/counterSlice";
const Counter = () => {
const dispatch=useDispatch()

const counter= useSelector((state:any)=>state.counter)

  return (
    <div className='w-60 mx-auto mt-8'>
    <h1 > redux counter </h1>
<div className='flex flex-row gap-7 mt-5'>
    <button onClick={()=>dispatch(decrement())}> <span> - </span> </button>
  {counter}
  <button onClick={()=>dispatch(increment())}> <span> + </span> </button>
</div>
</div>
  )
}

export default Counter