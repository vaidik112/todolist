import React from 'react'

const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    border: "5px solid red"
  }
  return (
    <footer className="bg-dark text-light py-3" style = {footerstyle}>
      <p className="text-center">
        Copyright &copy; Mytodos.com
      </p>
      
    </footer>
  )
}

export default Footer
