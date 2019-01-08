import React from "react";
import ReactDOM from "react-dom";
import Geosuggest from "react-geosuggest";
import "./index.css";

export default class App extends React.Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
    console.log(suggest.gmaps.address_components.slice(-1)[0].long_name);
  }

  render() {
    return (
      <div>
        <h1>Where to?</h1>
        <Geosuggest
          onSuggestSelect={this.onSuggestSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
