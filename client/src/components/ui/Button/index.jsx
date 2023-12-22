import {Button as ChakraButton} from '@chakra-ui/react'

const Button = (props) => {
  return (
    <ChakraButton {...props} >{props.children}</ChakraButton>
  )
}

export default Button