import "./topBox.scss";
import { topDealUsers } from "../../data";
const TopBox = () => {
   return (
      <div className="top-box">
         <h1>Top Deals</h1>
         <div className="list">
            {topDealUsers.map((user) => (
               <div className="list-item" key={user.id}>
                  <div className="user">
                     <img src={user.img} alt={user.username} />
                     <div className="user-info">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                     </div>
                  </div>
                  <div className="amount">$ {user.amount}</div>
               </div>
            ))}
         </div>
      </div>
   );
};
export default TopBox;
