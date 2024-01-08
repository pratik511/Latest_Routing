import React from 'react'

function Button({incrementHandler, children}) {
    console.log("1",children)
  return (
    <div><button onClick={incrementHandler}>{children}</button></div>

  )
}

export default React.memo(Button)

