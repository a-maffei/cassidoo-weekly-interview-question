/* This week’s question (thanks Tom!):
If you mix up the order of letters in a word, many people can slitl raed and urenadnstd tehm. Write a function that takes an input sentence, and mixes up the insides of words (anything longer than 3 letters).

Example:

> scramble(["A quick brown fox jumped over the lazy dog."])
> "A qciuk bwron fox jmepud oevr the lzay dog." */

const scramble = (s) => {
  return s[0]
    .split(" ")
    .map((el) => {
      if (
        (el.slice(-1) === "." && el.length > 4) ||
        (el.slice(-1) !== "." && el.length > 3)
      ) {
        let word = el.split("");
        for (i = word.length - 2; i > 1; i--) {
          const j = Math.ceil(Math.random() * i);
          const currentLetter = word[i];
          const swappedLetter = word[j];
          word[j] = currentLetter;
          word[i] = swappedLetter;
        }

        return word.join("");
      }
      return el;
    })
    .join(" ");
};

scramble(["A quick brown fox jumped over the lazy dog."]);
