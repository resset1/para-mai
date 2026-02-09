function toggleNote(element) {
  // Si la nota ya está abierta, la cerramos
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    // Cerramos cualquier otra nota abierta primero
    document.querySelectorAll(".note-card").forEach((note) => {
      note.classList.remove("active");
    });
    // Abrimos la nota actual
    element.classList.add("active");
  }
}

// Cerrar notas si se hace click fuera de ellas
document.addEventListener("click", function (event) {
  if (!event.target.closest(".note-card")) {
    document.querySelectorAll(".note-card").forEach((note) => {
      note.classList.remove("active");
    });
  }
});
