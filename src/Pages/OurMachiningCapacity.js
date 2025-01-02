import React from "react";
import "./OurMachiningCapacity.css";

const machines = [
    { 
        name: "Blow Moulding", 
        image: "/Blow Moulding.png", 
        description: "Blow Moulding is a manufacturing process used for producing hollow plastic parts. It is commonly used to create containers like bottles. The process involves inflating a plastic tube inside a mould to form the desired shape. This machine is highly efficient in producing high volumes. It ensures precise and consistent product quality. Blow Moulding is widely used in industries like packaging and consumer goods. The ability to produce lightweight yet durable products makes it indispensable. Advanced automation enhances production rates and reduces material waste."
      },
      { 
        name: "Vertical Injection Moulding", 
        image: "/Vertical Injection Moulding.jpg", 
        description: "Vertical Injection Moulding machines are used to inject molten plastic into moulds under high pressure. These machines are designed for producing complex and small parts with great precision. They are highly versatile and energy-efficient. The vertical design ensures efficient space usage in factories. It is ideal for applications requiring high precision and repeatability. These machines are crucial for medical devices, electronics, and automotive components. Their compact design integrates seamlessly into modular manufacturing setups. Vertical Injection Moulding contributes significantly to reducing manufacturing defects."
      },
      { 
        name: "In-House Tooling", 
        image: "/In-House Tooling.jpg", 
        description: "In-house tooling involves designing and manufacturing custom tools and dies used in various machining processes. This capability ensures full control over quality and turnaround time. We specialize in creating precise tools tailored to customer specifications. In-house tooling reduces lead times and enhances production efficiency. It allows for better customization and cost management in manufacturing. This approach minimizes dependency on external vendors and ensures rapid prototyping. The flexibility of in-house tooling supports innovation and process optimization. It plays a vital role in maintaining stringent quality standards."
      },
      { 
        name: "Insert Moulding", 
        image: "/Insert Moulding.jpg", 
        description: "Insert Moulding is a process where pre-formed metal or plastic inserts are placed into a mould before injection of the plastic material. This process is ideal for creating parts that combine the properties of both metal and plastic. It provides durability and strength for complex components. Insert Moulding is highly cost-effective for mass production. It allows manufacturers to create multi-material products with precision. Industries like electronics, medical, and automotive heavily rely on this technology. The process ensures seamless integration of materials into one unit. Its efficiency makes it a preferred choice for high-volume production."
      },
      { 
        name: "Horizontal Injection Moulding", 
        image: "/Horizontal Injection Moulding.png", 
        description: "Horizontal Injection Moulding machines are used for producing plastic parts with high accuracy and efficiency. These machines inject molten plastic into horizontal moulds, allowing for larger and more complex parts. They are highly scalable for mass production and offer quick cycle times. Horizontal machines are used in a wide variety of industries, from automotive to consumer goods. The flexibility in design makes them ideal for diverse applications. The machines offer superior consistency in part production. Automated systems reduce downtime and improve productivity. Their ability to handle complex geometries adds value to end products."
      },
      { 
        name: "SPM (Special Purpose Machine)", 
        image: "/SPM (Special Purpose Machine).jpg", 
        description: "Special Purpose Machines (SPM) are custom-built machines designed for specific tasks. These machines are highly specialized for complex and repetitive production processes. They ensure enhanced precision, productivity, and cost-effectiveness. SPMs are used in industries such as automotive, electronics, and aerospace. The ability to tailor the machine to unique needs makes them a valuable asset in high-demand environments. These machines often integrate advanced technologies like robotics and AI. They help companies achieve high levels of automation and consistency. Customization ensures they adapt to ever-evolving industrial demands."
      },
      { 
        name: "Optical 2D Coordinate Measuring Machine", 
        image: "/IMG_1800-removebg-preview.png", 
        description: "The Optical 2D Coordinate Measuring Machine (CMM) is used for precise measurement of parts and components. It uses optical sensors to capture the dimensions of objects, providing high accuracy without physical contact. This machine is ideal for inspecting delicate or small components. It allows for quick and non-destructive testing. With its advanced software, it generates detailed reports for quality control. The machine is critical for industries requiring stringent dimensional checks. It ensures product consistency and compliance with standards. Its non-contact nature makes it suitable for fragile or sensitive materials."
      }
];

const OurMachiningCapacity = () => {
  return (
    <div className="machining-container">
      <h1>Our Machining Capacity</h1>
      {machines.map((machine, index) => (
        <div
          key={index}
          className={`machining-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="machining-image">
            <img src={machine.image} alt={machine.name} />
          </div>
          <div className="machining-text">
            <h2>{machine.name}</h2>
            <p>{machine.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMachiningCapacity;
