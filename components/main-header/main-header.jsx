"use client";
import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./navlink";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <img src={logoImg.src} alt="img alt" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink link={"/meals"}>Browse Meal</Navlink>
            </li>
            <li>
              <Navlink link={"/community"}> Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
