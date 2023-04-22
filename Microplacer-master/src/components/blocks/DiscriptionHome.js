import Like from "../../svg/like.svg";
import instantQuote from "../../svg/instantQoute.svg";
import support from "../../svg/support.svg";
import Linkcardwithico from "./Linkcardwithico";
const DiscriptionHome = () => {
  const carddetails = [
    {
      title: "Excellent Quality PCBs",
      icon: Like,
      text: "We have our own factories with fully automated production lines to provide high quality and consistency. Certified to ISO 9001:2015, ISO 14001:2015, and IPC-6012E. ",
      link: "www.google.com",
      linkText: " See our quality management >",
    },
    {
      title: "Fast & Stable Delivery",
      icon: instantQuote,
      text: "Get boards produced 24 hours and delivered in 2-4 days. Over 98% of Orders were shipped on time. To iterate more freely as JLCPCB offers low-cost and fast-turnaround services.",
      link: "www.google.com",
      linkText: "How Microplacer works >",
    },
    {
      title:"24 Hour Support",
      icon: support,
      text: "Our friendly support team is available via email(2-hour average response time on office hours), Live Chat, and phone. The real person to help any time of day.",
      link: "www.google.com",
      linkText: "Contact Sales >",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1250px",
        margin: "auto",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <h1 style={styles.heading}>Ordering PCBs at Microplacer is Easy</h1>
      <h5 style={styles.subtitle}>
        Our self-service platform gives you instant quote, and allows real-time
        order tracking
      </h5>
      <div>
        <div>
          <Linkcardwithico details={carddetails} />
        </div>
      </div>
    
    </div>
  );
};
const styles = {
  subtitle: {
    opacity: "50%",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
  },
};
export default DiscriptionHome;
