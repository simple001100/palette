import { dataDancing } from "./dataDancing";
import { dataFoto } from "./dataFoto";
import { dataSong } from "./dataSong";
import { dataTheatre } from "./dataTheatre";
import { dataResults } from "./dataResults";

export const gallery = [
  { name: "Студенческий листопад", data: dataSong, interval: 5000 },
  { name: "Танцы 100%", data: dataDancing, interval: 4000 },
  { name: "Театр+", data: dataTheatre, interval: 3550 },
  { name: "Фотоконкурс", data: dataFoto, interval: 2600 },
];

export const result = [
  { name: "Награждение победителей", data: dataResults, interval: 2600 },
];
