// import "./front.css";

// function Front({ onFinish }) {
//   return (
//     <section
//       className="front-intro"
//       onAnimationEnd={(event) => {
//         if (event.target === event.currentTarget) {
//           onFinish();
//         }
//       }}
//     >
//       <div className="front-content">
//         <h1 className="name">SERKAYON</h1>
//       </div>
//     </section>
//   );
// }

// export default Front;



// import "./front.css";

// function Front({ onFinish }) {
//   return (
//     <section
//       className="front-intro"
//       onAnimationEnd={(event) => {
//         if (event.target === event.currentTarget) {
//           onFinish();
//         }
//       }}
//     >
//       <div className="front-content">
//         <h1 className="name">
//           <span>S</span>
//           <span>E</span>
//           <span>R</span>
//           <span>K</span>
//           <span>A</span>
//           <span>Y</span>
//           <span>O</span>
//           <span>N</span>
//         </h1>
//       </div>
//     </section>
//   );
// }

// export default Front;


// import "./front.css";

// function Front({ onFinish }) {
//   return (
//     <section
//       className="front-intro"
//       onAnimationEnd={(event) => {
//         if (event.target === event.currentTarget) {
//           event.currentTarget.style.pointerEvents = "none";
//           onFinish();
//         }
//       }}
//     >
//       <div className="front-content">
//         <h1 className="name">
//           <span>S</span>
//           <span>E</span>
//           <span>R</span>
//           <span>K</span>
//           <span>A</span>
//           <span>Y</span>
//           <span>O</span>
//           <span>N</span>
//           </h1>
//       </div>
//     </section>
//   );
// }

// export default Front;
import "./front.css";

const NAME = "SERKAYON";

function Front({ onFinish }) {
  return (
    <section
      className="front-intro"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.style.pointerEvents = "none";
          onFinish();
        }
      }}
    >
      <div className="front-glow" aria-hidden="true" />

      <div className="front-content">
        <h1 className="name" aria-label="Serkayon">
          {NAME.split("").map((letter, index) => (
            <span key={index} style={{ "--i": index }} aria-hidden="true">
              {letter}
            </span>
          ))}
        </h1>

        <div className="name-line" aria-hidden="true" />

        <p className="tagline">Industrial Intelligence</p>
        <p className="company-type">Pvt Ltd</p>
      </div>
    </section>
  );
}

export default Front;
