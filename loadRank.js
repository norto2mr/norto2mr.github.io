const url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://www.arinsights.com/architect-power-100/");
document.addEventListener("DOMContentLoaded", () => {
  fetch(url).then(function (response) {
    response.text().then(function (responseText) {
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(responseText, "text/html");

      const Katie = Array.from(doc.querySelectorAll(".col3"))
        .find((el) => el.textContent === "Katie Norton")
        .closest("section")
        .querySelector(".col1").innerText;
      const Jim = Array.from(doc.querySelectorAll(".col3"))
        .find((el) => el.textContent === "Jim Mercer")
        .closest("section")
        .querySelector(".col1").innerText;

      document.querySelector("#katie").innerText = Katie;
      document.querySelector("#jim").innerText = Jim;
    });
  });
});
