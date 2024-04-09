import React from "react";
import Link from "next/link";
import { useInfo } from "../../../hook/useInfo";

const games = [{ name: "snake" }, { name: "memory" }, { name: "runner" }];

const Header = () => {
  const mainInfo = useInfo();

  const handleClick = (text: string) => {
    mainInfo?.setText(text);
  };

  return (
    <div className="p-4 bg-neutral text-neutral-content">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-center items-center">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div className="flex-1 uppercase">
              <h1>{mainInfo?.text}</h1>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-2xl text-dark uppercase">
            <li>
              <Link href={"/"} onClick={() => handleClick("main page")}>
                main page
              </Link>
            </li>
            {games.map((game) => (
              <li key={game.name}>
                <Link
                  href={`/${game.name}`}
                  onClick={() => handleClick(game.name)}
                >
                  {game.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
