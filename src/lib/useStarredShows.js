import { useEffect, useReducer } from "react"

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const persistedValue = localStorage.getItem(localStorageKey);
        return persistedValue ? JSON.parse(persistedValue) : initial;
    })
  
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey])
    
    return [state, dispatch];
}
  
const starredShowsReducer = (currentState, action) => {
    switch (action.type) {
        case 'STAR': return currentState.concat(action.showId);
        case 'UNSTAR': return currentState.filter((showId)=> action.showId !== showId);
        default: return currentState;
    }
}

export const useStarredShows = () => {
    return usePersistedReducer(starredShowsReducer, [], 'starredShows');
}