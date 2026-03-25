import "../../styles/footer.css";
import img from "../../assets/images/footer.jpeg";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <img src={img} alt="image" className="img" />
        <p className="footer-para">
          Design and Developed by <h3>Vignora Edge</h3>
        </p>
      </div>
    </section>
  );
};
