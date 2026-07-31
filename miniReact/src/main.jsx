import {createRoot} from "react-dom/client";
import  reactLogo from"./assets/react.svg"
import "./index.css";
createRoot(document.getElementById("root")).render(


<div className="card">
  <nav>
    <img  className="logo"src={reactLogo} alt=" Log Not found" width="250px"/>
     <h1 className="heading"> Rules of JSX</h1>
  </nav>
<ul className="listitems">
  <li>Must have enclosed jsx in a Root element</li>
  <li> close the tags properly</li>
  <li> use className for css class, as class in reserved word in js</li>
  <li> use camelCase for attributes</li>
  <li> use flower braces for js</li>
</ul>
</div>


);