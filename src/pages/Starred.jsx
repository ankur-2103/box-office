import { useEffect, useState } from "react";
import { useStarredShows } from "../lib/useStarredShows"
import { getShowsById } from "../api/tvmaze";
import ShowsGrid from "../components/shows/ShowsGrid";
import { TextCenter } from "../components/common/TextCenter";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const [starredShows, setStarredShows] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setApiError(null);
        const data = await getShowsById(starredShowsIds).then(res => res.map(show => ({show})));
        setStarredShows(data);
      } catch (error) {
        setApiError(error);
      }
    }
    getData()
  }, [starredShowsIds])

  if (apiError) {
    return <TextCenter>{apiError.message}</TextCenter>
  }
  
  if (starredShows?.length) {
    return <ShowsGrid shows={starredShows}/>
  }

  return (
    <TextCenter>No starred shows</TextCenter>
  )
}

export default Starred