const url = "https://corsproxy.org/?" + encodeURIComponent("https://www.arinsights.com/architect-power-100/");
document.addEventListener("DOMContentLoaded", () => {
  fetch(url).then(function (response) {
    response.text().then(function (responseText) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(responseText, "text/html");
      
      const Katie = Array.from(doc.querySelectorAll(".col3"))
        .find((el) => el.textContent === "Katie Norton")
        .closest("section")
        .querySelector(".col1")
        .innerText;
      
      document.querySelector("#analystRankKatie").innerText = Katie;

      const Jim = Array.from(doc.querySelectorAll(".col3"))
        .find((el) => el.textContent === "Jim Mercer")
        .closest("section")
        .querySelector(".col1")
        .innerText;

      document.querySelector("#analystRankJim").innerText = Jim;
    });
  });
});
