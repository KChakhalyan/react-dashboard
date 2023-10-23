import "./footer.scss";
const Footer = () => {
   return (
      <div className="footer">
         <span>Lambda &#x3BB; </span>
         <span>Copyright © {new Date().getFullYear()}</span>
      </div>
   );
};
export default Footer;
