import React from "react";
import "./imageModal.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={image.download_url} alt={image.author} className="modal-image" />
        <p>Author: {image.author}</p>
        <p>Dimensions: {image.width} x {image.height}</p>
        <a href={image.download_url} download className="download-button">Download</a>
      </div>
    </div>
  );
};

export default ImageModal;
