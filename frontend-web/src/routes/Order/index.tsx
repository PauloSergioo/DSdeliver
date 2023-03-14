import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import StepsHeader from "../../components/StepsHeader";

export default function Order() {

    return (
        <>
            <Header/>
            <StepsHeader/>
            <Outlet/>
        </>
    )
}