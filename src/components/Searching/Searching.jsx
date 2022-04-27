import { Formik } from "formik";
import {FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/Searching/Searching.styled'

export const SearchBar = () => {


    return (
        <Formik 
            initialValues={{movieName:''}} 
            onSubmit={({movieName}, actions) => {

                                                    if (movieName.trim() === '') {
                                                        return;
                                                    };
                                                    // setRequest(movieName);
                                                    // setDataToRender([]);
                                                    // setPage(1);
                                                    // setSearchingStatus(undefined);
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
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                    />
                </FormStyled>
        </Formik>
    
);

};

// SearchBar.propTypes = {
// setRequest: PropTypes.func.isRequired,
// setDataToRender: PropTypes.func.isRequired, 
// setPage: PropTypes.func.isRequired, 
// setSearchingStatus: PropTypes.func,
// }
