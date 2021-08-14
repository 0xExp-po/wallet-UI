/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const goToTransaction = () => {
    const walletId = localStorage.getItem('walletId');
    history.push(`/transactions/${walletId}`);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">WalletApp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{ cursor: 'pointer' }} className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => history.push('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a style={{ cursor: 'pointer' }} className={`nav-link ${pathname === '/transactions' ? 'active' : ''}`} onClick={goToTransaction}>Transactions</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;
