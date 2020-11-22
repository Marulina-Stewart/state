import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDB8poaKDQLN9vmL7a1_YtmgAFD2hsiZuAzQ&usqp=CAU",
    fullNname: "Marulina Stewart",
    profession: "Web developer",
    bio: "IT engineer",
    isLoading: true,
    otherLoding: true,
  };

  handleShow = () => this.setState({ isShow: !this.state.isShow });
  componentDidMount() {
    setInterval(() => this.setState({ isLoading: false }), 2500);
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading......</h1>;
      {
      }
    }

    return (
      <div>
        <h1 className="my-profile"> My profile</h1>
        <button
          class="btn btn-primary btn-lg"
          onClick={() => this.handleShow()}
        >
          {" "}
          {this.state.isShow ? "Hide" : "Show"}{" "}
        </button>
        {this.state.isShow ? (
          <div>
            <img
              className="avatar"
              src={this.state.imgSrc}
              width="350"
              height="350"
            />
            <div className="user-card">
              <h2> FullName : {this.state.name}</h2>
              <h2> Profession : {this.state.profession}</h2>
              <h2> Bio: {this.state.bio} </h2>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
