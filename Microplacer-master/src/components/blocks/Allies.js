import Logocarousal from "./Logocarousal";

const Allies = (props) => {
  return (
    <div
      style={{
        background: "#EDF5FE",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          height: "40vh",
          margin: "auto",
          padding: "5rem",
          display: "flex",
          flexDirection:"column",
          alignItems: "space-around",
        }}
      >
        <h1 style={styles.heading}>
          {" "}
          Over {props.allinum} businesses and inovators use Microplacer
        </h1>
        <Logocarousal />
        <div style={styles.flex}>
          <button style={styles.replayButton}>See Our Capability</button>
          <button style={styles.quoteButton}>Get Instant Quote</button>
        </div>
      </div>
    </div>
  );
};
const styles = {
  subtitle: {
    opacity: "50%",
  },
  flex:{
    display:"flex",
    justifyContent:"center",
    gap:"10rem"
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
  },
  replayButton: {
    textAlign: "center",

    color: "#2b8ced",
    borderRadius: "10rem",
    minWidth: "20rem",
    fontSize: "18px",
    border: "2px solid #2b8ced",
    background: "transparent",
    height: "4rem",
  },
  quoteButton: {
    textAlign: "center",
  
    borderRadius: "10rem",
    minWidth: "20rem",
    fontSize: "18px",
    border: "none",
    padding: "0 2rem",
    color: "white",
    background: "#2b8ced",
    height: "4rem",
  },
};
export default Allies;
