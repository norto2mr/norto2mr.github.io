const url = "https://corsproxy.org/?" + encodeURIComponent("https://www.arinsights.com/architect-power-100/");
const response = await fetch(url);
const html = await response.text();

function loadRanks(html) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(responseText, "text/html");

  const Katie = Array.from(doc.querySelectorAll(".col3"))
    .find((el) => el.textContent === "Katie Norton")
    .closest("section")
    .querySelector(".col1")
    .innerText;
  
  const Jim = Array.from(doc.querySelectorAll(".col3"))
    .find((el) => el.textContent === "Jim Mercer")
    .innerText;

  document.querySelector("#analystRankKatie").innerText = Katie;
  document.querySelector("#analystRankJim").innerText = Jim;
}

document.addEventListener("DOMContentLoaded", () => {
  loadRanks(html);
});
