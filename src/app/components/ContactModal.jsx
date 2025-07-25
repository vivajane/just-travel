import React from 'react'

const ContactModal = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black  fixed opacity-90 inset-0 top-0 bottom-0 left-0 right-0">
        <div className="absolute space-y-2  bg-white rounded-md text-center px-4 py-4">
            <h1 className="md:text-xl font-bold">Thank you for reaching out</h1>
            <h1 className="md:text-md font-bold">We will get back to you soon</h1>
        </div>
      
    </div>
  )
}

export default ContactModal
