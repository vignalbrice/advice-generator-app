const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

const fetchAdvices = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (response.ok) {
      const data = await response.json();
      adviceId.innerHTML = `Advice #${data.slip.id}`;
      advice.innerHTML = `<span>&#8220;</span>${data.slip.advice}<span>&#8221;</span>`;
    }
  } catch (err) {
    console.log(err);
  }
};
fetchAdvices();
setInterval(() => fetchAdvices(), 4000);

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAdvices();
});
