import React from "react";
import { UseDataContext } from "./MainData";
import { Link } from "react-router-dom";

function SearchRender() {
  const { isSearch, searchResault } = UseDataContext();

  if (!isSearch) {
    return null; // If not searching, don't render anything
  }

  return (
    <div className="bg-slate-950">
      <div className="anime-row bg-slate-950">
        {searchResault.map((anime) => (
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
        ))}
      </div>
    </div>
  );
}

export default SearchRender;
