import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //This is the best place to create State
    this.state = {
      userInfo: {
        name: "Dummy name",
        id: "Dummy id",
        avatar_url: "Dummy avatar",
      },
    };
    console.log("connstructor");
  }

  async componentDidMount() {
    //This is the best place we make an API call
    const data = await fetch("https://api.github.com/users/sam-0905");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("userInfo", json);
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // We can also destructure it
    // const {count} = this.state;
    const { userInfo } = this.state;

    console.log("render");

    return (
      <div>
        <h1>This is a Class Based Component.Test2</h1>
        <img src={userInfo?.avatar_url} alt="profile photo" />
        <h2>Name:{userInfo?.name}</h2>
        <h2>id:{userInfo?.id}</h2>
      </div>
    );
  }
}

export default Profile;
