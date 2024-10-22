"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const MealFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "submitting..." : "Share Meal"}
    </button>
  );
};

export default MealFormSubmit;
