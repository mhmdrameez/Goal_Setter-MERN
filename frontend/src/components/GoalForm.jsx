import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

const onSubmit = e=>{
e.preventDefault()
}



function GoalForm() {
  return (
    <section className='form'>
     <form onSubmit={onSubmit}>
       
     </form>
      </section>
  )
}

export default GoalForm