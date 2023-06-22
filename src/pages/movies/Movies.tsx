import Movielist from "../../components/Movielist";
import { useAppDispatch } from "../../redux/store";
import authAction from "../../redux/actions/login.action";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/movieLogo.png";
import { Container } from "@mui/material";

const Movies = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("movielist");
    await dispatch(authAction(""));
    history.push("/");
  };

  return (
    <>
      <nav className="siteHeader">
        <Container maxWidth="lg">
          <div className="siteHeader__inner">
            <div className="siteHeader__logo">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <button className="button" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </Container>
      </nav>
      <div className="pageTemplate">
        <Container maxWidth="lg">
          <h1 className="pageTemplate__title">All Movie List</h1>
          <Movielist />
        </Container>
      </div>
    </>
  );
};

export default Movies;
