import { aggregateAisleNames } from "@/utils";

const AISLES = aggregateAisleNames();
const LIMITS = [10, 15, 20, 30];

const PARAMS = {
  "AISLE": "aisle",
  "TERM": "term",
  "LIMIT": "limit"
}

export {
  AISLES,
  LIMITS,
  PARAMS
}