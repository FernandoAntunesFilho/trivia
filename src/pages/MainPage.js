import React from "react";
import getQuestions from "../requests/";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  async componentDidMount() {
    const questions = await getQuestions();
    this.setState({ questions });
  }

  render() {
    return <h1>MainPage</h1>;
  }
}

export default MainPage;
