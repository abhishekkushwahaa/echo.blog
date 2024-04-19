import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <footer className="footer p-5">
        <div className="container flex justify-between">
          <span className="copyright text-black font-serif">
            &copy; 2024 Echo.Blog All Rights Reserved
          </span>
          <ul className="social flex space-x-3 justify-end">
            <li>
              <a href="https://github.com/abhishekkushwahaa">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AbhishekKushwaa">
                <FiTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/abhishekkushwaha.me">
                <FiInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhishekkushwahaa">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
