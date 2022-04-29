import { Section, Container } from 'components/GlobalStyles/GlobalStyles.styled';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInform } from 'components/AddInform/AddInform';
import { Outlet } from 'react-router-dom';

export const MovieDetailsView = () => {
    return(
        
        <Section className='section-search-and-gallery'>
            <Container>
                <MovieDetails/>
                <AddInform/>
                <Outlet/>
            </Container>
        </Section>
        
    )
};