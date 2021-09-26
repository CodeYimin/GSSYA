import React, { ReactElement } from 'react'

function LoadingScreen(): ReactElement {

  return (
    <div className="w-screen h-screen" >
      <p className="absolute inset-0 w-max h-min text-6xl m-auto" >Loading...</p>
    </div>
  )
}

export default LoadingScreen;
