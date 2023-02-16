import React from 'react'
import '../styles/Alert.css';

export default function Alert({alertMsg}) {
  return (
    <div className="alert-container">
          <div className="alert">{alertMsg}</div>
        </div>
  )
}
