import React from 'react'
import { Button } from 'react-bootstrap';

const Order = (props) => {
  return (
    <div className='text-left mb-3'>
      <span className='mr-5'>Orden: </span>
      <Button onClick={props.switchOrder.bind(this, 'Ascendent')} bsStyle={props.order === "Ascendent" ? "primary" : "default"} className="mr-2">Ascendent</Button>
      <Button onClick={props.switchOrder.bind(this, 'Descendent')} bsStyle={props.order !== "Ascendent" ? "primary" : "default"} >Descendent</Button>
    </div>
  )
}

export default Order
