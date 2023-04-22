import Ali1 from "../../svg/aliies/1.png";
import Ali2 from "../../svg/aliies/2.png";
import Ali3 from "../../svg/aliies/3.png";
import Ali4 from "../../svg/aliies/4.png";

import Ali6 from "../../svg/aliies/6.png";
import Ali7 from "../../svg/aliies/7.png";
import Ali8 from "../../svg/aliies/8.png";
import Ali9 from "../../svg/aliies/9.png";
import Ali10 from "../../svg/aliies/10.png";
import Ali11 from "../../svg/aliies/11.png";
import Ali12 from "../../svg/aliies/12.png";
import Ali13 from "../../svg/aliies/13.png";
import Ali14 from "../../svg/aliies/14.png";
const Logocarousal = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <marquee>
        <img src={Ali1} style={styles.img} alt="allies" height={48} />
        <img src={Ali2} style={styles.img} alt="allies" height={48} />
        <img src={Ali3} style={styles.img} alt="allies" height={48} />
        <img src={Ali4} style={styles.img} alt="allies" height={48} />

        <img src={Ali6} style={styles.img} alt="allies" height={48} />
        <img src={Ali7} style={styles.img} alt="allies" height={48} />
        <img src={Ali8} style={styles.img} alt="allies" height={48} />
        <img src={Ali9} style={styles.img} alt="allies" height={48} />
        <img src={Ali10} style={styles.img} alt="allies" height={48} />
        <img src={Ali11} style={styles.img} alt="allies" height={48} />
        <img src={Ali12} style={styles.img} alt="allies" height={48} />
        <img src={Ali13} style={styles.img} alt="allies" height={48} />
        <img src={Ali14} style={styles.img} alt="allies" height={48} />
      </marquee>
    </div>
  );
};
const styles = {
  img: {
    margin: "0 2rem",
  },
};
export default Logocarousal;
