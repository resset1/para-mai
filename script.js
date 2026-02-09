// Seleccionamos los elementos
const modal = document.getElementById("loveModal");
const modalContent = document.getElementById("modalContent");
const openBtn = document.querySelector(".group.cursor-pointer"); // El sobre/sello

// Función para abrir
function openModal() {
  modal.classList.add("modal-active");
  setTimeout(() => {
    modalContent.classList.add("modal-show-content");
  }, 10);
}

// Función para cerrar
function closeModal() {
  modalContent.classList.remove("modal-show-content");
  setTimeout(() => {
    modal.classList.remove("modal-active");
  }, 300);
}

// Asignar el evento al sobre
if (openBtn) {
  openBtn.addEventListener("click", openModal);
}

// Cerrar si hacen click fuera del contenido blanco
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
