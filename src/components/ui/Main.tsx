import React from 'react'
import Navbar from '@/components/partials/navbar/navbar'
import Footer from './Footer'
import Container from './Container'

interface propsType {
    children?: React.ReactNode
}

const Main = (props: propsType) => {
  return (
        <>
            <Navbar></Navbar>
                {props.children}
            <Footer></Footer>
        </>
    )
}

export default Main