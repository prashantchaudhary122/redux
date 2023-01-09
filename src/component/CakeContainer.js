import React from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
import {connect} from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>number of Cakes-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}
const mapStteProps=state=>{
  return{
    numOfCakes:state.numOfCakes
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStteProps,mapDispatchToProps)(CakeContainer)
