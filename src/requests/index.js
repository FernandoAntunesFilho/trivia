const getQuestions = () => {
  return fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((response) => response.json())
    // .then((data) => questions = data.results);
    .then((data) => data.results);
};

export default getQuestions;
