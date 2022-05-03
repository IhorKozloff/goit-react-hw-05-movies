import { Btn } from 'components/GlobalStyles/GlobalStyles.styled';
export const GoBackBtn = ({onBackClick}) => {
    return <Btn type="button" className="go-back-btn" onClick={onBackClick} >Go Back</Btn>
};