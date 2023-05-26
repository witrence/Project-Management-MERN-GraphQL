import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5rem" />
      <p className="lead fw-bold mt-3">404 Page Not Found</p>
      <Link to="/" className="btn btn-secondary">
        Go Back
      </Link>
    </div>
  );
}
