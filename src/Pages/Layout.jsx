import { HeaderBar } from 'components/HeaderBar/HeaderBar'
import { Section, Container } from 'components/GlobalStyles/GlobalStyles.styled';
import { Outlet } from 'react-router-dom'


export default function Layout () {
    return (
        <>
            <HeaderBar/>

            <Section>
                <Container>
                    <Outlet/>
                </Container>
            </Section>
            
        </>
    );
};