import styled from '@emotion/styled'
import { Form, Field, } from 'formik';



export const FormStyled = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;
export const FieldStyled = styled(Field)`
    border: 1px solid black;
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    // border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`;
export const SearchBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://w7.pngwing.com/pngs/242/301/png-transparent-black-and-blue-q-logo-illustration-computer-icons-apple-icon-format-search-icon-svg-desktop-wallpaper-web-search-engine-toolbar.png');
    background-size: 150%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    :hover {
        opacity: 1;
    }
    &:active {
        transform: scale(0.9)
    }
`;
export const SearchBtnLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;