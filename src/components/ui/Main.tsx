import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './Footer'
import Container from './Container'

interface propsType {
    children?: React.ReactNode

}

const Main = (props: propsType) => {
  return (
        <>
            <Navbar></Navbar>
                <Container>
                    {props.children}
                </Container>
            <Footer></Footer>
        </>
    )
}

export default Main