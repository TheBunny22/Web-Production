import React from "react";
import { useState } from "react";
import "./billing.css";
import Alu from "../img/alu.png";
import Fr from "../img/fr.png";

const options = [
  5, 10, 15, 20, 25, 30, 50, 75, 100, 125, 150, 200, 250, 300, 400, 450, 500,
  600, 700, 800, 900, 1000,
];
const Billing = () => {
  const [quantity, setQuantity] = useState(5);
  const [cartPCB, setCartPCB] = useState({
    baseMaterial: "FR-4",
    layer: 1,
    x: 20,
    y: 20,
    quantity: quantity,
  });
  const [pcbSpec, setPcbspec] = useState({
    thickness: 1.6,
    color: "green",
    surfaceFinish: "hasl",
    silkscreen: "white",
  });
  const [pcbHighspec, setPcbHighspec] = useState({
    outerCopperWeight: "1oz",
    viaCovering: "tented",
    probtest: true,
    goldFinger: false,
    castellatedHoles: false,
  });
  const [pcbSpecAdva, setPcbSpecAdva] = useState({
    kelvintest: true,
    paperbtweenpcb: false,
  });

  const [visible, setVisible] = useState(false);

  const setSpecification = (e, propertie, value) => {
    console.log(e.target);
    switch (propertie) {
      case "bm":
        setCartPCB({ ...cartPCB, baseMaterial: value });

        // console.log(propertie, value);
        break;
      case "layer":
        setCartPCB({ ...cartPCB, layer: value });
        // console.log(propertie, value);
        break;
      case "dimension":
        // PCBspec.dimension[0] = value;
        setCartPCB({ ...cartPCB, dimension: value });
        // console.log(propertie, value);
        break;
      // dimension is remaining
      case "quantity":
        setCartPCB({ ...cartPCB, quantity: value });
        // console.log(propertie, value);
        break;
      case "thickness":
        setPcbspec({
          ...pcbSpec,
          thickness: value,
        });
        // console.log(propertie, value);
        break;
      case "color":
        // PCBspec.pcbSpec.color = value;
        setPcbspec({
          ...pcbSpec,
          color: value,
        });
        // console.log(propertie, value);
        break;
      case "surface":
        // PCBspec.pcbSpec.surfaceFinish = value;
        setPcbspec({
          ...pcbSpec,
          surfaceFinish: value,
        });
        // console.log(propertie, value);
        break;
      case "silkscreen":
        // PCBspec.pcbSpec.silkscreen = value;
        setPcbspec({
          ...pcbSpec,
          silkscreen: value,
        });
        // console.log(propertie, value);
        break;
      case "outerCopper":
        setPcbHighspec({
          ...pcbHighspec,
          outerCopperWeight: value,
        });
        // console.log(propertie, value);
        // PCBspec.highSpec.outerCopperWeight = value;
        break;
      case "viaCovering":
        setPcbHighspec({
          ...pcbHighspec,
          viaCovering: value,
        });
        // console.log(propertie, value);
        break;
      case "probeTest":
        setPcbHighspec({
          ...pcbHighspec,
          probtest: value,
        });
        // console.log(propertie, value);
        break;
      case "goldFinger":
        setPcbHighspec({
          ...pcbHighspec,
          goldFinger: value,
        });
        // console.log(propertie, value);
        break;
      case "castelledHoles":
        setPcbHighspec({
          ...pcbHighspec,
          castellatedHoles: value,
        });
        // console.log(propertie, value);
        break;
      case "kelvinTest":
        setPcbSpecAdva({
          ...pcbSpecAdva,
          kelvintest: value,
        });
        // console.log(propertie, value);
        break;
      default:
        console.log("unknown refference");
    }
  };
  const [calculation, setCalculation] = useState({});
  const Calculator = () => {
    //unit size in cm (x * y )/100
    //order price = unit size * formula
    // unit price =
    //quantity
    //tax = order price * 18/100
    //Delivery charge = india free
    //Total price  = order price + tax + charges
    //expected shipment = 00/00/00
  };

  const handleChange = (event, element, spec) => {
    let value = event.target.value;
    if (event.target.className === "qt-bt") {
      setQuantity(value);
    }
    setSpecification(event, element, spec);
  };

  const displayoption = (e) => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    console.log(quantity);
    // console.log("displayoption");
  };

  return (
    <div className="billing">
      <div className="billcvr">
        <button
          onClick={() =>
            console.log(cartPCB, pcbSpec, pcbHighspec, pcbSpecAdva)
          }
        >
          Output
        </button>
        <div className="uploadgerber">
          <svg
            width="46"
            height="58"
            viewBox="0 0 46 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.196 54.049H3.4519V3.09509H42.9401V28.5721"
              stroke="#4A4A59"
              strokeWidth="6.01205"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.387 54.049V37.489"
              stroke="#4A4A59"
              strokeWidth="6.01205"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.834 41.9475L33.685 40.0367L37.387 36.2151L41.089 40.0367L42.94 41.9475"
              stroke="#4A4A59"
              strokeWidth="6.01205"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.324 18.3813H33.068"
              stroke="#4A4A59"
              strokeWidth="6.01205"
              strokeLinecap="round"
            />
            <path
              d="M13.324 28.5721H23.196"
              stroke="#4A4A59"
              strokeWidth="6.01205"
              strokeLinecap="round"
            />
          </svg>
          <button className="grberbt">Add Your Gerber File</button>
          <div className="grey">
            Only accept zip or rar, Max 20 MB, All uploads are secure and
            confidential.
          </div>
        </div>

        <div className="input-cvr">
          <label>Base Material</label>
          <span id="bm">
            <div className="radio-tile-group">
           
              <div className="input-container">
                <input
                  className="user-input"
                  id="fr4"
                  type="radio"
                  name="fr4"
                />
                <div>
                  <label id="fr" className="in-label" for="fr4">
                    <img src={Fr} width="50px" />
                    Fr-4
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  className="user-input"
                  id="alu"
                  type="radio"
                  name="fr4"
                />
                <div>
                  <label className="in-label" for="alu">
                    <img src={Fr} width="50px" />
                    Fr-4
                  </label>
                </div>
              </div>
            </div>

            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "bm", "fr4")}
              key="basematerial"
              value="FR-4"
            >
              <img
                src={Fr}
                alt="fr"
                value="FR-4"
                onClick={(event) => handleChange(event, "bm", "fr4")}
              />
              Fr-4
            </button>
            <button className="input-bt" disabled>
              <img src={Alu} alt="alu" />
              Alluminum
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Layer</label>
          <span>
            <button
              className="input-bt "
              onClick={(event) => handleChange(event, "layer", 1)}
            >
              1
            </button>
            <button
              className="input-bt "
              onClick={(event) => handleChange(event, "layer", 2)}
            >
              2
            </button>
            <button
              className="input-bt "
              onClick={(event) => handleChange(event, "layer", 3)}
            >
              3
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Dimensions</label>
          <span>
            <input className="usr-in" type="number" max={350} />
            x
            <input className="usr-in" type="number" max={350} />
            mm
          </span>
        </div>

        <div className="input-cvr">
          <label>Quantity</label>
          <span style={{ padding: "10px" }}>
            <button onClick={displayoption}>{quantity}</button>
            <div className={visible ? "qt-bt-cvr" : "hide"}>
              {options.map((option) => (
                <button
                  className="qt-bt"
                  onClick={(event) =>
                    handleChange(event, "quantity", { option })
                  }
                  value={option}
                  key={option.toString()}
                >
                  {option}
                </button>
              ))}
              <button onClick={() => setVisible(false)}>Submit</button>
            </div>
          </span>
        </div>

        <div className="divider">PCB Specification</div>

        <div className="input-cvr">
          <label>PCB Thickness</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "thickness", 0.8)}
              value="0.8"
            >
              0.8
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "thickness", 1.6)}
              value="1.6"
            >
              1.6
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "thickness", 2.0)}
              value="2.0"
            >
              2.0
            </button>
            max 2mm
          </span>
        </div>

        <div className="input-cvr">
          <label>PCB Color</label>

          <span id="color-choice">
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "green")}
              value="green"
            >
              <span
                className="color"
                onClick={(event) => handleChange(event, "color", "green")}
                id="green"
              ></span>
              Green
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "purple")}
            >
              <span
                className="color"
                id="purple"
                onClick={(event) => handleChange(event, "color", "purple")}
              ></span>
              Purple
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "red")}
              value="red"
            >
              <span
                className="color"
                id="red"
                onClick={(event) => handleChange(event, "color", "red")}
              ></span>{" "}
              Red
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "yellow")}
              value="yellow"
            >
              <span
                className="color"
                onClick={(event) => handleChange(event, "color", "yellow")}
                id="yellow"
              ></span>{" "}
              Yellow
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "blue")}
              value="blue"
            >
              <span
                className="color"
                id="blue"
                onClick={(event) => handleChange(event, "color", "blue")}
              ></span>{" "}
              Blue
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "white")}
              value="white"
            >
              <span
                className="color"
                onClick={(event) => handleChange(event, "color", "white")}
                id="white"
              ></span>{" "}
              White
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "color", "black")}
              value="black"
            >
              <span
                className="color"
                onClick={(event) => handleChange(event, "color", "black")}
                id="black"
              ></span>{" "}
              Black
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Surface Finish</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "surface", "hasl")}
            >
              HASL {"(with Lead)"}
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "surface", "lead-free")}
            >
              Lead Free HASL
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "surface", "enig")}
            >
              ENIG
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Silk Screen</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "silkscreen", "white")}
            >
              <span
                className="color"
                onClick={(event) => handleChange(event, "silkscreen", "white")}
              ></span>
              White
            </button>
          </span>
        </div>

        <div className="divider">High Spec-Option</div>

        <div className="input-cvr">
          <label>Outer Copper Weight</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "outerCopper", "1oz")}
              value="1oz"
            >
              1 oz
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "outerCopper", "2oz")}
              value="2oz"
            >
              2 oz
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Via Covering</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "viaCovering", "tented")}
              value="tented"
            >
              tented
            </button>
            <button className="input-bt" disabled value="untented">
              untented
            </button>
            <button className="input-bt" disabled value="plugged">
              Plugged
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Flying Probe Test</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "probeTest", true)}
              value="test"
            >
              Fully Test
            </button>
            <button className="input-bt" disabled value="nottest">
              Not Test
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Gold Finger</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "goldFinger", true)}
              value="yes"
            >
              Yes
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "goldFinger", false)}
              value="no"
            >
              No
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Castellated Holes</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "castelledHoles", true)}
              value="yes"
            >
              Yes
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "castelledHoles", false)}
              value="no"
            >
              No
            </button>
          </span>
        </div>

        <div className="divider">Advanced Spec-option</div>

        <div className="input-cvr">
          <label>4 Kelvin Test</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "kelvinTest", true)}
              value="yes"
            >
              Yes
            </button>
            <button
              className="input-bt"
              onClick={(event) => handleChange(event, "kelvinTest", false)}
              value="no"
              disabled
            >
              No
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Paper Between PCB</label>
          <span>
            <button className="input-bt" value="yes" disabled>
              Yes
            </button>
            <button className="input-bt" value="no" disabled>
              No
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Appearance</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) =>
                handleChange(event, "Appearance", "IPC Class 2 Standard")
              }
              value="ipc"
            >
              IPC Class 2 Standard
            </button>
          </span>
        </div>

        <div className="input-cvr">
          <label>Slick Screen Technology</label>
          <span>
            <button
              className="input-bt"
              onClick={(event) =>
                handleChange(
                  event,
                  "SilkScreenTech",
                  "INK-jet / Screen Printing Silkscreen"
                )
              }
              value="inkjet"
            >
              INK-jet / Screen Printing Silkscreen
            </button>
          </span>
        </div>
      </div>

      <div className="order-detail">
        <h2>Order Details</h2>
        <div className="tag">Lead Time</div>
        <b className="value"> 7WD</b>
        <div className="tag">Quantity</div>
        <b className="value1"> 00 </b>
        <div className="tag">Unit Price</div>
        <b className="value2"> 00</b>
        <div className="tag">Order Price</div>
        <b className="value3">00</b>
        <div className="tag">Tax {"(18%)"}</div>
        <b className="value4">00</b>
        <div className="tag">Delivery Charge</div>
        <b className="value5">00</b>
        <div className="tag">Total Price</div>
        <b className="value6">00</b>
        <div className="tag">Expected Shipment</div>
        <b className="value7">00/00/00</b>
        <input type="button" id="addToCart" value={"Add To Cart"} />
      </div>
    </div>
  );
};

export default Billing;
