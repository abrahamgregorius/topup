import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";

const AccountSettings = () => {
    return (
        <Main>
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <MenuBar></MenuBar>
                    <Content>
                        AccountSettings
                    </Content>
                </div>
            </Container>
        </Main>
    );
};

export default AccountSettings;
