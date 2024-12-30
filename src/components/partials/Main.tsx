
import Navbar from '@/components/partials/navbar/navbar'
import Footer from './footer'

interface propsType {
    children?: React.ReactNode
}

const Main = (props: propsType) => {
  return (
        <>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Main