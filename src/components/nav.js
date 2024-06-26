import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  return (
    <>
      <nav className=" flex border-r-white  items-center bg-secondary/50 z-50 backdrop-blur-xl w-full fixed top-0 left-0   gap-4 p-2 text-left">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className={` absolute top-full z-50 -left-1 hidden lg:block `}
        >
          <ul className="w-[72px] bg-secondary/50 p-1 gap-2 flex flex-col items-center font-medium  h-screen  text-sm card text-white  py-2 transition-all duration-300">
            <Link href="/mood">
              <li className="hover:bg-primary w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-l-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75em"
                  height="1.75em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75a.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25a.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"
                  ></path>
                </svg>
                Mood
              </li>
            </Link>

            <Link href="/anilist">
              <li className="hover:bg-primary w-[68px] relative p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-l-4 ">
                <span className="absolute top-1 right-2 rounded-full bg-action px-1.5 py-0.5 text-xs">β</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75em"
                  height="1.75em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96l-1.69-5.014l-1.541 5.015h3.23z"
                  ></path>
                </svg>
                AL
              </li>
            </Link>

            <Link href="/history">
              <li className="hover:bg-primary relative text-center w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-l-4 ">
              <span className="absolute top-1 right-2 rounded-full bg-action px-1.5 py-0.5 text-xs">β</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75em"
                  height="1.75em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  >
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></path>
                    <path stroke-linejoin="round" d="M12 9v4h4"></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke-dasharray=".5 3.5"
                    ></circle>
                  </g>
                </svg>
                History
              </li>
            </Link>

            <Link href="/faq">
              <li className="hover:bg-primary w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-l-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75em"
                  height="1.75em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m.05 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m.1-14.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.937t.75-.788q.575-.55.988-1.2t.412-1.45q0-1.275-1.037-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.112.638t.337.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2"
                  ></path>
                </svg>
                FAQ
              </li>
            </Link>
          </ul>
        </motion.div>

        <span className="text-3xl px-2  animood  select-none">
          <Link href="/">Animood</Link>
        </span>

        <div className="gap-2 absolute right-2  flex ">
        <div className="w-[2.125rem] h-[2.125rem]  rounded-md border-action border-2 text-white text-xl grid place-items-center bg-primary">
  <Link href="https://discord.com/invite/X9VejqEG2Z" target="_blank" title="GitHub">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.29em" height="1em" viewBox="0 0 256 199"><path fill="#5865F2" d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18"></path></svg>
  </Link>
</div>
        <div className="w-[2.125rem] h-[2.125rem] rounded-md border-action border-2 text-white text-2xl grid place-items-center bg-primary">
  <Link href="https://producthunt.com/posts/animood" target="_blank" title="Upvote Product Hunt">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="logosProducthunt0" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DA552F"></stop>
          <stop offset="100%" stopColor="#D04B25"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#logosProducthunt0)" d="M128 256c70.694 0 128-57.306 128-128S198.694 0 128 0S0 57.306 0 128s57.306 128 128 128"></path>
        <path fill="#FFF" d="M96 76.8v102.4h19.2v-32h29.056c19.296-.512 34.944-16.16 34.944-35.2c0-19.552-15.648-35.2-34.944-35.2zm48.493 51.2H115.2V96h29.293c8.563 0 15.507 7.168 15.507 16s-6.944 16-15.507 16"></path>
      </g>
    </svg>
  </Link>
</div>

<div className="w-[2.125rem] h-[2.125rem] rounded-md border-action border-2 text-white text-2xl grid place-items-center bg-primary">
  <Link href="https://github.com/LiReNa00/Animood" target="_blank" title="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      ></path>
    </svg>
  </Link>
</div>

          {session ? (
            <div className="w-[2.125rem] h-[2.125rem] flex flex-col items-center group ">
              <button
                type="button"
                onClick={() => router.push(`/profile/${session?.user.name}`)}
                className="rounded-md border-action border-2 bg-primary overflow-hidden"
              >
                <Image
                  src={session?.user.image.medium}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </button>
              <ul className="bg-secondary/50 absolute text-sm z-50 w-36 right-0 text-left top-10 text-gray-300 shadow-2xl opacity-0  py-2 rounded  font-light invisible group-hover:visible group-hover:opacity-100 duration-300 transition-all grid  gap-1">
                <li className="hover:bg-primary  transition-all duration-120 border-action hover:border-l-4 ">
                  <button
                    type="button"
                    className=" w-full h-full p-2"
                    onClick={() => signOut("AniListProvider")}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => signIn("AniListProvider")}
              title="Login With AniList"
              className="px-2 bg-action text-white  right-2   rounded-md overflow-hidden"
            >
              Login
            </button>
          )}
        </div>
      </nav>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={` fixed top-auto z-50 backdrop-blur-lg  bottom-0 w-full block lg:hidden `}
      >
        <ul className=" bg-secondary/50 p-1 px-4  gap-2 flex justify-between items-center font-medium h-[72px] text-sm card text-white  py-2 transition-all duration-300">
          <Link href="/">
            <li className="hover:bg-primary w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-b-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
                ></path>
              </svg>
              Home
            </li>
          </Link>

          <Link href="/anilist">
            <li className="hover:bg-primary relative w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-b-4 ">
            <span className="absolute top-1 right-2 rounded-full bg-action px-1.5 py-0.5 text-xs">β</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96l-1.69-5.014l-1.541 5.015h3.23z"
                ></path>
              </svg>
              AL
            </li>
          </Link>

          <Link href="/history">
            <li className="hover:bg-primary relative  text-center w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-b-4 ">
            <span className="absolute top-1 right-2 rounded-full bg-action px-1.5 py-0.5 text-xs">β</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></path>
                  <path stroke-linejoin="round" d="M12 9v4h4"></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke-dasharray=".5 3.5"
                  ></circle>
                </g>
              </svg>
              
              History
            </li>
          </Link>

          <Link href="/faq">
            <li className="hover:bg-primary  w-[68px] p-2 mx-auto flex flex-col gap-2 items-center text-white transition-all duration-120 border-action hover:border-b-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m.05 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m.1-14.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.937t.75-.788q.575-.55.988-1.2t.412-1.45q0-1.275-1.037-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.112.638t.337.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2"
                ></path>
              </svg>
              FAQ
            </li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
}
