import Movielist from "./Movielist";
import { useAppDispatch } from "../../redux/store";
import authAction from "../../redux/actions/login.action";
import { useHistory } from "react-router-dom";

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
    <div>
      <nav className="movie-header">
        <ul>
          <li>
            <h1 className="movie-title">List of movies</h1>
          </li>
          <li className="push-right">
            <button className="btn-logout" onClick={() => handleLogout()}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <Movielist movies={moviedata} />
    </div>
  );
};

export default Movies;
