import React from "react"
import ReactDOM from "react-dom"
import "./Offcanvas.css"

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={() => props.onCloseCart(false)}></div>
  )
}

const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  )
}

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays")
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </>
  )
}

export default Offcanvas
