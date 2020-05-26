import React from 'react'

export default function BackToHome({ onGoHome }) {
  
  return <span className="back-home" onClick={() => onGoHome(null)}>Back To Home</span>
}
