// DOM ELEMENTS

const emojies = document.querySelectorAll(".emoji");
const starsContainer = document.querySelector(".stars");
const stars = document.querySelectorAll(".fa-star");
stars[0].style.color = "yellow";

// Her bir emeojinin yerini deyisdirmek ucun foreach

emojies.forEach((el, i) => {
  el.style.transform = `translateX(${i * 300}%)`;
});

// Ulduza click olunarken emojilerin yeniden siralanmasi ucun funksiya

function goToEmoji(slide) {
  emojies.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
}

// Ulduzun renglenmesi ucun funksiya

function decorateStar(starNum) {
  stars.forEach((el, i) => {
    if (i <= starNum) {
      el.classList.add("yellowStar");
    } else {
      el.classList.remove("yellowStar");
    }
  });
}

// Ulduzlara click olunarken cagrilacaq funksiyalar (Ulduzlarin clicki parent elementinde tutulut)

starsContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("fa-star")) return;
  const clickedStar = e.target.dataset.num;
  goToEmoji(clickedStar);
  decorateStar(clickedStar);
});
