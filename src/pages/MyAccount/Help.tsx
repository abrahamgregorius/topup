import Container from '@/components/partials/Container'
import Main from '@/components/partials/Main'
import MenuBar from '@/components/partials/MenuBar'


const Help = () => {
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

export default Help