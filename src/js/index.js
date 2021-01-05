const cards = document.querySelectorAll('.item-card');
cards.forEach((card) => card.addEventListener("click", () => card.classList.toggle("do-flip")));