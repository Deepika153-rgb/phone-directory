

function App() {
  return (
    <div>
        <div>Phone Directory</div>
        <button>Add</button>
        <div>
          <span> Name </span><br/>
          <span>Phone</span>
        </div>

        <label htmlfor="name" >Name:</label>
        <input id="name" type="text" placeholder="Type here" defaultValue="Deepika"></input>
    </div>
  );
}

export default App;
