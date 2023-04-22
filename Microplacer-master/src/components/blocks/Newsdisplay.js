import React from "react";
import {updates} from "../../Data/Updates";
const Newsdisplay = () => {
  return (
    <div
    style={{
        maxWidth:"1250px",
        margin:"auto"
    }}
    >
      <div
        style={{
          margin: "1rem",
          display: "flex",
          alignItems: "center",
          maxHeight: "2rem",
        }}
      >
        <span
          style={{
            background: "#fef2dd",
            color: "#ffac1f",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          News !
        </span>

        <span
          style={{
            maxHeight: "2rem",
            overflow: "hidden",
          }}
        >
          {updates.map((news) => {
            return (
              <span
                style={{
                  display: "block",
                  color: "blue",
                  fontSize: "14px",
                }}
              >
                <span
                  key={news.time.toString}
                  style={{
                    color: "grey",
                    margin: "0px 10px",
                    fontSize: "14px",
                  }}
                >
                  {news.time}
                </span>
                {news.text}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};
export default Newsdisplay;
