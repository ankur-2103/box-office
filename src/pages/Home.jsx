import { useState } from "react"
import { searchForActors, searchForShows } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
import { TextCenter } from "../components/common/TextCenter";

const Home = () => {

    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const onSearch = async ({q, searchOption}) => {

        try {
            setApiError(null);
            if (searchOption === 'shows') {
                const result = await searchForShows(q);
                setApiData(result);
            } else {
                const result = await searchForActors(q);
                setApiData(result);
            }
        } catch (error) {
            setApiError(error.message);
        }

    }

    const renderData = () => {

        if (apiError) {
            return <TextCenter>{apiError}</TextCenter>
        }

        if (apiData?.length === 0) {
            return <TextCenter>No results</TextCenter>
        }

        if (apiData) {
            return apiData[0].show ? <ShowsGrid shows={apiData} /> : <ActorsGrid actors={apiData} /> 
        }

        return null;
    }

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            {renderData()}
        </div>
    )
}

export default Home