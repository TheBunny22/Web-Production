import { useState, useRef } from "react";
import video from "../../video/video.mp4";
import replayImg from "../../img/replay.png";
import videocvrImg from "../../img/videocvr.png";

const Videoplayer = () => {
  const videoRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true);

  const handleVideoEnd = () => {
    setShowButtons(true);
  };

  const handleReplayClick = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setShowButtons(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#f8f9fb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", textAlign: "center" }}>
        <h1 style={styles.heading}>Ordering PCBs at Microplacer is Easy</h1>
        <h5 style={styles.subtitle}>
          Our self-service platform gives you instant quote, and allows
          real-time order tracking
        </h5>
        <img
          src={videocvrImg}
          style={styles.img1}
          alt="background"
        />
        <img
          style={styles.img2}
          src={videocvrImg}
          alt="background"
        />
        <video
          height={600}
          ref={videoRef}
          onPlaying={() => setShowButtons(false)}
          onEnded={handleVideoEnd}
          controls={false}
        >
          <source src={video} type="video/mp4" />
        </video>
        {showButtons && (
          <div style={styles.buttons}>
            <button style={styles.replayButton} onClick={handleReplayClick}>
              <img
                src={replayImg}
                style={styles.replayImg}
                alt="replay"
              />
              Replay
            </button>
            <button style={styles.quoteButton}>Get Instant Quote</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  img1: {
    position: "absolute",
    scale:"-30%",
    zIndex: "10",
    transform:"translateX(167%) translateY(50%) rotate(180deg)",
  },
  img2: {
    position: "absolute",
    scale:"-30%",
    zIndex: "10",
    transform:"translateX(-545%) translateY(-100%) ",
  },
  buttons: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "2",
    transform: "translate(-40%,0%)",
    textAlign: "center",
  },
  replayButton: {
    textAlign: "center",
    margin: "0rem 1rem",
    color: "white",
    borderRadius: "10rem",
    minWidth: "10rem",
    fontSize: "18px",
    border: "2px solid white",
    background: "transparent",
    height: "4rem",
  },
  quoteButton: {
    textAlign: "center",
    margin: "0rem 5rem",
    borderRadius: "10rem",
    minWidth: "10rem",
    fontSize: "18px",
    border: "none",
    padding: "0 2rem",
    color: "white",
    background: "#2b8ced",
    height: "4rem",
  },
  replayImg: {
    filter: "invert(100%)",
    transform: "scaleX(-1)",
    margin: "0 10px ",
    fontWeight: "bold",
    height:20,
  },
  subtitle: {
    opacity: "50%",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
  }
}

export default Videoplayer;