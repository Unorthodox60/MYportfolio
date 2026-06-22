import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science & Technology</h4>
                <h5>United Institute of Technology, Prayagraj</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Currently pursuing my undergraduate degree with a focus on Machine
              Learning, Data Structures & Algorithms, and Web Development.
              Actively participating in hackathons, open source contributions, and
              technical summits including Google DevFest and TEDx UIT.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI for Gen Z — Industrial Training</h4>
                <h5>Intel & HPE</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
              Completed comprehensive industrial training on Generative AI
              applications, modern AI paradigms, and foundational LLM-based models
              for real-world deployment scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Collection Framework — Advanced Certification</h4>
                <h5>United Institute of Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 60-hour advanced Java program; built a data analysis
              tool for real-world air quality datasets with AQI calculation logic
              and statistical pre-processing to categorize pollution severity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
