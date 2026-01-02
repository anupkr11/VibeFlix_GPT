import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
