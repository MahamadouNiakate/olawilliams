import React from "react";

class Profil extends React.Component {
  render() {
    return (
      <div>
        <img class="Portrait" src={this.props.url} alt="laToffe" />
      </div>
    );
  }
}

export default Profil;
