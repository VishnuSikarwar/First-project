import React, { useRef, useState } from "react";
import Card from "./Container/Card";
import { data } from "./Data";

const App = () => {

 let  val = useRef()
 let [filtervalue, setfiltervalue] = useState(data)
  
 const Search = ()=>{
let newData = data.filter(info=> info.name.toLowerCase().includes((val.current.value).toLowerCase()))
setfiltervalue(newData)
 }
  return (
    
    <div className="container">
      <div className="my-3">
        <input type="text" ref={val} />
        <button onClick={Search}>Search</button>
      </div>
      <div className="row text-center">
        {filtervalue.map((elm,index) => (
          <div key={index} className="col-md-3">
            <Card elm={elm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
