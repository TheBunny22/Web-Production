import React from 'react';
import card1 from "../../img/5.svg";
import card2 from "../../img/6.svg";
import card3 from "../../img/7.svg";
import card4 from "../../img/8.svg";

const Cards = () => {
  return (
    <div>
         <div style={{display: "flex",justifyContent: "space-evenly",}}>


<div
  style={{
    width: "25rem",
    boxShadow: "rgba(0,0,0,0.2) 0px 0px 10px",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "1rem",
  }}
>
  <h2
    style={{
      marginTop: ".5rem",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    1&2 Layers
  </h2>
  <div
    style={{
      textAlign: "center",
    }}
  >
    <img
      src={card2}
      style={{
        height: "15vh",
        margin: "1rem",
      }}
    />
    <div
      style={{
        color: "grey",
        textAlign: "center",
      }}
    >
      From{" "}
      <span
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#2b8ced",
        }}
      >
        $2
      </span>
      /5pcs
      <br />
      Build Time : 24hrs
    </div>
  </div>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: ".5rem",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <button
    className='cards'
      style={{
        justifySelf: "center",
        border: "none",
        borderRadius: "30px",
        background: "#2b8ced",
        color: "white",
      }}
    >
      Quote Now
    </button>
  </div>
</div>



<div
  style={{
    width: "25rem",
    boxShadow: "rgba(0,0,0,0.2) 0px 0px 10px",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "1rem",
  }}
>
  <h2
    style={{
      marginTop: ".5rem",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    6-8 Layers
  </h2>
  <div
    style={{
      textAlign: "center",
    }}
  >
    <img
      src={card3}
      style={{
        height: "15vh",
        margin: "1rem",
      }}
    />
    <div
      style={{
        color: "grey",
        textAlign: "center",
      }}
    >
      From{" "}
      <span
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#2b8ced",
        }}
      >
        $2
      </span>
      /5pcs
      <br />
      Build Time : 24hrs
    </div>
  </div>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: ".5rem",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <button
      style={{
        justifySelf: "center",
        border: "none",
        borderRadius: "30px",
        background: "#2b8ced",
        color: "white",
      }}
    >
      Quote Now
    </button>
  </div>
</div>


<div
  style={{
    width: "25rem",
    boxShadow: "rgba(0,0,0,0.2) 0px 0px 10px",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "1rem",
  }}
>
  <h2
    style={{
      marginTop: ".5rem",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    PCB Assembly
  </h2>
  <div
    style={{
      textAlign: "center",
    }}
  >
    <img
      src={card4}
      style={{
        height: "15vh",
        margin: "1rem",
      }}
    />
    <div
      style={{
        color: "grey",
        textAlign: "center",
      }}
    >
      From{" "}
      <span
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#2b8ced",
        }}
      >
        $8
      </span>
      /5pcs
      <br />
      Build Time : 24hrs
    </div>
  </div>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: ".5rem",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <button
      style={{
        justifySelf: "center",
        border: "none",
        borderRadius: "30px",
        background: "#2b8ced",
        color: "white",
      }}
    >
      Quote Now
    </button>
  </div>
</div>


<div
  style={{
    width: "25rem",
    boxShadow: "rgba(0,0,0,0.2) 0px 0px 10px",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "1rem",
  }}
>
  <h2
    style={{
      marginTop: ".5rem",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    3D Printing
  </h2>
  <div
    style={{
      textAlign: "center",
    }}
  >
    <img
      src={card1}
      style={{
        height: "15vh",
        margin: "1rem",
      }}
    />
    <div
      style={{
        color: "grey",
        textAlign: "center",
      }}
    >
      From{" "}
      <span
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#2b8ced",
        }}
      >
        $1
      </span>
      /5pcs
      <br />
      Build Time : 24hrs
    </div>
  </div>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: ".5rem",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
      }}
    >
      <span class="material-symbols-outlined">check_small</span>
      $56/㎡ for Batch production
    </div>
    <button
      style={{
        justifySelf: "center",
        border: "none",
        borderRadius: "30px",
        background: "#2b8ced",
        color: "white",
      }}
    >
      Quote Now
    </button>
  </div>
</div>
</div>
    </div>
  )
}

export default Cards