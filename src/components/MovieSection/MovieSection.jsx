import React, {useState, useEffect} from "react"
import { SearchBar } from 'components/MovieSection/SearchingBar/SearchBar';
import { Gallery } from 'components/MovieSection/Gallery/Gallery';
import { searchAPIByName } from 'components/API';

export const MovieSection = () => {
    const [movieTitle, setmovieTitle] = useState('');
    const [galleryData, setGalleryData] = useState([]);
    // const [page, setPage] = useState(1)


    useEffect(() => {
        if(movieTitle !== ''){
            searchAPIByName(movieTitle, 1).then(data => {
                
                console.log(data.results)
                setGalleryData(data.results)
            });
        }
        
    },[movieTitle])

return (
    <>
        <SearchBar setmovieTitle={setmovieTitle} setGalleryData={setGalleryData}/>
        {galleryData.length !== 0 && <Gallery data={galleryData}/>}
    </>
)

};