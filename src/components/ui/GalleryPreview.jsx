import "../../styles/gallery.css";
// import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img10.webp";
import img3 from "../../assets/images/img11.webp";
import img4 from "../../assets/images/img12.webp";
import img5 from "../../assets/images/img3.jpg";
import img6 from "../../assets/images/img4.jpeg";
import img7 from "../../assets/images/img5.jpeg";
import img8 from "../../assets/images/img6.jpeg";
import img9 from "../../assets/images/img7.jpg";
import img11 from "../../assets/images/img9.webp";
import { Link } from "react-router-dom";

export const GalleryPreview = ({ showViewAll = true }) => {
  // images
  const galleryImages = [
    { src: img1, alt: "School Campus View 1" },
    { src: img2, alt: "Students Activity" },
    { src: img3, alt: "Classroom Scene" },
    { src: img4, alt: "Cultural Event" },
    { src: img5, alt: "Hostel Life" },
    { src: img6, alt: "Prayer/Assembly" },
    { src: img7, alt: "Sports Day" },
    { src: img8, alt: "New Building" },
    { src: img9, alt: "Festival Celebration" },
    { src: img11, alt: "Campus Garden" },
  ];
  //   const navigate = useNavigate();

  return (
    <section className="gallery-preview">
      <div
        className="container"
        // data-aos="fade-up"
      >
        {/* <h2> Glimpses of Gurukulam Life</h2>
        <p>Some beautiful moments from our campus and celebrations</p> */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item" data-aos="fade-up">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy" // improves performance
                className="gallery-img"
              />
              {/* Optional: overlay on hover */}
              <div className="overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <Link to="gallery" className="btn view-all" data-aos="fade-up">
            View Full Gallery →
          </Link>
        )}
        {/* </div> */}
      </div>
    </section>
  );
};
