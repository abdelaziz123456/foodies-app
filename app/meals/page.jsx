import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@components/meals/meals-grid";
import { getMeals } from "@lib/meals";
import MealsLoading from "./loading";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shaerd by our vibrant community .",
};

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. it is easy</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
