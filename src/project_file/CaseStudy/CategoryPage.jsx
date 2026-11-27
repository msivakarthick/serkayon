import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./CategoryPage.css";
import hyundai from "./CaseStudyAssests/hyundai.png";
import bioPm from "./CaseStudyAssests/Bio-Pm.png";
import columnImg from "./CaseStudyAssests/cig.png";
import repetoryImg from "./CaseStudyAssests/repetory.jpeg";
import poultryImg from "./CaseStudyAssests/poultryHero.jpg";
export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudies = [
    {
      category: "Machine Tools",
      slug: "machine-tools",
      products: [
        {
          title:
            "Monitoring System: AI-powered real-time shaft diameter monitoring dashboard.",
          slug: "hyundai-pm",
          heroImage: hyundai,
          content: `
Real-time machine monitoring dashboard for shaft diameter inspection with AI-powered quality control enables real-time monitoring, delivering a 30% increase in OEE and a 25% reduction in defects.
          `,
        }
      ],
    },
    {
      category: "BIO",
      slug: "column-integrity",
      products: [
        {
          title: "Column Integrity Guard:Detects column degradation to ensure packed-bed stability and consistent performance.",
          slug: "column-guard",
          heroImage: columnImg,
          content: `
Monitors hydrodynamic stability, pressure, and flow in packed-bed bioreactors to detect channeling, compaction, and degradation. Enables predictive maintenance and continuous auditing for consistent performance and reduced failure risk.

          `,
        },
        {
          title: "Bio Predictive Maintenance:Real-time bioreactor failure prediction  and improve reliability",
          slug: "bio-product",
          heroImage: bioPm,
          content: `
AI-driven bioreactor predictive maintenance platform analyzing PLC data via Modbus to detect performance issues and risks.
Monitors agitation, temperature, and pH/DO to improve reliability and reduce downtime.
          `,
        },
      ],
    },
    {
      category: "Sustainable Solutions",
      slug: "repetory",
      products: [
        {
          title: "Repetory App:Smart factory solution with IoT integration and AI-driven optimization.",
          slug: "repetory-app",
          heroImage: repetoryImg,
          content: `
Factory solution with IoT integration, AI-driven optimization, full system integration, and computer vision analysis to reduce carbon footprint.

          `,
        },
      ],
    },
    {
  category: "Poultry & Feed Mill Management",
  slug: "poultry-feed-mills",
  products: [
    {
      title: "Poultry ERP Dashboard",
      slug: "poultry-erp-dashboard",
      heroImage: poultryImg,

      content: `
Industrial feed mill ERP solution featuring raw material management, production tracking, batch traceability, energy monitoring, inventory control, dispatch management, and real-time analytics for operational excellence.
      `,
    },
    
  ],
}
  ];

 const category = caseStudies.find((c) => c.slug === slug);

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, [slug]);

if (!category) {
  return <div>Not Found</div>;
}

    return (
  <div className="category-page">
    <section className="category-section">

      <div className="category-header">

        <div className="back-wrap">
          <button
  onClick={() =>
  navigate("/", {
    state: { scrollToCaseStudies: true },
  })
}
  className="back-btn"
>
            <span>←</span>
            <span>Back to Categories</span>
          </button>
        </div>

        <h2 className="category-title">
          {category.category}
        </h2>

      </div>

      <div className="product-grid">

        {category.products.map((product) => (
          <div
            key={product.slug}
            onClick={() =>
              navigate(`/case-study/${slug}/${product.slug}`)
            }
            className="product-card"
          >

            <div className="product-image-wrap">
              <img
                src={product.heroImage}
                alt={product.title}
                className="product-image"
              />
            </div>

            <div className="product-content">

              <div>
                <h3 className="product-title">
                  {product.title}
                </h3>

                <p className="product-description">
                  {product.content}
                </p>
              </div>

              <div className="read-more">
                <span>Read more</span>
                <span>➜</span>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  </div>
  );
}
