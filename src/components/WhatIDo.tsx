import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          <div
            className={`what-content ${activeIndex === 0 ? "what-content-active" : ""} ${activeIndex === 1 ? "what-sibling" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI &amp; ML</h3>
              <h4>From Raw Data to Working Models</h4>
              <div className="what-collapse">
                <div className="what-collapse-in">
                  <p>
                    I build ML, NLP, and data analytics pipelines end to end,
                    from cleaning datasets to benchmarking architectures and
                    surfacing insights in BI dashboards
                  </p>
                  <h5>Skillset & tools</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Python</div>
                    <div className="what-tags">Scikit-learn</div>
                    <div className="what-tags">Pandas &amp; NumPy</div>
                    <div className="what-tags">PyTorch</div>
                    <div className="what-tags">BERT &amp; mDeBERTa</div>
                    <div className="what-tags">RNN / LSTM / GRU</div>
                    <div className="what-tags">LangChain &amp; RAG</div>
                    <div className="what-tags">VectorDb </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="what-arrow"
                onClick={() => toggleCard(0)}
                aria-expanded={activeIndex === 0}
                aria-label="Toggle AI & ML details"
              ></button>
            </div>
          </div>

          <div
            className={`what-content ${activeIndex === 1 ? "what-content-active" : ""} ${activeIndex === 0 ? "what-sibling" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FULL-STACK</h3>
              <h4>Software Engineering, APIs, and Quality</h4>
              <div className="what-collapse">
                <div className="what-collapse-in">
                  <p>
                    I design REST APIs with real auth and schemas that
                    survive concurrent writes, ship the React front-ends that
                    sit on top of them, and test what I build carefully, from
                    edge cases to defect documentation.
                  </p>
                  <h5>Skillset & tools</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">TypeScript</div>
                    <div className="what-tags">Node &amp; Express</div>
                    <div className="what-tags">React</div>
                    <div className="what-tags">PHP</div>
                    <div className="what-tags">MySQL &amp; MongoDB</div>
                    <div className="what-tags">JWT Authentication</div>
                    <div className="what-tags">Docker &amp; Github</div>
                    <div className="what-tags">CI/CD Pipelines</div>
                    <div className="what-tags">Manual Testing</div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="what-arrow"
                onClick={() => toggleCard(1)}
                aria-expanded={activeIndex === 1}
                aria-label="Toggle Full-Stack details"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
// function handleClick(container: HTMLDivElement) {
//   container.classList.toggle("what-content-active");
//   container.classList.remove("what-sibling");
//   if (container.parentElement) {
//     const siblings = Array.from(container.parentElement.children);

//     siblings.forEach((sibling) => {
//       if (sibling !== container) {
//         sibling.classList.remove("what-content-active");
//         sibling.classList.toggle("what-sibling");
//       }
//     });
//   }
// }