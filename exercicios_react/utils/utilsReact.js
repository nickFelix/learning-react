import React from 'react'

function childrenWithProps(children, props){
  return React.Children.map(props.children, 
    child => React.cloneElement(child, {...props}))
  
  // função que percorre o array de filhos do elemento
}

export { childrenWithProps }