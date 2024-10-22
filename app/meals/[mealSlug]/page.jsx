import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { getMeal } from "@lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  return {
    title: meal.title,
    description: meal.description,
  };
}
const MealDetails = ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal?.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.Image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`malito:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;