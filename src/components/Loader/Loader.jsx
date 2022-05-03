import React from 'react';
import { LoaderWrapper } from "components/Loader/Loader.styled";
import { BallTriangle } from  'react-loader-spinner'



export default function Loader () {
    return (
        <>
            
                <LoaderWrapper>
                    <BallTriangle color="#000" height={80} width={80} />
                </LoaderWrapper>
            
        </>
        
    );
};