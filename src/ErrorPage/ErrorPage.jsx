import { Link } from "react-router-dom";
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="text-center font-bold text-red-600 mt-5 no-underline">404 Error: Page Not Found</h1>
      <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
      <img className="mx-auto d-block mt-3" style={{ height: "300px", width: "400px", color: "#f90606" }} src="https://i.ibb.co/vdrKbyg/error.png" alt="" /> <br />
      
      <div className="text-center">
        <Link to="/">
          Go back to <u className="text-blue-600 underline ">home page</u>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
