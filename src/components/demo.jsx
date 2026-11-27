import "./Architecture.css";
import "./demo.css";
import { useRef, useState } from "react";

function Demo() {
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowNotifications(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setShowNotifications(false);
    }, 16750);
  };

  const handlePlay = async () => {
    if (!videoRef.current || isPlaying) return;

    try {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setShowNotifications(false);
      setAnimationKey((prev) => prev + 1);

      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch (error) {
      console.log("Video could not play:", error);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowNotifications(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <section className="curve-box">

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
              <source src="/Videos/app.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>

            {!isPlaying && (
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
    </section>
  );
}

export default Demo;