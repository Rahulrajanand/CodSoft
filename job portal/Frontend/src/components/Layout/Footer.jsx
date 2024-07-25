import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin ,FaGithub} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>Jobzee &copy; All Rights Reserved.</div>
      <div>
        
        <Link to={"https://www.linkedin.com/in/rahul-raj-anand-7a54572a8/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Rahulrajanand"} target="_blank">
          <FaGithub />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
