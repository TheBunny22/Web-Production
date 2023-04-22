import Youtube from "react-youtube";
const Linkcardwithico = (props) => {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        marginTop:"2rem"
    }}>
        <div>

      {props.details.map((current) => {
          return (
              <div>
            <div
              style={{
                  margin:"1rem 0",
                  display: "flex",
                  alignItems: "center",
                }}
                >
              <img src={current.icon} />
              <h3 style={{
                  fontWeight:"700",
                  marginLeft:"1rem"
                }}>{current.title}</h3>
            </div>
            <p
              style={{
                  fontSize: "medium",
                  color:"grey",
                  margin:"1rem 0rem",
                  maxWidth:"45rem",
                  wordWrap:"break-word",
                  textAlign:"left"
                }}
                >
              {current.text}
              <span
                style={{
                    color: "#2b8ced",
                    fontSize:"medium"
                }}
                >
                {/* add link to every hrefs */}
                {current.linkText}
              </span>
            </p>
          </div>
        );
    })}
    </div>
      <Youtube
        videoId="OS37AZ4POBg"
        opts={{
          height: "360",
          width: "640",
          playerVars: {
            autoplay: 0,
            controls: 1,
          },
        }}
      />
    </div>
  );
};
export default Linkcardwithico;
