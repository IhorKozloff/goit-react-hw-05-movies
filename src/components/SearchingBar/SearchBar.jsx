import { Formik } from "formik";
import {FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/SearchingBar/SearchBar.styled'
import { useNavigate } from "react-router-dom";





export const SearchBar = ({setmovieTitle, setmovieList, }) => {
    let navigate = useNavigate();

    
    return (
        <Formik 
            initialValues={{movieName:''}} 
            onSubmit={({movieName}, actions) => {

                                                    if (movieName.trim() === '') {
                                                        return;
                                                    };
                                                    const query = `?query=${movieName}`;
                                                    setmovieTitle(query);
                                                    setmovieList([]);
                                                    navigate(query)
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
                        autoComplete="on"
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
