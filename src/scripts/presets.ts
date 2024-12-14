class preset {
  name: String;
  width: Number;
  length: Number;
  height: Number;
  weight: Number;

  constructor (
    name: String,
    width: Number,
    length: Number,
    height: Number,
    weight: Number){
      this.name = name;
      this.width = width;
      this.length = length;
      this.height = height;
      this.weight = weight;
  }
}

const presetArray: preset[] = [
  {name: "Конверт", width: 34, length: 27, height: 2, weight: 0.5} as preset,
  {name: "Короб XS", width: 17, length: 12, height: 9, weight: 0.5} as preset,
  {name: "Короб S", width: 23, length: 19, height: 10, weight: 2} as preset,
  {name: "Короб M", width: 33, length: 25, height: 15, weight: 5} as preset,
  {name: "Короб L", width: 31, length: 25, height: 38, weight: 12} as preset,
]

export function fillPresets(selectPresetElement: Element) {
  presetArray.forEach((value, index) => {
    selectPresetElement.innerHTML += `<option value="${index}">${value.name} ${value.width}x${value.length}x${value.height} см, до ${value.weight} кг</option>\n`;
  })
}
