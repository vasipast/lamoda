export const FILTERS = Object.freeze(["По цвету", "По категории"]);
export const COLORS = Object.freeze([
  { color: "Красный" },
  { color: "Желтый" },
  { color: "Зеленый" },
  { color: "Синий" },
  { color: "Фиолетовый" },
]);
export const CATEGORY = Object.freeze([
  "Майки",
  "Джинсы",
  "Куртки",
  "Аксессуары",
  "Кроссовки",
  "Рубашки",
  "Шорты",
  "Платья",
  "Белье",
  "Брюки",
]);

export const IMAGES = [];
for (let i = 1; i <= 10; i++) {
  IMAGES.push(require(`../../public/images/${i}.png`));
}
