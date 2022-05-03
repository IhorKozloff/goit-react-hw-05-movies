import React from 'react';
import { LoaderWrapper } from "components/Loader/Loader.styled";
import { Rings } from  'react-loader-spinner'



export default function Loader () {
    return (
        <>
            
                <LoaderWrapper>
                    <Rings color="#00BFFF" height={80} width={80} />
                </LoaderWrapper>
            
        </>
        
    );
};