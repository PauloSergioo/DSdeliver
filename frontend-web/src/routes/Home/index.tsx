import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";

export default function Home() {

    return (
        <>
            <Header />
            <HomeCard/>
            <Footer/>
            <Outlet/>
        </>
    )
}