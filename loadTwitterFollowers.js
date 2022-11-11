const katietwitter =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=katiednorton1"
  );
document.addEventListener("DOMContentLoaded", () => {
  fetch(katietwitter).then(function (response) {
    response.json().then(function (responseText) {
      //console.log(responseText[0].followers_count);
      document.querySelector("#TwitterKatie").innerText = responseText[0].followers_count;
    });
  });
});

const jimtwitter =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=JimBMercer"
  );
document.addEventListener("DOMContentLoaded", () => {
  fetch(jimtwitter).then(function (response) {
    response.json().then(function (responseText) {
      //console.log(responseText[0].followers_count);
      document.querySelector("#TwitterJim").innerText = responseText[0].followers_count;
    });
  });
});
