import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze";
import ShowMainData from "../components/shows/ShowMainData";
import ShowDetails from "../components/shows/ShowDetails";
import Seasons from "../components/shows/Seasons";
import Casts from "../components/shows/Casts";
import { styled } from "styled-components";
import { TextCenter } from "../components/common/TextCenter";

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

const Show = () => {

    const { showId } = useParams();
    const [apiData, setApiData] = useState(null);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setApiError(null)
                const data = await getShowById(showId);
                setApiData(data);
            } catch (error) {
                setApiError(error);
            }
        }
        getData();
    },[showId])


    const renderData = () => {
        if (apiError) {
            return <TextCenter>We have an error {apiError.message}</TextCenter>
        }

        if (apiData) {
            return (
                <ShowPageWrapper>
                    <BackHomeWrapper>
                        <Link to='/'>Go back to home</Link>
                    </BackHomeWrapper>
                    <ShowMainData image={apiData.image} name={apiData.name} rating={apiData.rating} summary={apiData.summary} genres={apiData.genres}/>
                    <InfoBlock>
                        <h2>Details:</h2>
                        <ShowDetails status={apiData.status} premiered={apiData.premiered} network={apiData.network} />
                    </InfoBlock>

                    <InfoBlock>
                        <h2>Seasons:</h2>
                        <Seasons seasons={apiData._embedded.seasons} />
                    </InfoBlock>

                    <InfoBlock>
                        <h2>Casts:</h2>
                        <Casts cast={apiData._embedded.cast} />
                    </InfoBlock>
                </ShowPageWrapper>
            )
        }

        return <TextCenter>Data is loading...</TextCenter>
    }

    return (
        <>
            {renderData()}
        </>
    )
}

export default Show