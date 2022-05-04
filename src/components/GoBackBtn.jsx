import { Btn } from 'components/GlobalStyles/GlobalStyles.styled';
import PropTypes from 'prop-types';

export const GoBackBtn = ({onBackClick}) => {
    return <Btn type="button" className="go-back-btn" onClick={onBackClick} >Go Back</Btn>
};

GoBackBtn.propTypes = {
    onBackClick: PropTypes.func.isRequired,
}