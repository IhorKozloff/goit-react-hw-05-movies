import React from "react";
import { NavigationLink, NavigationList, NavigationItem } from 'components/Navigation/Navigation.styled';




export const Navigation = () => {
    return (
        <>
            <NavigationList>
                <NavigationItem>
                    <NavigationLink to="/">
                        Home
                    </NavigationLink>
                </NavigationItem>

                <NavigationItem>
                    <NavigationLink to="/movies">
                        Movies
                    </NavigationLink>
                </NavigationItem>
            </NavigationList>
        </>
    );
};


