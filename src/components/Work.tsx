
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "Chat with PDF",
    category: "RAG Application",
    tools: "Python, LangChain, Gemini AI, FAISS, Streamlit",
    image: "/images/chat_pdf.png",
    url: "https://github.com/Unorthodox60/chat-with-pdf",
  },
  {
    num: "02",
    title: "Road Scene Segmentation",
    category: "Deep Learning",
    tools: "TensorFlow, ResNet101, ASPP, Streamlit, Hugging Face",
    image: "/images/road_segmentation.png",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "03",
    title: "Customer Churn Prediction",
    category: "ML & Survival Analysis",
    tools: "Python, Flask, Random Forest, SHAP, Kaplan-Meier",
    image: "/images/churn_prediction.png",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "04",
    title: "Sentiment Analysis on Tweets",
    category: "NLP / Deep Learning",
    tools: "TensorFlow, GloVe, XGBoost, NLTK, SVM",
    image: "/images/sentiment_analysis.png",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "05",
    title: "Botanical Supply Chain",
    category: "Blockchain — SIH 2025",
    tools: "Blockchain, Smart Contracts",
    image: "/images/blockchain_supply.png",
    url: "https://github.com/Unorthodox60",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rect = box[0].getBoundingClientRect();
      const padding = parseInt(window.getComputedStyle(box[0]).padding) || 0;
      // Calculate total width of all boxes
      const totalWidth = rect.width * box.length;
      // We want to translate enough so the last box is fully visible.
      // 150px adds a nice little buffer at the end.
      translateX = totalWidth - window.innerWidth + 150 + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
