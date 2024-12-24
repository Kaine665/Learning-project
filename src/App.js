import { info } from "./assets/Data.js";

function App() {
  return (
    <>
      <div className="course-part">
        <h2>Courses</h2>
        <div className="card-container">
          {info.map((infomation) => (
            <Card cover_info={infomation.cover_info} />
          ))}
        </div>
      </div>

      <div className="plan-part">
        <h2>Planning</h2>
        <div className="plan-container" id="plan-container">
          <p>I want to: ... </p>
          <ul>
            <li>
              写一个网站
              <ol>
                <li>熟练使用css。为了做出好看的页面</li>
                <ol>
                  <li>在mentor上面，靠写项目得分，总150分 </li>
                </ol>
                <li>
                  熟练使用react框架。学了js框架才知道现代网页能做成什么样子
                </li>

                <ol>
                  <li>
                    寻找js、react练习项目{" "}
                    <span style={{ background: "yellow" }}>ing</span>
                  </li>
                  <li>做练习项目</li>
                  <li>
                    <details>
                      <summary>后续</summary>
                      <p>学vue。如果要找vue相关工作</p>
                    </details>
                  </li>
                </ol>
              </ol>
              <br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;搁置</p>
              <hr />
              <ol>
                <li>当数据变得复杂时，学习数据结构。为了更好地管理数据</li>
              </ol>
            </li>

            <br />
            <li>
              打基础
              <ol>
                <li>
                  学计算机网络。因为是计算机基础科目
                  <ol>
                    <li>
                      把c语言看完。因为我学的计算机网络需要c语言
                      <ol>
                        <li>
                          把c语言第一节课的练习在虚拟机做掉{" "}
                          <span style={{ background: "yellow" }}>ing</span>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              写一篇论文
              <ol>
                <li>
                  学习pytorch库。为了入门编写AI
                  <ol>
                    <li>
                      找一个合适的pytorch课程{" "}
                      <span style={{ background: "yellow" }}>ing</span>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ul>
        </div>
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
