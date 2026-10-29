import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Metaora · React · Node.js · PostgreSQL</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aug 2026 – Present, Remote.{" "}
              <a
                href="https://www.metaora.ai/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Metaora
              </a>{" "}
              builds AI voice solutions for businesses. I turn client
              requirements into Retell voice agents, test live calls and
              transcripts, and improve agent behavior through iterative fixes.
              I also contribute React, Node.js, and PostgreSQL features to the
              product on dev and staging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc Computer Science</h4>
                <h5>BRAC University · GPA 3.90/4.0</h5>
              </div>
              <h3>2022–2026</h3>
            </div>
            <p>
              Sep 2022 to Jun 2026 at BRAC University, Dhaka. Graduated with a
              GPA of 3.90/4.0 and made the Dean's List across multiple
              semesters. Coursework included Machine Learning, NLP, Data
              Science, Database Systems, Software Engineering, Data Structure
              &amp; Algorithms, and System Analysis &amp; Design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Thesis</h4>
                <h5>NLP Research · Bangla LLMs · PyTorch</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              May 2025 to June 2026, graded A+ (97/100). A six-signal hybrid
              pipeline for detecting hallucinations in Bangla LLM output.
              Extracted attention weights and logits across 32 layers (363
              features per token) to train classifiers on intermediate neural
              signals, benchmarking Phi-4, Gemma 3, and LLaMA 3 across 9,000
              evaluations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML, NLP &amp; Data Science</h4>
                <h5>Python · Pandas · NumPy · Scikit-learn · Matplotlib</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Fraud detection on 1.2M+ transactions (82% F1 on the fraud class,
              85% ROC-AUC with Random Forest), AI-generated code detection across
              a 1.96M-sample stylometric dataset, and a six-architecture NLP
              classification benchmark.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development</h4>
                <h5>MERN · PHP · MySQL</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Shipped Shomadhan (civic issue tracking, 97 Lighthouse
              performance), ShastoSheba (telehealth with video consultations,
              Ai Health Assistant and chatting system), and FindYourTurf (venue booking), each
              built around multiple user roles, normalized schemas, and
              role-based access.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain</h4>
                <h5>Solidity · Ethereum · Web3.js</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a decentralized freelance marketplace on Ethereum with
              escrow-based payments, a bidding system, freelancer reputation
              tracking, and trustless dispute resolution. Deployed and tested
              contracts on Ganache via Truffle with MetaMask for signing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Forage · DataCamp</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              LeetCode 100 Days Badge for consistent daily problem solving.
              1st Runner-Up, CSE471 System Analysis and Design Project Showcase
              4.0 for Shomadhan, selected among 120 submissions.{" "}
              Deloitte Australia Technology Job Simulation (coding &amp;
              technology track). DataCamp: Data Manipulation in Python, Data
              Manipulation with Pandas, Joining Data with Pandas, Reshaping Data
              with Pandas, Introduction to NumPy, and Cleaning Data in Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA</h4>
                <h5>Around 300 problems solved</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Solved around 300 data structures and algorithms problems across arrays,
              trees, graphs, dynamic programming, binary search, and two
              pointers on{" "}
              <a
                href="https://leetcode.com/u/ifaz_07/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LeetCode
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
