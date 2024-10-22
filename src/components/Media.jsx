import React from 'react';
import './Media.css';

const Media = () => {
  const images = [
    { id: 1, src: 'https://picsum.photos/id/1018/300/200', alt: 'Image 1' },
    { id: 2, src: 'https://picsum.photos/id/1015/300/200', alt: 'Image 2' },
    { id: 3, src: 'https://picsum.photos/id/1019/300/200', alt: 'Image 3' },
    { id: 4, src: 'https://picsum.photos/id/1016/300/200', alt: 'Image 4' },
    { id: 5, src: 'https://picsum.photos/id/1020/300/200', alt: 'Image 5' },
    { id: 6, src: 'https://picsum.photos/id/1021/300/200', alt: 'Image 6' },
  ];

  return (
    <div className="media">
      <h2>Media Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;