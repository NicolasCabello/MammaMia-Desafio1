import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid px-3">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className="navbar-brand mb-0 me-1">Pizzería Mamma Mia!</span>
          <button type="button" className="btn btn-outline-light btn-sm">
            🍕 Home
          </button>
          {token ? (
            <>
              <button type="button" className="btn btn-outline-light btn-sm">
                🔓 Profile
              </button>
              <button type="button" className="btn btn-outline-light btn-sm">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-outline-light btn-sm">
                🔐 Login
              </button>
              <button type="button" className="btn btn-outline-light btn-sm">
                🔐 Register
              </button>
            </>
          )}
        </div>
        <button type="button" className="btn btn-outline-info btn-sm ms-auto">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
