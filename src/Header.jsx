import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products/index">All Products</Link>
        {localStorage.getItem("jwt") ? (
          <>
            <Link to="/products/new">New Product</Link>
            <LogoutLink />
          </>
        ) : (
          <>
            <Link to="/signup">Create Account</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
