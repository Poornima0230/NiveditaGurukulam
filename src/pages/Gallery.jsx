import React from "react";

import "../styles/gallery.css";
import { GalleryPreview } from "../components/ui/GalleryPreview";

export const Gallery = () => {
  return (
    <section className="gallery-preview">
      <div className="container" data-aos="fade-up">
        <h2 data-aos="zoom-in"> Glimpses of Gurukulam Life</h2>
        <p data-aos="zoom-in">
          Some beautiful moments from our campus and celebrations
        </p>

        <GalleryPreview showViewAll={false} />
      </div>
    </section>
  );
};
