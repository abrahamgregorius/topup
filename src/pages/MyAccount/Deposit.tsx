import Container from '@/components/partials/Container'
import Main from '@/components/partials/Main'
import MenuBar from '@/components/partials/MenuBar'
import React from 'react'

const Deposit = () => {
  return (
    <>
        <Main>
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <MenuBar />
                    <div className="grow w-full py-8">
                    </div>
                  </div>
            </Container>
        </Main>
    </>
  )
}

export default Deposit