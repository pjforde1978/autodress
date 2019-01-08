import React from "react";
import ReactDOM from "react-dom";
import Geosuggest from "react-geosuggest";
import "./index.css";

class App extends React.Component {
  /**
   * Render the example app
   */
  render() {
    const google = window.google;
    return (
      <div>
        <h1>Where to?</h1>
        <Geosuggest
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(43.5888128, -79.5492352)}
          radius="20"
        />
      </div>
    );
  }

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect(suggest) {
    console.log(suggest);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
