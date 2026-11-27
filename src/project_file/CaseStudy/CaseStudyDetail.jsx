
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import caseStudies from "./CaseStudyData";
import back from "./CaseStudyAssests/back-arrow.png";
import "./CaseStudyDetail.css";

export default function CaseStudyDetail() {
  const { slug, productSlug } = useParams();
  const navigate = useNavigate();

  const category = caseStudies.find((c) => c.slug === slug);
  const product = category?.products.find(
    (p) => p.slug === productSlug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, productSlug]);

  if (!product) {
    return <div className="case-not-found">Not Found</div>;
  }

  return (
    <section className="case-detail">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="case-back-btn"
      >
        <img src={back} alt="back" />
      </button>

      {/* HERO */}
      <HeroCover title={product.title} image={product.heroImage} />

      {/* CONTENT */}
      <div className="case-content">

        <TextSection
          title="Introduction"
          content={product.intro}
        />

        <TextSection
          title="Challenge"
          content={product.challenge}
        />

        <SplitSection
          title="Solution"
          content={product.solution}
          image={product.solutionImage}
          imageLeft={true}
        />

        <SplitSection
          title="Results"
          content={product.results}
          image={product.resultImage}
          imageLeft={false}
        />

        <TextSection
          title="Conclusion"
          content={product.conclusion}
        />

      </div>
    </section>
  );
}

// HERO COVER
function HeroCover({ title, image }) {
  return (
    <div className="case-hero">
      <div className="case-hero-content">
        <h1>{title}</h1>
      </div>

      <div className="case-hero-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

// NORMAL TEXT SECTION
function TextSection({ title, content }) {
  return (
    <div className="case-text-section">

      <h2>{title}</h2>

      <div className="case-text-content">
        <p>{content}</p>
      </div>

    </div>
  );
}

// IMAGE + CONTENT SECTION
function SplitSection({ title, content, image, imageLeft }) {
  return (
    <div className="case-split-section">

      <h2>{title}</h2>

      <div
        className={`case-split-card ${
          imageLeft ? "image-left" : "image-right"
        }`}
      >

        <div className="case-split-image">
          <img src={image} alt={title} />
        </div>

        <div className="case-split-content">
          <p>{content}</p>
        </div>

      </div>
    </div>
  );
}
