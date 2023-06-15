import "./Movies.scss";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import movieImage from "../../assets/images/formBg.jpg";
interface MovieI {
  movies: Movies[];
}
interface Movies {
  id: string;
  movie: string;
}

const Movielist = ({ movies }: MovieI) => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <Grid container spacing={3}>
      {user?.userdata?.movies.length > 0 ? (
        <>
          {user?.userdata?.movies.map((movie: any) => (
            <>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box className="movieCard">
                  <Box className="movieCard__img">
                    <img src={movieImage} alt="Movie" className="img-fluid" />
                  </Box>
                  <Box className="movieCard__info">
                    <h4 className="movieCard__title">{movie}</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="movieCard__size">
                      1GB<span>2hrs 30 min</span>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </>
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <div className="notFoundBlock">
            <h1 className="notFoundBlock__text">No movies found</h1>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default Movielist;
