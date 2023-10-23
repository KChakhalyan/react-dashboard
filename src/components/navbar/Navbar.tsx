import "./navbar.scss";
const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logo">
            {/* <img src="logo.svg" alt="logo" /> */}
            <span>
               <span style={{ fontSize: "1.5rem" }}>&#x3BB;</span> Lambda
            </span>
         </div>
         <div className="nav-icons">
            <img src="search.svg" alt="search" className="icon" />
            <img src="app.svg" alt="app" className="icon" />
            <img src="expand.svg" alt="app" className="icon" />
            <div className="notification">
               <img src="notifications.svg" alt="notification" />
               <span>4</span>
            </div>
            <div className="user-profile">
               <img
                  src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
               />
               <span>Karen</span>
            </div>
            <img src="settings.svg" alt="" className="icon" />
         </div>
      </div>
   );
};
export default Navbar;
