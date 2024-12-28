export const points = [
  "Москва, Черноморский бульвар 4к3",
  "Москва, Тверская 4",
  "Москва, Верхняя Радищевская улица 13с3",
  "Москва, Волгоградский проспект, 59",
  "Москва, Волоколамское шоссе, 71к4",
  "Москва, Костромская улица, 20",
  "Московская область, Мытищи, Станционная улица 7",
  "Московская область, Химки, Московская улица 3",
  "Московская область, Реутов, улица Октября вл10",
  "Московская область, Одинцово, Привокзальная площадь 1А",
  "Московская область, Королёв, улица Грабина 10А",
]

export function fillPoints(selectPointElement: Element) {
  points.forEach((value) => {
    selectPointElement.innerHTML += `<option>${value}</option>\n`
  })
}