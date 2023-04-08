import React from "react";
import { useState } from "react";
import uploadIcon from "../../img/uploadicon.png";
import "./Instantstyle.css";
const InstantQuote = () => {
  const [selectedLayer, setSelectedLayer] = useState(1);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      (file.type === "application/zip" ||
        file.type === "application/x-rar-compressed")
    ) {
      console.log("accepted");
    }
  };

  return (
    <div style={cover}>
      <div
        style={{
          display: "inline-block",
          position: "relative",
          padding: "1rem",
        }}
      >
        <input
          type="file"
          accept=".zip, .rar"
          onChange={handleFileSelect}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            border: "2px dashed gray",
            height: "100%",
            display: "flex",
            background: "#F7FBFF",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "20rem",
            textAlign: "center",
            borderRadius: "1rem",
          }}
        >
          <img
            src={uploadIcon}
            alt="File Icon"
            style={{ width: "35px", marginBottom: "10px" }}
          />
          <div>Upload Your Gerber File </div>
        </div>
      </div>

      <span className="con">
        <div>OR</div>
      </span>

      <span style={Inputcvr}>
        <label>Layer</label>
        <span style={radiowrapper}>
          <div style={selectedLayer === 1 ? activebt : radiobt}>
            <label>1</label>
            <input
              style={{
                position: "absolute",
                padding: ".5rem 2rem",
                opacity: "0",
              }}
              onClick={() => setSelectedLayer(1)}
              type="button"
              value=" "
            />
          </div>
          <div style={selectedLayer === 2 ? activebt : radiobt}>
            <label>2</label>
            <input
              style={{
                position: "absolute",
                padding: ".5rem 2rem",
                opacity: "0",
              }}
              onClick={() => setSelectedLayer(2)}
              type="button"
              value=" "
            />
          </div>
          <div style={selectedLayer === 3 ? activebt : radiobt}>
            <label>3</label>
            <input
              style={{
                position: "absolute",
                padding: ".5rem 2rem",
                opacity: "0",
              }}
              onClick={() => setSelectedLayer(3)}
              type="button"
              value=" "
            />
          </div>
        </span>
      </span>
      <span style={Inputcvr}>
        <label>Dimensions</label>
        <div
          style={{
            border: "1px solid #eee",
            maxWidth: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            className="dimension"
            style={{ width: "4rem", border: "none", padding: ".5rem" }}
          />
          X
          <input
            className="dimension"
            type="text"
            style={{ width: "4rem", border: "none", padding: ".5rem" }}
          />
        </div>
      </span>
      <span style={Inputcvr}>
         <label>Quantity</label>
      </span>
    </div>
  );
};
//css
const Inputcvr = {
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
};
const activebt = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid  blue",
  padding: ".5rem 2rem",
  textAlign: "center",
};
const cover = {
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  height: "10rem",
  zIndex: "5",
  borderRadius: "1rem",
  position: "relative",
  background: "white",
  maxWidth: "1250px",
  margin: "auto",
  bottom: "5rem",
  boxShadow: "0px 5px 30px 0px GREY",
};
const radiocvr = {
  display: "flex",
  flexDirection: "column",
};
const radiowrapper = {
  display: "flex",
  position: "relative",
  gap: "1rem",
};
const radiobt = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #252525",
  cursor: "pointer",
  padding: ".5rem 2rem",
  textAlign: "center",
};
const radio = {
  position: "relative",
  cursor: "pointer",
  minWidth: "100%",
  border: "1px solid",
  opacity: "0",
};
export default InstantQuote;
