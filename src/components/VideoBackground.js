import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <iframe
        className="
          absolute top-1/2 left-1/2
          w-[120vw] h-[120vh]
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
        allow="autoplay; encrypted-media"
        title="Trailer"
      />
    </div>
  );
};

export default VideoBackground;


