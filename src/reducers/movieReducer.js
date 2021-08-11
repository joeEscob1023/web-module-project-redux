import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter(
          (item) => item.id !== Number(action.payload)
        ),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: movies.length + 1,
            title: action.payload,
            director: action.payload,
            metascore: action.payload,
            genre: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
