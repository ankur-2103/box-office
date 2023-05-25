import { useStarredShows } from "../../lib/useStarredShows"
import { FlexGrid } from "../common/FlexGrid";
import ShowCard from "./ShowCard"

const ShowsGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  const onStarClick = (showId) => {
    starredShows.includes(showId) ? dispatchStarred({type: 'UNSTAR', showId}) : dispatchStarred({type: 'STAR', showId})
  }

  return (
      <FlexGrid>
          {shows.map((data) =>
              <ShowCard
                key={data.show.id}
                id={data.show.id}
                name={data.show.name}
                image={data.show.image ? data.show.image.medium : './not-found-img.png'}
                summary={data.show.summary} 
                onStarClick={onStarClick}
                isStarred={starredShows.includes(data.show.id)}
              />
            )}
      </FlexGrid>
  )
}

export default ShowsGrid