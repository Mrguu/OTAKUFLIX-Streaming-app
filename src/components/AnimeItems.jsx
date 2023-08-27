import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimeItems() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});

  const {
    aired,
    producers,
    background,
    duration,
    episodes,
    genres,
    images,
    rank,
    rating,
    score,
    season,
    status,
    studios,
    title,
    trailer,
    type,
    year,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  useEffect(() => {
    getAnime(id);
  }, []);

  return (
    <div className="w-full bg-gray-800 text-red-500">
      <div className="flex flex-col md:flex-row items-center border-b border-red-300 mb-10">
        <div className="md:w-1/3 mt-5 md:mt-0 p-10">
          <img src={images?.webp.large_image_url} alt="anime" />
        </div>
        <div className="w-full p-2 text-start md:p-10 flex flex-col justify-start">
          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">
            {title}
          </h1>
          <p className="text-xs md:text-sm text-red-100 font-100 md:font-bold mb-5">
            {background}
          </p>
          <div className="text-sm font-bold">
            <div className="flex">
              <div className="w-1/2">
                <div>
                  <span className="text-gray-300 mr-3">Type :</span>
                  <span>{type}</span>
                </div>
                <div>
                  <span className="text-gray-300 mr-3">Premiered :</span>
                  <span>{season}</span>
                </div>
                <div>
                  <span className="text-gray-300 mr-3">Status :</span>
                  <span> {status}</span>
                </div>
                <div>
                  {anime.studios && anime.studios.length > 0 && (
                    <div>
                      <span className="text-gray-300 mr-3">Studio:</span>
                      <span> {anime.studios[0].name}</span>
                    </div>
                  )}
                </div>
                <div>
                  {anime.producers && anime.producers.length > 0 && (
                    <div>
                      <span className="text-gray-300 mr-3">Producers :</span>
                      <span>
                        {anime.producers.map((producer, index) => (
                          <div className=" inline" key={producer.mal_id}>
                            {index > 0 && ", "}
                            <a
                              href={producer.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs">
                              {producer.name}
                            </a>
                          </div>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <span className="text-gray-300 mr-3">Date aired :</span>
                  <span>{aired?.string}</span>
                </div>
                <div>
                  <span className="text-gray-300 mr-3">Rank :</span>
                  <span>{rank}</span>
                </div>
                <div>
                  <span className="text-gray-300 mr-3">Total ep : </span>
                  <span>{episodes}</span>
                </div>
                <div className=" inline">
                  <span className="text-gray-300 mr-3">Genres :</span>
                  <span>
                    {anime.genres &&
                      anime.genres.map((genre, index) => (
                        <div className=" inline" key={genre.mal_id}>
                          {index > 0 && ", "}
                          <a
                            href={genre.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs">
                            {genre.name}
                          </a>
                        </div>
                      ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mb-5">Trailer</div>
        <div className="mb-10">
          {trailer?.embed_url && (
            <iframe
              className="md:w-96 md:h-60"
              src={trailer.embed_url}
              title="Inline Frame Example"
              allow="accelerometer ; autoplay ; clipboard-white;encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimeItems;
