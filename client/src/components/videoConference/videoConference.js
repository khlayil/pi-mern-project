import React, { Component }
  from "react";

class VideoConference extends Component {

  constructor(props) {
    super (props);
    const script = document.createElement("script");

    script.src = "/home/khlayil/Documents/work/pi/MERN-PIDEV/client/public/js/videoConference.js";
    script.async = true;
    console.log("test happened hourayyy ........");

    document.body.appendChild(script);
    this.state = {

    };

  };



  render() {

    return (

      <div className="ui container">
        <h1 className="ui header">open a video chat conference</h1>
        <hr />
        <div className="ui two column stackable grid">
          <div className="ui ten wide column">
            <div className="ui segment">
              {/* Chat Room Form */}
              <div className="ui form">
                <div className="fields">
                  <div className="field">
                    <label>User Name</label>
                    <input type="text" placeholder="Enter user name" id="username" name="username" />
                  </div>
                  <div className="field">
                    <label>Room</label>
                    <input type="text" placeholder="Enter room name" id="roomName" name="roomName" />
                  </div>
                </div>
                <br />
                <div className="ui buttons">
                  <div id="create-btn" className="ui submit blue button">Create Room</div>
                  <div className="or" />
                  <div id="join-btn" className="ui submit youtube button">Join Room</div>
                </div>
              </div>
              {/* Chat Room Messages */}
              <div id="chat" />
            </div>
          </div>
          {/* Local Camera */}
          <div className="ui six wide column">
            <img id="local-image" className="ui large image" src="images/image.png" />
            <video id="local-video" className="ui large image" autoPlay />
            <h4 className="ui center aligned header" style={{margin: 0}}>
              Local Camera
            </h4>
          </div>
        </div>
        {/* Remote Cameras */}
        <h3 className="ui center aligned header">Remote Cameras</h3>
        <div id="remote-videos" className="ui stackable grid">
          <div className="four wide column">
            <img className="ui centered medium image" src="images/image.png" />
          </div>
          <div className="four wide column">
            <img className="ui centered medium image" src="images/image.png" />
          </div>
          <div className="four wide column">
            <img className="ui centered medium image" src="images/image.png" />
          </div>
          <div className="four wide column">
            <img className="ui centered medium image" src="images/image.png" />
          </div>
        </div>
      </div>


    )
  }

}
;
export default VideoConference;



