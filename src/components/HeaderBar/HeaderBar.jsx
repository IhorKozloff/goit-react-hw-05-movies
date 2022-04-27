import React from "react";
import { SectionHeader } from 'components/HeaderBar/HeaderBar.styled';
import { Container } from 'components/GlobalStyles/GlobalStyles.styled';
import { Navigation } from 'components/Navigation/Navigation';




export const HeaderBar = () => {
    return (
        <>
            <SectionHeader>
                <Container>
                    <Navigation/>
                </Container>
            </SectionHeader>
        </>
    );
};