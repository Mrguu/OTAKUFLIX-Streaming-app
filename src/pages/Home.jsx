import React from "react";
import homebg from "../image/homebg.png";
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import telegram from "../image/telegram.png";
import discord from "../image/discord.png";
import whatapp from "../image/whatapp.png";

function Home() {
  return (
    <div className="bg-slate-950 w-full py-6 px-5 md:px-20 z-[-1]">
      <div className="flex flex-col items-center justify-center">
        <img src={homebg} alt="" className="h-60 w-full" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-red-700 mb-5 text-2xl font-bold md:w-1/2 text-center mt-10">
            Welcome to OtakuFlix - Your Ultimate Anime Streaming Destination
          </h1>
          <p className="text-gray-500 font-bold text-sm md:w-1/2 text-center">
            Are you ready to embark on a thrilling journey into the world of
            anime? Look no further than OtakuFlix, your go-to platform for the
            latest and greatest anime shows, movies, and much more. Immerse
            yourself in a world of captivating stories, vibrant characters, and
            epic adventures. With a vast collection and user-friendly features,
            OtakuFlix is designed to cater to all your anime cravings.
          </p>
        </div>
        <div className="flex flex-col items-start  justify-center mt-5">
          <h1 className="text-red-700 text-xl font-bold my-3">
            What Awaits You:
          </h1>
          <div>
            <ul className="text-xs text-gray-500">
              <li>
                <span className="text-md font-bold text-gray-400 mr-5">
                  Latest Releases:{" "}
                </span>
                Explore trending titles that are making waves in the anime
                world.
              </li>
              <li>
                <span className="text-md font-bold text-gray-400 mr-5">
                  Personalized Picks:{" "}
                </span>{" "}
                Let our recommendations introduce you to new favorites.
              </li>
              <li>
                <span className="text-md font-bold text-gray-400 mr-5">
                  Connect with Fans:
                </span>
                Join a vibrant community of fellow anime enthusiasts.
              </li>
              <li>
                <span className="text-md font-bold text-gray-400 mr-5">
                  Easy Streaming:{" "}
                </span>{" "}
                Watch on any device, anytime, anywhere.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <h1 className="text-red-700 mb-5 text-xl font-bold">
            Start Watching Now!
          </h1>
          <p className="text-gray-500 font-bold text-sm">
            Embark on your anime journey today. Sign up and dive into the
            extraordinary world of anime with OtakuFlix.
          </p>
        </div>
        <div className="flex mt-5 flex-wrap justify-center">
          <button className="flex bg-sky-600 px-3 py-1 rounded-md mr-5 mt-3 hover:scale-105">
            <img src={facebook} alt="" className="w-4 h-4 mr-2" />
            <p className="text-gray-100 font-bold text-xs">11.2k</p>
          </button>
          <button className="flex bg-sky-400 px-3 py-1 rounded-md mr-5 mt-3 hover:scale-105">
            <img src={twitter} alt="" className="w-4 h-4 mr-2" />
            <p className="text-gray-100 font-bold text-xs">10.7k</p>
          </button>
          <button className="flex bg-sky-500 px-3 py-1 rounded-md mr-5 mt-3 hover:scale-105">
            <img src={telegram} alt="" className="w-4 h-4 mr-2" />
            <p className="text-gray-100 font-bold text-xs">8.3k</p>
          </button>
          <button className="flex bg-sky-500 px-3 py-1 rounded-md mr-5 mt-3 hover:scale-105">
            <img src={discord} alt="" className="w-4 h-4 mr-2" />
            <p className="text-gray-100 font-bold text-xs">5.1k</p>
          </button>
          <button className="flex bg-green-600 px-3 py-1 rounded-md mr-5 mt-3 hover:scale-105">
            <img src={whatapp} alt="" className="w-4 h-4 mr-2" />
            <p className="text-gray-100 font-bold text-xs">1k</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
