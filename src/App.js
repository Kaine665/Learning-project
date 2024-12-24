import { info } from "./assets/Data.js";

function App() {
  return (
    <>
      <div className="card-container">
        {info.map((infomation) => (
          <Card cover_info={infomation.cover_info} />
        ))}
      </div>
    </>
  );
}

function Card({ cover_info }) {
  const { title, url, img } = cover_info;
  const isImgLocal = img.includes("//");
  return (
    <div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={!isImgLocal ? require(`${img}`) : img}
            alt=""
            width="300px"
            height="200px"
          />
        </a>
      </div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
}

export default App;
