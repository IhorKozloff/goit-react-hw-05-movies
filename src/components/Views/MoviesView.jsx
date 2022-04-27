import { SearchBar } from 'components/Searching/Searching';
import { Section, Container } from 'components/GlobalStyles/GlobalStyles.styled';
export const MoviesView = () => {
    return(
        
        <Section>
            <Container>
                <SearchBar/>
            </Container>
        </Section>
        
    )
};