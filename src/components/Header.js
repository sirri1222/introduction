import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = ({ setPage, setOpen, open }) => {
  const path = process.env.PUBLIC_URL;
  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <div className="logo">
          <img
            src={`${path}/images/HYUNJILOGO2.png`}
            className="header-logo"
            onClick={() => setPage(0)}
            alt="로고"
          /><p className="header-description">welcome to Hyunji's magazine</p>
</div>
          <ul className="gnb">
            <li onClick={() => setPage(0)}>
              <span>Home</span>
            </li>
            <li onClick={() => setPage(1)}>
              <span>Profile</span>
            </li>
            <li onClick={() => setPage(2)}>
              <span>Skill</span>
            </li>
            <li onClick={() => setPage(3)}>
              <span>Portfolio</span>
            </li>
            <li onClick={() => setPage(4)}>
              <span>Life</span>
            </li>
            <li onClick={() => setPage(5)}>
              <span>Vision</span>
            </li>
          </ul>
          <span
            className="mobile-bt"
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
