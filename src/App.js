const filteredCourses = [
  // 定义课程信息数组
];

const info = [
  {
    id: 1,
    // 资源封面信息
    cover_info: {
      title: "Grid 教程",
      url: "https://www.bilibili.com/video/BV1db4y1B7zT/?t=36",
      img: "./assets/img/gridtutorail.avif",
    },
    // 保存和搜索资源
    save_and_search: {
      name: "None",
      country: "",
      origin: "University",
      author: "",
      subject: "",
      // search
      tags: [],
    },
    // 其他信息
    learning_info: {
      // 分集数量
      episodeCount: "",
      // 相关资源
      src: [],
      other: [],
    },
  },
  {
    id: 2,
    cover_info: {
      title: "Stanford CS 144",
      url: "https://www.bilibili.com/video/BV1qotgeXE8D",
      img: "./assets/img/stanfordcs144.jpg",
    },
  },
  {
    id: 3,
    cover_info: {
      title: "UCB CS61A",
      url: "https://www.bilibili.com/video/BV1wSTUeJEwK",
      img: "https://i.postimg.cc/5Nt22gMS/08915fa033b309a0af3c9dba21b569d9aa6b82f1.jpg",
    },
  },
  {
    id: 4,
    cover_info: {
      title: "NJU C程序设计基础",
      url: "https://www.bilibili.com/video/BV11i4y1a7nS",
      img: "./assets/img/NJU2.jpg",
    },
  },
  {
    id: 5,
    cover_info: {
      title: "React Native Tutorial",
      url: "https://www.youtube.com/watch?v=RVFAyFWO4go",
      img: "https://i.ytimg.com/vi/RVFAyFWO4go/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCpzdupATpLkDQtLfG3Y5wcne2uw",
    },
  },
  {
    id: 6,
    cover_info: {
      title: "Grid 教程",
      url: "https://www.bilibili.com/video/BV1db4y1B7zT/?t=36",
      img: "./assets/img/gridtutorail.avif",
    },
  },
];

function App() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  };

  return (
    <>
      <div style={containerStyle}>
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
