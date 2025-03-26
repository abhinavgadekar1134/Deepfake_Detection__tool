import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-10 to-gray-200 shadow-md border-b border-gray-300  h-15  text-center py-3">
      <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
    
  )
}

export default Footer
