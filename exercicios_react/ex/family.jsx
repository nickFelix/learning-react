import React from 'react'
import { childrenWithProps } from '../utils/utilsReact.js'

export default props => (
  <div>
    <h1>Familia</h1>
    { childrenWithProps(props.childre, props) }
    {/*está é a melhor solução, pois permite renderizar mais de um elemento*/}
    
  </div>
)