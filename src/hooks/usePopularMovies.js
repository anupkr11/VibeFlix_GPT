import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies);

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
