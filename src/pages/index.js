// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ChatApp } from '../ChatApp';
// // import './index.css';


// ReactDOM.render(
//   <ChatApp />,
//   document.getElementById('root')
// );


import { useState, useEffect } from 'react'
import { ChatApp } from '../ChatApp';

function App() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <ChatApp />
}

export default App