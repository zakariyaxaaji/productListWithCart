import React from 'react'
import Modal from './Modal'
import { createPortal } from 'react-dom'
const Overlay = () => {
  return (
    <div>
        {createPortal(<Modal modalView = {true}/>, document.getElementById('modal'))}
    </div>
  )
}

export default Overlay
