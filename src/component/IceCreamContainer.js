import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>number of IceCreams-{props.numOfCakes}</h2>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  )
}
const mapStteProps=state=>{
  return{
    numOfIceCreams:state.cakes.numOfIceCreams
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStteProps,mapDispatchToProps)(IceCreamContainer)
