import { styled } from "styled-components";

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const ShowDetails = ({status, premiered, network}) => {
    return (
        <DetailsWrapper>
            <p>Status: {status}</p>
            <p>Premiered {premiered} {!!network && `on ${network.name}`}</p>
        </DetailsWrapper>
    )
}

export default ShowDetails