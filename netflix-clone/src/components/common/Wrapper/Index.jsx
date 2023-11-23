import React from 'react'
import "./style.css"
import netfix_logo from "../../common/netflix-logo.png"

function Index() {
  return (
    <div className="container">
                <div className="right-side-container">
                    <img src={netfix_logo} alt="Netflix Logo" />
                    <p className="watch-all-you-want">
                    Watch all you want.
                    </p>
                </div>
                <div className="left-side-container">
                    <button className="btn join-btn join-btn-container">Join now</button>
                </div>
      </div>
  )
}

export default Index
