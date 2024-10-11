const translate = require("translate-google");

const sentenceTotranslate = [
  {
    sentence: "La formation Le Reacteur est trop quali !",
    langageOrigine: "fr",
    langageTranslate: "de",
  },
];
// console.log(sentenceTotranslate);

translate(sentenceTotranslate[0], {
  from: sentenceTotranslate.langageOrigine,
  to: sentenceTotranslate.langageTranslate,
})
  .then((response) => {
    console.log(response.sentence);
  })
  .catch((error) => {
    console.error(error.message);
  });
