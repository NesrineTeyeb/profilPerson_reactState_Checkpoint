import React, { Component } from "react";
import './person.css'

export class Person extends Component {
  //Constuctor de la classe pour iinitialiser le state
  constructor(props) {
    //appelle de la classe parente (Component)
    super(props);
    //Initialisation du state
    this.state = {
      // objet person
      person: {
        fullName: "Nesrine Teyeb",
        bio: "Développeur Web Fullstack",
        imageSrc: "/userImage.jpg",
        profession: "Développeur Web Fullstack React Node.js",
      },
      //booleen pour controler l'affichage de la carte
      show: false,
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          timer: this.state.timer + 1,
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toogleShowHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="person">
        {this.state.show && (
          <div className="profile-card">
            <h1> {this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
            <img
              src={this.state.person.imageSrc}
              alt={this.state.person.fullName}
            ></img>
          </div>
        )}
        <button onClick={this.toogleShowHandler}>
          {this.state.show ? "Hide Profil" : "Show Profile"}
        </button>
        <p className="timer">Le temps écoulé est de {this.state.timer}second </p>
      </div>
    );
  }
}

export default Person;
