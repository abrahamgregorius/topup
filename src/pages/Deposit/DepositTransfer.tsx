import Container from "@/components/partials/Container";
import Content from "@/components/partials/Content";
import Main from "@/components/partials/Main";
import MenuBar from "@/components/partials/MenuBar";
import { Button } from "@/components/ui/button";
import { ClockIcon } from "@radix-ui/react-icons";
import { WalletIcon } from "lucide-react";
import React from "react";

const DepositTransfer = () => {
    return (
        <>
            <Main>
                <Container>
                    <div className="flex flex-col sm:flex-row">
                        <MenuBar />
                        <Content>
                            
                        </Content>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export default DepositTransfer;
