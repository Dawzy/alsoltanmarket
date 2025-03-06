import { aggregateProductNames } from "@/utils";

const Aisles = [
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

const Products = aggregateProductNames();

export {
  Aisles,
  Products
}