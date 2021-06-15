import React from 'react'

const NavButton = ({ navHandler }) => {
  return (
    <div className="nav-btn" onClick={navHandler}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
    </div>
  )
}

export default NavButton
