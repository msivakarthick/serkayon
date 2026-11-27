
import React, { useRef, useState, useEffect } from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBuilding,
  faChartColumn
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const hasAutoPlayedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // FIRST SCROLL AUTOPLAY ONLY
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (
          entry.isIntersecting &&
          !hasAutoPlayedRef.current
        ) {
          hasAutoPlayedRef.current = true;
          setShowPlayButton(false);

          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Video could not autoplay:", error);
              setShowPlayButton(true);
            });
          }

          observer.disconnect();
        }
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // VIDEO PLAY
  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowPlayButton(false);
    setShowNotifications(false);

    // Restart notification animations on every play
    setAnimationKey((prev) => prev + 1);

    clearTimeout(timerRef.current);
    clearTimeout(hideTimerRef.current);

    timerRef.current = setTimeout(() => {
      setShowNotifications(true);
    }, 7500);

    hideTimerRef.current = setTimeout(() => {
      setShowNotifications(false);
    }, 16750);
  };

  // MANUAL PLAY
  const handlePlay = async () => {
    if (!videoRef.current || isPlaying) return;

    try {
      clearTimeout(timerRef.current);
      clearTimeout(hideTimerRef.current);

      setShowNotifications(false);

      videoRef.current.currentTime = 0;

      await videoRef.current.play();
    } catch (error) {
      console.log("Video could not play:", error);
    }
  };

  // VIDEO END
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowNotifications(false);
    setShowPlayButton(true);

    clearTimeout(timerRef.current);
    clearTimeout(hideTimerRef.current);
  };

  // CLEANUP
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="eyebrow">
            THE PLANT IN YOUR POCKET
          </div>

          <h1>
            Operational visibility
            <br />
            doesn't stop at{" "}
            <span>
              the
              <br />
              gate.
            </span>
          </h1>

          <p className="hero-description">
            Give plant teams and decision-makers a clear view
            of performance, exceptions and important
            updates—wherever their work takes them.
          </p>

          <div className="hero-features">

            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div>
                <h4>Actionable alerts</h4>
                <p>Know what needs attention.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faChartColumn} />
              </div>
              <div>
                <h4>Performance at a glance</h4>
                <p>Production, energy and asset status.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <h4>Multi-site view</h4>
                <p>See the plants you are responsible for.</p>
              </div>
            </div>

          </div>

          <div className="hero-note">
            ✓ &nbsp; Your existing React mobile app design can be integrated in this section.
          </div>

        </div>

        {/* RIGHT SIDE - MOBILE PHONE */}
        <div className="hero-right">

          <div className="curve-box">

            <div className="mobile-phone">
              <div className="phone-frame">

                <div className="phone-speaker"></div>

                <div className="phone-screen">

                  <video
                    ref={videoRef}
                    className="recordvideo"
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    onPlay={handleVideoPlay}
                    onEnded={handleVideoEnd}
                  >
                    <source
                      src="/Videos/app.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video.
                  </video>

                  {showPlayButton && !isPlaying && (
                    <button
                      type="button"
                      className="video-play-button"
                      onClick={handlePlay}
                      aria-label="Play video"
                    >
                      <span>▶</span>
                    </button>
                  )}

                </div>
              </div>
            </div>

            {/* NOTIFICATIONS */}
            <div
              key={animationKey}
              className={`notifications-container ${
                showNotifications ? "notifications-active" : ""
              }`}
            >

              <span className="notification-arrow arrowone">←</span>

              <div className="notification-card card1">
                <div className="notification-heading">
                  <span>Low sensor_4</span>
                </div>
                <p>
                  sensor_4 is below the lower limit.
                  <br />
                  Current value: 61.70
                </p>
              </div>

              <span className="notification-arrow arrowtwo">←</span>

              <div className="notification-card card2">
                <div className="notification-heading">
                  <span>High sensor_2</span>
                </div>
                <p>
                  sensor_2 is above the upper limit.
                  <br />
                  Current value: 78.40
                </p>
              </div>

              <span className="notification-arrow arrowthree">←</span>

              <div className="notification-card card3">
                <div className="notification-heading">
                  <span>PoultryNet Monitoring</span>
                </div>
                <p>Sensor monitoring is active</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
