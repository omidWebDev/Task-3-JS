const showModalBtn = document.querySelector(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

function showModal() {
  backdrop.classList.remove("hidden");
  modal.classList.remove("hidden");
}
function closeModal() {
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
}

showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
