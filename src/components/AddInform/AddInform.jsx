import React from "react";
import { InformLink, InformWrapper } from "components/AddInform/AddInform.styled";

export const AddInform = () => {
    return (
        <>
            <InformWrapper>
                <p>Additional information</p>
                <ul>
                    <li><InformLink to="cast">Cast</InformLink></li>
                    <li><InformLink to="reviews">Reviews</InformLink></li>
                </ul>
            </InformWrapper>
        </>

    );
};