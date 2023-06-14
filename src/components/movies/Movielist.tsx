import "./Movies.scss"
import { useSelector } from "react-redux";

interface MovieI {
    movies: Movies[];
   }

   interface Movies {
    id: string;
    movie: string;
   }

const Movielist = ( { movies } : MovieI) => {

  const {user} = useSelector((state:any) => state.user)
console.log("user", user)
    if(!movies?.length){
      return(
        <div>
          <h1>No movies found</h1>
        </div>
      );
    }
    return(
     <ul className="movielist">
      {/* {movies.map(({ id, movie }) => (
        <li className="listitem">
            <h4>{movie}</h4>
        </li>
      ))} */}
      {
        user?.userdata?.movies.map((movie:any) => (
          <li className="listitem">
          <h4>{movie}</h4>
          </li>
        ))
      }
     </ul>
    );
   }

export default Movielist;