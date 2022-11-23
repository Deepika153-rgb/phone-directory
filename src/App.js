import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <Header/>
        <button>Add</button>
        <div>
          <span> Name </span><br/>
          <span>Phone</span>
        </div>

        {/* <label htmlfor="name" >Name:</label>
        <input id="name" type="text" placeholder="Type here" defaultValue="Deepika"></input> */}
    </div>
  );
}

export default App;
