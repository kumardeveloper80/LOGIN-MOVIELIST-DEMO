import Movielist from "./Movielist";
import { useAppDispatch } from "../../redux/store";
import authAction from "../../redux/actions/login.action";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/movieLogo.png";
import { Container } from "@mui/material";

const Movies = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.setItem("token", "");
    await dispatch(authAction(""));
    history.push("/");
  };

  const moviedata = [
    { id: "1", movie: "The lost city" },
    { id: "2", movie: "The adam project" },
    { id: "3", movie: "Uncharted" },
    { id: "4", movie: "Black adam" },
    { id: "5", movie: "Prey" },
    { id: "6", movie: "The batman" },
  ];

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
          <Movielist movies={moviedata} />
        </Container>
      </div>
    </>
  );
};

export default Movies;
