const BASE_URL = 'https://api.tvmaze.com'

const apiGet = async (queryString) => {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();
    return body;
}

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);

export const searchForActors = (query) => apiGet(`/search/people?q=${query}`);

export const getShowById = (showId) => apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsById = async (showIds) => {
    const promises = showIds.map((id) => apiGet(`/shows/${id}`));
    const result = await Promise.all(promises);
    return result
};