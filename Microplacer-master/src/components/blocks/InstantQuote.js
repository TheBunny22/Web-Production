import React from "react";
import { useState } from "react";
import uploadIcon from "../../img/uploadicon.png";
import "./Instantstyle.css";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CButton,
} from "@coreui/react";
const InstantQuote = () => {
  // handle uploading of files
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
  // setting layer
  const [selectedLayer, setSelectedLayer] = useState(1);
  // setting x and y dimendsion of pcb
  const [xdimension, setXdimension] = useState(20);
  const [ydimension, setYdimension] = useState(20);

  const handleXdimension = (e) => {
    var num = e.target.value;
    setXdimension(num);
    if (num > 350) {
      setXdimension(350);
    }
    console.log(num);
  };

  const handleYdimension = (e) => {
    var num = e.target.value;
    setYdimension(num);
    if (num > 350) {
      setYdimension(350);
    }
    console.log(num);
  };

  // quantity

  const options = [
    5, 10, 15, 20, 25, 30, 50, 75, 100, 125, 150, 200, 250, 300, 400, 450, 500,
    600, 700, 800, 900, 1000,
  ];

  const [quantity, setQuantity] = useState(5);
  const handleQuantityChange = (event, element, spec) => {
    let value = event.target.value;
    if (event.target.className === "qt-bt") {
      setQuantity(value);
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
            Width: "20rem",
           fontSize:"14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="number"
            value={xdimension}
            onChange={handleXdimension}
            className="dimension"
            style={{ width: "5rem", border: "none", padding: ".5rem" }}
          />
          X
          <input
            className="dimension"
            type="number"
            value={ydimension}
            onChange={handleYdimension}
            style={{ width: "5rem", border: "none", padding: ".5rem" }}
          />
        </div>
      </span>
      <span style={Inputcvr}>
        <label>Quantity</label>
        <span>
          <CDropdown>
            <CDropdownToggle style={buttonstyle}>{quantity}</CDropdownToggle>
            <CDropdownMenu>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                  gap: "1rem",
                  padding: "1rem",
                }}
              >
                {options.map((option) => (
                  <button
                    className="qt-bt"
                    style={buttonstyle}
                    onClick={(event) =>
                      handleQuantityChange(event, "quantity", { option })
                    }
                    value={option}
                    key={option.toString()}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </CDropdownMenu>
          </CDropdown>
        </span>
      </span>
      <span style={Inputcvr}>
        <span style={{
          scale:"1.5",
       
        }}>
          <CButton>Instant Quote</CButton>
        </span>
      </span>
    </div>
  );
};

//css
const buttonstyle = {
  background: "white",
  border: "1px solid #eee",
  color: "black",
  padding:"1rem"
};
const Inputcvr = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center",
  fontSize:"14px",
};
const activebt = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid  blue",
  padding: ".8rem 2rem",
  textAlign: "center",
};
const cover = {
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  height: "10rem",

  gap:"1rem",
  zIndex: "5",
  borderRadius: "1rem",
  position: "relative",
  background: "white",
  maxWidth: "1250px",
  margin: "auto",
  bottom: "5rem",
  boxShadow: "0px 0px 2px 0px GREY",
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
  border: "1px solid #eee",
  cursor: "pointer",
  padding: ".8rem 2rem",
  textAlign: "center",
};

export default InstantQuote;
