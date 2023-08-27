import React, { useEffect } from "react";
import { UseDataContext } from "../components/MainData";
import { Link } from "react-router-dom";
import "../pages/PopularAnime.css";

function Home() {
  const { popularAnime, isSearch, getPopularAnime, searchResault } =
    UseDataContext();

  useEffect(() => {
    getPopularAnime();
  }, []);

  if (!popularAnime) {
    // Data is loading or not available yet
    return (
      <div className="w-screen h-screen bg-slate-950 ">
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"></svg>
          LOADING...
        </button>
      </div>
    );
  }

  const popularAnimeRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => (
        <Link
          className="anime-card bg-slate-900 text-red-500"
          to={`/anime/${anime.mal_id}`}
          key={anime.mal_id}>
          <img
            className="anime-image"
            src={anime.images.jpg.image_url}
            alt=""
          />
          <h3 className="text-sm font-bold text-center">{anime.title}</h3>
        </Link>
      ));
    } else {
      return searchResault.map((anime) => {
        return (
          <Link
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="anime-card bg-slate-900 text-red-500">
            <img
              className="anime-image"
              src={anime.images.jpg.image_url}
              alt=""
            />
            <h3 className="text-sm font-bold text-center">{anime.title}</h3>
          </Link>
        );
      });
    }
  };

  return (
    <div className="bg-slate-950">
      <div>
        <div className="text-xl font-bold text-red-500 text-center mb-5">
          Popular Anime:
        </div>
        <div className="anime-row bg-slate-950">{popularAnimeRender()}</div>
      </div>
    </div>
  );
}

export default Home;
