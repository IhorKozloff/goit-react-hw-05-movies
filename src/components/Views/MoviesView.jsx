import { Section, Container } from 'components/GlobalStyles/GlobalStyles.styled';
import { MovieSection } from 'components/MovieSection/MovieSection';


export const MoviesView = () => {
    return(
        
        <Section className='section-search-and-gallery'>
            <Container>
                <MovieSection/>
            </Container>
        </Section>
        
    )
};