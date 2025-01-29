import { Plan } from "../data/plans";

export const planos: Plan[] = [
  {
    id: 0,
    name: "Free",
    price: 0,
    features: ["feature 1", "feature 2"],
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    id: 1,
    name: "Advanced",
    price: 4,
    features: ["feature 1", "feature 2", "feature 3", "feature 4"],
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    id: 2,
    name: "Premium",
    price: 9,

    features: [
      "feature 1",
      "feature 2",
      "feature 3",
      "feature 4",
      "feature 5",
      "feature 6",
    ],
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];
