import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const DataContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const SEARCH = "SEARCH";
const LOADING = "LOADING";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UP_COMING_ANIME = "GET_UP_COMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return { ...state, loading: true };
  } else if (action.type === GET_POPULAR_ANIME) {
    return { ...state, popularAnime: action.payload, loading: false };
  } else if (action.type === SEARCH) {
    return { ...state, searchResault: action.payload, loading: false };
  } else if (action.type === GET_AIRING_ANIME) {
    return { ...state, airingAnime: action.payload, loading: false };
  } else if (action.type === GET_UP_COMING_ANIME) {
    return { ...state, upCommingAnime: action.payload, loading: false };
  }
  return state;
};

export const DataContextProvider = ({ children }) => {
  const initialState = {
    popularAnime: [],
    upCommingAnime: [],
    airingAnime: [],
    picture: [],
    isSearch: false,
    searchResault: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  //handleChange
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a search term!");
    }
  };

  //fetch getPopularAnime
  const getPopularAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
      const data = await response.json();
      dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch airingAnime
  const getAiringAnime = async () => {
    dispatch({ type: LOADING });
    const respone = await fetch(`${baseUrl}/top/anime?filter=airing`);
    const data = await respone.json();
    console.log(data.data);
    dispatch({ type: GET_AIRING_ANIME, payload: data.data });
  };

  //fetch upComingAnime
  const getUpcommingAnime = async () => {
    dispatch({ type: LOADING });
    const respone = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
    const data = await respone.json();
    dispatch({ type: GET_UP_COMING_ANIME, payload: data.data });
  };

  //search anime
  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    const data = await response.json();
    dispatch({ type: SEARCH, payload: data.data });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        searchAnime,
        getAiringAnime,
        getPopularAnime,
        getUpcommingAnime,
        setSearch,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = () => {
  return useContext(DataContext);
};
