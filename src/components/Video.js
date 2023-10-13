import mongodbImage from "../assets/images/MongoDB_Logo.jpg";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Video.module.css";
export default function Video({ title, id, noq }) {
  const getKeyword = "MongoDB"
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=database&per_page=10`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  console.log(result)
  const n = Math.floor(Math.random() * 10);
  const image = result ? result?.photos[n].src.medium : mongodbImage;
  return (
    <div className={classes.video}>
      {/* <img src={image} alt={title} /> */}
      {/* <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      /> */}
      <img
        src={image}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
