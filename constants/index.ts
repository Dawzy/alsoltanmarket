import { aggregateProductNames } from "@/utils";

const AISLES = [
  "Dairy",
  "Snacks",
  "Drinks",
  "Toys",
  "Condiments",
  "Seasonings",
  "Canned",
  "Middle Eastern",
  "Beverages",
  "Juices",
  "Cheese",
  "Supplements",
  "Energy Boosters",
  "Bakery",
  "Breads",
  "Butter & Margarine",
  "Sparkling Drinks",
  "Iced Tea",
  "Protein Shakes",
  "Tea",
  "Cooking Essentials",
  "Yogurt",
  "Energy Drinks",
  "Soda",
  "Frozen Foods",
  "Baking",
  "Coconut Water",
  "Personal Care",
  "Sunscreen"
];

const PRODUCTS = aggregateProductNames();

const LIMITS = [
  10,
  15,
  20,
  30
];

export {
  AISLES,
  PRODUCTS,
  LIMITS
}