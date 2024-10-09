import React from 'react'
import Container from '@/components/partials/Container'
import Content from '@/components/partials/Content'
import Main from '@/components/partials/Main'
import MenuBar from '@/components/partials/MenuBar'

const DepositMutasi = () => {
  return (
    <>
      <Main>
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <MenuBar />
                    <Content>
                      DepositMutasi
                    </Content>
                  </div>
            </Container>
        </Main>
    </>
  )
}

export default DepositMutasi