import { useEffect } from "react";
import ArtistSection from "../components/ArtistSection";
import DiscoverSection from "../components/DiscoverSection";
import SuggestionsSection from "../components/SuggestionsSection";
import { useLocation, useParams } from "react-router-dom";

export default function Results({ searchQuery }) {
    const { artist } = useParams()
    useEffect(() => {
        console.log(artist);
    }, [])
    return (
        <>
            <ArtistSection artistData={artistData} />
            <DiscoverSection artistData={artistData} />
            <SuggestionsSection artistData={artistData} />
        </>
    )
}