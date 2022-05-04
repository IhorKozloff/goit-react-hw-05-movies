import { Formik } from "formik";
import {FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/SearchingBar/SearchBar.styled'
import PropTypes from 'prop-types';

export const SearchBar = ({setSearchParams, setmovieList }) => {



    
    return (
        <Formik 
            initialValues={{movieName:''}} 
            onSubmit={({movieName}, actions) => {

                                                    if (movieName.trim() === '') {
                                                        return;
                                                    };
                                                    setSearchParams({query: movieName})
                                                    setmovieList([]);

                                                    actions.resetForm();
                                                }}>

                <FormStyled className="form">
                    <SearchBtn type="submit" className="button">
                        <SearchBtnLabel className="button-label">Search</SearchBtnLabel>
                    </SearchBtn>

                    <FieldStyled
                        name="movieName"
                        className="input"
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Search movie"
                    />
                </FormStyled>
        </Formik>
    
);

};

SearchBar.propTypes = {
    setmovieList: PropTypes.func.isRequired,
    setSearchParams: PropTypes.func.isRequired, 
}
