import { fillPresets, presetArray, preset } from "./presets"
import { requestModel } from "./requestModel"
import { api } from "./api"
const presetListSelector: Element = document.querySelector(".about__preset")
const calculateButtonSelector: Element = document.querySelector(".button-calculate")
const requestForm: HTMLFormElement = document.querySelector("#reqForm")


const _api = new api(new URL("http://127.0.0.1:8010/api/delivery"));

function presetListSelectorHandler(event: Event) {
  const customFieldsetSelector = document.querySelector(".custom__fieldset");
  if (requestForm.preset.value === "custom") {
    customFieldsetSelector.classList.remove("hidden")
  } else {
    customFieldsetSelector.classList.add("hidden")
  }
}

function simpleValidation(): HTMLElement {
  if (requestForm.from.value == "") return requestForm.from
  if (requestForm.to.value == "") return requestForm.to
  if (requestForm.preset.value == "") return requestForm.preset
  if (requestForm.preset.value == "custom") {
    if (requestForm.len.value == "") return requestForm.len
    if (requestForm.width.value == "") return requestForm.width
    if (requestForm.depth.value == "") return requestForm.depth
    if (requestForm.weight.value == "") return requestForm.weight
  }
}

function showMessage(msg: string) {
  const messageElement = document.querySelector(".result")
  messageElement.classList.remove("hidden");
  messageElement.textContent = msg;
  messageElement.scrollIntoView();
}

function calculateHandler(){
  const errorElement = simpleValidation()

  if (errorElement) {
    console.log(errorElement.id);
    showMessage(`Не заполнено поле ${errorElement.id}`);
    return;
  }

  let request = undefined;
  if (requestForm.preset.value == "custom") {
    request = {
      width: requestForm.width.value,
      depth: requestForm.depth.value,
      height: requestForm.len.value,
      weight: requestForm.weight.value,
      from: requestForm.from.value,
      to: requestForm.to.value,
      isStrict: true
    } as requestModel
  } else {
    request = new requestModel(requestForm.to.value, requestForm.from.value, presetArray[requestForm.preset.value]);
  }


  _api.calculatePrice(request)
  .then((res) => {
    console.log(res)
    showMessage(`Рассчётная стоимость: ${res} р.`);
  })
  .catch(showMessage)
}


fillPresets(presetListSelector)
calculateButtonSelector.addEventListener("click", calculateHandler);
presetListSelector.addEventListener("change", presetListSelectorHandler)
