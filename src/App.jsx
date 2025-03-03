import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ImageModal from "./ImageModal";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const observer = useRef();

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=9`);
      setImages((prevImages) => [...prevImages, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError("Failed to load images");
      setLoading(false);
    }
  };

  const lastImageRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div className="gallery-container">
 
      {error && <p className="error">{error}</p>}
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={image.id}
            ref={index === images.length - 1 ? lastImageRef : null}
            src={image.download_url}
            alt={image.author}
            onClick={() => setSelectedImage(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {loading && <p className="loading">Loading...</p>}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;

