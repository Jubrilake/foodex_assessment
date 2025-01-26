import { foodone, foodthree, foodtwo } from "@/assets";

export interface CardItem {
  id: number;
  image: string;
  title: string;
  tag: string;
  picks: number;
  approx: number;
  opacity: number;
  loved: boolean;
}

export const cardItems: CardItem[] = [
  {
    id: 1,
    image: foodone,
    title: "Jollof with Green Sauce & Kpomo",
    tag: "🍲 Continental",
    picks: 120,
    approx: 3000,
    opacity: 1,
    loved: true,
  },
  {
    id: 2,
    image: foodthree,
    title: "Egg-cooked Fried Rice & Peas",
    tag: "🍲 Continental",
    picks: 90,
    approx: 2500,
    opacity: 0.3,
    loved: false,
  },
  {
    id: 3,
    image: foodone,
    title: "Shredded Roasted Chicken",
    tag: "🍲 Continental",
    picks: 130,
    approx: 3500,
    opacity: 0.3,
    loved: true,
  },
  {
    id: 4,
    image: foodone,
    title: "Neja Special Fried Rice with Shrimps",
    tag: "🍲 Continental",
    picks: 85,
    approx: 2800,
    opacity: 0.1,
    loved: false,
  },
  {
    id: 5,
    image: foodthree,
    title: "Souse Fries & Bacon",
    tag: "🍲 Continental",
    picks: 110,
    approx: 2000,
    opacity: 1,
    loved: false,
  },
  {
    id: 6,
    image: foodtwo,
    title: "Garnished Beef Kebab",
    tag: "🍲 Continental",
    picks: 140,
    approx: 3200,
    opacity: 0.2,
    loved: true,
  },
  
];
