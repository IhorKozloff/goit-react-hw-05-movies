import { Outlet } from "react-router-dom";
import { HeaderBar } from 'components/HeaderBar/HeaderBar';

export const UpSideBar = () => {
    return(
        <>
            <HeaderBar/>
            <Outlet/>
        </>
    )
};