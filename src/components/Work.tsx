import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

type Project = {
  /** Discipline the project belongs to, shown as a label above the title. */
  group: string;
  title: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  /** Primary link opened from the project image, live demo when one exists. */
  link: string;
  github?: string;
  demo?: string;
};

// TODO(assets): replace `/images/placeholder.webp` with a real screenshot per
// project (see README "Manual steps").
const projects: Project[] = [
  // ── Full-Stack ──
  {
    group: "Full-Stack",
    title: "Shomadhan",
    category: "Smart Civic Issue Tracking System",
    tools: "React, Node.js, Express, MongoDB, JWT, Leaflet.js, PDFKit",
    description:
      "Full-stack MERN civic complaint platform with NLP auto-classification, SLA monitoring, duplicate detection via geographic proximity, and real-time notifications across three user roles. Scored 97 Performance, 100 Best Practices, and 91 SEO on Lighthouse.",
    image: "/images/shomadhan.jpg",
    link: "https://shomadhan-eight.vercel.app",
    github: "https://github.com/ifaz07/Shomadhan",
    demo: "https://shomadhan-eight.vercel.app",
  },
  {
    group: "Full-Stack",
    title: "ShastoSheba",
    category: "Telehealth Platform for Bangladesh",
    tools: "React, TypeScript, Node.js, Express, MongoDB, JWT, Twilio Video, Google Gemini, Tailwind CSS",
    description:
      "Full-stack telehealth platform where patients book in-person or video consultations with verified doctors, paying online through mobile banking. Doctors manage availability, verify payments, and issue prescriptions, while patients get Twilio video calls, auto-expiring medication reminders, and a Gemini-powered AI assistant in English or Bangla.",    image: "/images/shastosheba.jpg",
    link: "https://github.com/ifaz07/Shasto-Sheba",
    github: "https://github.com/ifaz07/Shasto-Sheba",
  },
  {
    group: "Full-Stack",
    title: "FindYourTurf",
    category: "Sports Venue Booking Platform",
    tools: "PHP, MySQL, JavaScript, PHPMailer",
    description:
      "Normalized MySQL schema with complex JOIN queries powering booking history, multi-filter search across location, price and capacity, and real-time availability validation. Role-based dashboards for users, owners, and admins with automated email notifications.",
    image: "/images/findyourturf.jpg",
    link: "https://github.com/ifaz07/TurfProject",
    github: "https://github.com/ifaz07/TurfProject",
  },

  // ── Backend ──
  {
    group: "Backend",
    title: "Kanban Board API",
    category: "Backend REST API",
    tools: "NestJS, TypeScript, PostgreSQL, Prisma, JWT, Swagger, Cloudinary",
    description:
      "Task management REST API with JWT auth, rotating refresh tokens hashed at rest, and ownership-based access control. Gap-based position logic avoids full re-indexing on every move, plus soft deletes, activity logging, and Cloudinary attachments streamed without disk writes.",
    image: "/images/kanban-board-api.jpg",
    link: "https://kanban-board-system.onrender.com/api/docs",
    github: "https://github.com/ifaz07/Kanban-Board-System-",
    // TODO(links): add the live Render deployment URL as `demo`.
  },

  // ── AI / ML / NLP ──
  {
    group: "AI / ML / NLP",
    title: "EchoMinutes",
    category: "AI Meeting Assistant",
    tools: "Python, Whisper, LangChain, Mistral, ChromaDB, Streamlit",
    description:
      "Turns a YouTube link or local recording into a transcript, executive summary, action items, and open questions. Local Whisper for English with Sarvam AI routing for Bangla and Hindi, plus a RAG chat grounded strictly in transcript content via ChromaDB embeddings.",
    image: "/images/echominutes.jpg",
    link: "https://github.com/ifaz07/EchoMinutes---AI-Meeting-Assistant",
    github: "https://github.com/ifaz07/EchoMinutes---AI-Meeting-Assistant",
  },
  {
    group: "AI / ML / NLP",
    title: "Fraud Detection",
    category: "EDA and Classification Pipeline",
    tools: "Python, Scikit-learn, SMOTE, Pandas, Matplotlib, Seaborn",
    description:
      "End-to-end ML pipeline on 1.2M+ transaction records with preprocessing, SMOTE resampling, and feature engineering. Random Forest reached an 82% F1-score on the fraud class and 85% ROC-AUC, validated against data leakage between train and test splits.",
    image: "/images/fraud-detection.jpg",
    link: "https://github.com/ifaz07/Machine-Learning-Projects",
    github: "https://github.com/ifaz07/Machine-Learning-Projects",
  },
  {
    group: "AI / ML / NLP",
    title: "NLP Text Classifier",
    category: "ML vs Deep Learning Benchmark",
    tools: "Python, TF-IDF, Word2Vec, RNN, LSTM, GRU, Scikit-learn",
    description:
      "Designed and benchmarked six NLP architectures across TF-IDF, Word2Vec, RNN, LSTM, GRU, and a hybrid model for 10-category text classification, with structured precision, recall, and F1-score evaluation reports for each.",
    image: "/images/nlp-classifier.jpg",
    link: "https://github.com/ifaz07/Natural-Language-Processing-NLP-",
    github: "https://github.com/ifaz07/Natural-Language-Processing-NLP-",
  },

  // ── Research ──
  {
    group: "Research",
    title: "Hallucination Detection",
    category: "Undergraduate Thesis, Bangla LLMs (A+, 97/100)",
    tools: "Python, BERT, mDeBERTa, LLaMA 3, Gemma 3, Phi-4, NLI",
    description:
      "My undergraduate thesis, completed May 2026 and graded A+ at 97/100. A six-signal hybrid verification pipeline detecting hallucinations in Bangla LLM output across QA, summarisation, and translation. Extracted attention weights and logits across 32 layers (363 features per token) for llama3, reaching classifier AUC of 0.687 to 0.830 for different ML models over 9,000 benchmarked evaluations.",
    image: "/images/thesis-hallucination.jpg",
    // TODO(links): point at the dedicated thesis repo once it is public.
    link: "https://github.com/ifaz07/Undergraduate-Thesis---Bangla-Language-Hallucination-Detection",
    github: "https://github.com/ifaz07/Undergraduate-Thesis---Bangla-Language-Hallucination-Detection",
  },
  {
    group: "Research",
    title: "AI-Generated Code Detection",
    category: "Stylometric ML Pipeline",
    tools: "Python, TF-IDF, PyTorch, Scikit-learn, Pandas, PCA, t-SNE",
    description:
      "Prepared and labelled a 1.96M-sample dataset classifying human-written code against ChatGPT, DeepSeek, and Qwen output using TF-IDF vectorisation and stylometric feature engineering. Five classifiers compared at 75.07% accuracy, with PCA, t-SNE, and structured error analysis.",
    image: "/images/ai-code-detection.jpg",
    link: "https://github.com/ifaz07/Data-Science",
    github: "https://github.com/ifaz07/Data-Science",
  },

  // ── Blockchain ──
  {
    group: "Blockchain",
    title: "Decentralized Freelance Marketplace",
    category: "Ethereum DApp",
    tools: "Solidity, Ethereum, Web3.js, MetaMask, Truffle, Ganache",
    description:
      "A decentralized freelance marketplace on Ethereum built with Solidity smart contracts. Features escrow-based payments, role-based dashboards, a bidding system, dispute resolution, freelancer reputation tracking, and MetaMask integration for transaction signing.",
    image: "/images/blockchain-marketplace.jpg",
    link: "https://github.com/ifaz07/Freelance-Market-Escrow---BlockChain-Project",
    github:
      "https://github.com/ifaz07/Freelance-Market-Escrow---BlockChain-Project",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <span className="carousel-group">{project.group}</span>
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                            >
                              GitHub <MdArrowOutward />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                            >
                              Live Demo <MdArrowOutward />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
