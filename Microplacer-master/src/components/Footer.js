import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "#353535",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div>
        <h3 style={styles.heading1}>Company</h3>
      </div>
      
      <div>
        <h3 style={styles.heading1}>Support</h3>
      </div>

      <div style={
        {
          width:"500px",
          display:"flex",
          flexDirection:"column"
        }
      }>
      {/* display flex column */}
        <div  style={{
          display:"flex",
          justifyContent:"space-evenly"
        }}>
          <div>
            <h3 style={styles.heading1}>Network Site</h3>
          </div>
          <div>
            logos
          </div>
        </div>
        <div>fiuwegfiuwgeufrgweufguweg</div>  
      </div>


    </div>
  );
};

const styles = {
  heading1:{
    color:"whitestyles."
  }
}

export default Footer;