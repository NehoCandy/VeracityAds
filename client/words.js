const { default: axios } = require("axios");

async function addWord(word_string, document_id) {
  const res = await axios.post("http://localhost:3000/words/add-word", {
    word_string: word_string,
    document_id: document_id,
  });
}

async function findWord(wordToFind) {
  const res = await axios.get("http://localhost:3000/words/find-word", {
    params: { word_to_find: wordToFind },
  });
  if (res.data) {
    let uniq = new Set();
    res.data.forEach((element) => {
      uniq.add(element.document_id);
    });

    console.log([...uniq]);
  }
}

async function findWords(wordsToFind) {
  const res = await axios.get("http://localhost:3000/words/find-words", {
    params: { words_to_find: wordsToFind },
  });
  if (res.data) {
    let uniq = new Set();
    res.data.forEach((element) => {
      uniq.add(element.document_id);
    });

    console.log([...uniq]);
  }
}

// BEGINNING OF THE PROGRAM //
const myArgs = process.argv.slice(2);

if (myArgs[0] === "addWord") addWord(myArgs[1], myArgs[2]);
else if (myArgs[0] === "findWord") findWord(myArgs[1]);
else if (myArgs[0] === "findWords") {
  const wordsToFind = myArgs.splice(1);
  findWords(wordsToFind);
}
