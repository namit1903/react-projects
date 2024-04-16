import '../App.css'
const Navbar=()=>{
  return<>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand logo"/>
        </div>
        <ul className="menu-options">
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact</li>
        </ul>
        <button className="login">Log In</button>
      </nav>
  </>
}
export default Navbar;