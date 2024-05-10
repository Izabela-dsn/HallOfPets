const btnOpenModal = document.querySelector("#btnModal")
const modal = document.querySelector(".modal")
const btnCloseModal = document.querySelector(".close")
const inputName = document.querySelector("#namePet")
const inputAge = document.querySelector("#age")
const inputPhoto = document.querySelector("#photo")
const btnSaveInfos = document.querySelector("#btnForm")
const sectionPets = document.querySelector("#pet")

// open and close modal
btnOpenModal.addEventListener("click", () => {
  modal.showModal()
})

btnCloseModal.addEventListener("click", () => {
  modal.close()
})

// save information
const saveInfos = () => {
  const name = inputName.value
  const age = inputAge.value
  const photo = inputPhoto.files[0]

  return { name, age, photo }
}

// create new card
const createCard = ({ name, age, photo }) => {
  const card = document.createElement("div")
  card.setAttribute("id", "card")

  const img = document.createElement("img")

  const reader = new FileReader()
  reader.onload = function (e) {
    img.src = e.target.result
  }
  reader.readAsDataURL(photo)

  const info = document.createElement("div")
  info.setAttribute("class", "infoAboutPet")
  const spanName = document.createElement("span")
  spanName.setAttribute("id", "name")
  const spanAge = document.createElement("span")
  spanAge.setAttribute("id", "yearsOld")

  spanName.innerText = name
  spanAge.innerText = age

  card.append(img)
  card.appendChild(info)
  info.appendChild(spanName)
  info.appendChild(spanAge)

  sectionPets.append(card)
}

const resetInputs = () => {
  inputName.value = ""
  inputPhoto.value = ""
  inputAge.value = ""
}

btnSaveInfos.addEventListener("click", (e) => {
  e.preventDefault()
  createCard(saveInfos())
  resetInputs()
  modal.close()
})
