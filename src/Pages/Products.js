import React, { useEffect } from "react";
import "./Products.css";

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="products-section">
      {/* Blow Moulding Section */}
      <div className="product-category">
        <h2 className="category-title">Blow Moulding</h2>
        <div className="image-grid">
          {[...Array(12)].map((_, index) => (
            <img
              key={`blow-${index + 1}`}
              src={`./s${index + 1}.jpg`}
              alt={`Blow Moulding ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
        <p className="category-description">
          Magnum Polymers specializes in high-quality blow moulding products, ensuring precision and durability for all industrial applications. Our blow moulding process uses advanced machinery and techniques to produce high-volume, intricate parts with exceptional consistency. From plastic bottles to complex industrial components, our blow moulding capabilities ensure excellent performance and reliability.
        </p>
      </div>

      {/* Injection & Insert Moulding Section */}
      <div className="product-category">
        <h2 className="category-title">Injection & Insert Moulding</h2>
        <div className="image-grid">
          {[...Array(8)].map((_, index) => (
            <img
              key={`injection-${index + 13}`}
              src={`./s${index + 13}.jpg`}
              alt={`Injection & Insert Moulding ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
        <p className="category-description">
          Our Injection & Insert Moulding processes are designed to produce complex, precise components with exceptional quality. By injecting molten material into a mould, we are able to create components with intricate designs, high strength, and durability. Our expertise in insert moulding allows us to incorporate additional materials like metal inserts into plastic components, increasing functionality and reducing assembly time. These processes ensure the production of cost-effective and high-performance parts for various industries.
        </p>
      </div>

      {/* Inhouse Tooling & SPM Section */}
      <div className="product-category">
        <h2 className="category-title">Inhouse Tooling & SPM</h2>
        <div className="image-grid">
          {[...Array(8)].map((_, index) => (
            <img
              key={`tooling-${index + 21}`}
              src={`./s${index + 21}.jpg`}
              alt={`Inhouse Tooling ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
        <p className="category-description">
          Our in-house tooling and SPM (Special Purpose Machines) capabilities ensure efficient production with minimal downtime and maximum precision. We design and manufacture our own tools, dies, and fixtures to meet the specific needs of our clients. Our advanced SPMs are capable of handling complex machining tasks with high accuracy, reducing production costs and lead times. By keeping the tooling process in-house, we ensure tighter control over quality and faster response times to market demands.
        </p>
      </div>
    </div>
  );
};

export default Products;
