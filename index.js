const translate = require("translate-google");

translate("La formation Le Reacteur est trop quali !", { from: "fr", to: "en" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
translate("JavaScript is the best programming langage in the universe", {
  from: "en",
  to: "pt",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
translate(
  "La vision sans l'action est un rêve. L'action sans vision est un cauchemar.",
  { from: "fr", to: "ja" }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
translate("Pero amo un burro que me lleva, que caballo que me derriba.", {
  from: "es",
  to: "ru",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
