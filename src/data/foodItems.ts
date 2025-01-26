import { foodone, foodthree, foodtwo } from "@/assets";

// src/data/foodItems.ts

export interface FoodItem {
  title: string;
  image: string;
  tag: string;
  picks: number;
  approx: number;
}

export const foodItems: FoodItem[] = [
  {
    title: "Jollof with Green Sauce & Kpomo",
    image: foodone, // Replace URL with the imported asset
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Egg-cooked Fried Rice & Peas",
    image: foodthree, // Replace URL with the imported asset
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Shredded Roasted Chicken",
    image: foodthree, // Replace URL with the imported asset
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Neja Special Fried Rice with Shrimps",
    image: foodone, // Replace URL with the imported asset
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Souse Fries & Bacon",
    image: foodone, // Reuse an asset if needed
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Souse Fries & Bacon",
    image: foodtwo, // Reuse an asset if needed
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
  {
    title: "Souse Fries & Bacon",
    image: foodthree, // Reuse an asset if needed
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
  },
];
