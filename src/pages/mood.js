import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import Typewriter from 'typewriter-effect';
import { useSession } from "next-auth/react";
import Wrapper from "@/components/wrapper";

export default function Mood() {
  const { data: session} = useSession();
  const [loading,setLoading] = useState(false);
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch(`/api/gemini?mood=${encodeURIComponent(mood)}`, {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponse(data) // Handle the response data here, such as updating state or displaying it on the page
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  useEffect(() => {
    if (response && !session) {

      //request anilist graphql api to get anime data
      console.log(response.tags)
      const query = `
      query Q {
        Page(perPage: 32) {
          media(sort: TRENDING_DESC type: ANIME tag:"${response.tags}" genre:"${response.genre}" ) {
            id
            title {
              romaji
              english
              userPreferred
            }
            description
            genres
            format
            duration
            episodes
            bannerImage
            episodes
            meanScore
            externalLinks {
              id
              url
              icon
              color
              type     
            }
            coverImage {
              large
              extraLarge
            }
          }
        }
      }
      `;

      fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
   //       Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: query,
        }),
      })  
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.Page.media)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    if (response && session) {

      //request anilist graphql api to get anime data
      console.log(response.tags)
      const accessToken = session.user.token;
      const query = `
      query Q {
        Page(perPage: 32) {
          media(sort: TRENDING_DESC type: ANIME tag:"${response.tags}" genre:"${response.genre}" onList:false ) {
            id
            title {
              romaji
              english
              userPreferred
            }
            description
            genres
            format
            duration
            episodes
            bannerImage
            episodes
            meanScore
            externalLinks {
              id
              url
              icon
              color
              type     
            }
            coverImage {
              large
              extraLarge
            }
          }
        }
      }
      `;

      fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: query,
        }),
      })  
      .then((response) => response.json())
      .then((data) => {

        setData(data.data.Page.media)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [response,session]);

  return (
    <Wrapper>
    <main
      className={`bg-primary flex min-h-screen flex-col items-center z-10 justify-between p-4 `}
    >
      <div className="flex flex-col w-full items-center justify-between font-mono text-sm  space-y-4">
        <span className="  text-5xl animood pb-6 pt-2 ">
          Animood
        </span>

        <div className="font-bold text-5xl w-full mx-auto justify-center flex">
            <mark className="inline-block px-2 pb-[14px] text-white bg-action leading-[0.125em]">
              I want to Feel Like
            </mark>

        </div>

        <form onSubmit={handleSubmit} className="flex  items-center justify-center relative w-[50%]">
          
      <input 
        type="text" 
        name="mood" 
        placeholder="Enter your mood" 
        value={mood} 
        className="w-full px-4 py-2.5 outline-none text-gray-400 rounded-l-lg"
        onChange={handleMoodChange} 
      />
      <button type="submit">
        <div className="w-10 h-10 outline-none bg-action rounded-r-lg text-white grid place-items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></path><path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></path></g></svg>
        </div>
      </button>
    </form>

{loading &&(
    <div className="grid place-items-center text-xl text-white">
    <Typewriter
      options={{
        strings: ['Summoning Onii-chan...', 'Fetching data...'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
)}

{data && data.length > 0 && (
  <div className="flex flex-col w-[100%] overflow-hidden ">
    <div className="grid grid-cols-8  w-full  snap-x   overflow-x-hidden py-4 px-3 gap-2 justify-center font-sans transition-all duration-300 ">
      {data.map((anime) => (
        
<Card anime={anime} key={anime.id} />
      ))}
    </div>


  </div>
)}

     </div>

     <div style={{ filter:'blur(100px)'}} className="w-[550px] h-[550px] bg-action rounded-full translate-y-1/2 -z-[1] fixed bottom-0">

     </div>
    </main>
    </Wrapper>
  );
}

/*
    <div className="flex w-full snap-x  overflow-x-hidden py-4 px-3 gap-2 justify-center font-sans transition-all duration-300 ">
      {data.slice(9,17).map((anime) => (
        
<Card anime={anime} key={anime.id} />
      ))}
    </div>
*/