import "../../assets/styles/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <p>
            NOVA<span className="header-logo__activ">WEB</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
