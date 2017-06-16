import React from 'react'

export default props => (
  <div>
    <h1>Familia</h1>
    { React.cloneElement(props.children, {...props}) }

    {/*esse metodo para passar atributos para os filhos funciona apenas para um elemento*/}
    
  </div>
)