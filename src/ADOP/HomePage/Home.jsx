import Banner from "../BannerPage/Banner"
import AnimalList from "./AnimalList"
import Gallary from "../GallaryPage/Gallary"
import Navbar from "../Navbar/Navbar"
export default function Home() {
    return(
        <>
          <Banner/>
          <AnimalList/>
          <Gallary/>
        </>
    )
}