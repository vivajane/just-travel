import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ContextActivity } from './Context'
import Loading from './Loading'

const Wrapper = ({children}) => {
    const {loading} = useContext(ContextActivity)
  return (
    <div>
       <Header/>
        {loading && <Loading />}
        {children}
        <Footer/>
    </div>
  )
}

export default Wrapper
