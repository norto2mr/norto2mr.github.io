const katietwitter =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://twitter.com/katiednorton1"
  );
document.addEventListener("DOMContentLoaded", () => {
  fetch(katietwitter).then(function (response) {

      console.log(response);
      //var KFol = $('a[href="/KatieDNorton1/followers"]').firstElementChild.textContent;
      document.querySelector("#TwitterKatie").innerText = KFol;
  
  });
});

const jimtwitter =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://twitter.com/JimBMercer"
  );
document.addEventListener("DOMContentLoaded", () => {
  fetch(jimtwitter).then(function (response) {

      //console.log(responseText[0].followers_count);
      //var JFol = $('a[href="/JimBMercer/followers"]').firstElementChild.textContent;
      document.querySelector("#TwitterJim").innerText = JFol;

  });
});


