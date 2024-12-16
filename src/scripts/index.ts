import { fillPresets, presetArray, preset } from "./presets"
import { requestModel } from "./requestModel"
import { api } from "./api"
const presetListSelector: Element = document.querySelector(".about__preset")
const calculateButtonSelector: Element = document.querySelector(".button-calculate")
const requestForm: HTMLFormElement = document.querySelector("#reqForm")


const _api = new api(new URL("http://127.0.0.1:8081/api/delivery"));

function calculateHandler(){
  console.log(requestForm["to"].value);
  console.log(requestForm["from"].value);
  console.log(requestForm["preset"].value);
  const request = new requestModel(requestForm.to.value, requestForm.from.value, presetArray[requestForm.preset.value]);
  //console.log(new URLSearchParams(JSON.stringify(request)).toString())
  _api.calculatePrice(request).catch(console.log).then(console.log);
}


fillPresets(presetListSelector)
console.log(calculateButtonSelector)

calculateButtonSelector.addEventListener("click", calculateHandler);
