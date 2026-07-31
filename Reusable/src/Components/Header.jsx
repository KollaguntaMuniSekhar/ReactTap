import reactLogo from "../assets/react.svg"
function Header(){
  return(
 <div className="card">
     <nav>
       <img  className="logo"src={reactLogo} alt=" Logo Not found" width="250px"/>
        <h1 className="heading"> Rules of JSX</h1>
     </nav>
     </div>
  );
}
export default Header;