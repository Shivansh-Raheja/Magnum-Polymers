import React, { useEffect, useState } from "react";
import "./OurMachiningCapacity.css";
import { Link } from "react-router-dom";

const machines = [
    { 
        name: "Blow Moulding - [1.0 - 150 LTRS]", 
        image: "/blowm.png", 
        description: "Blow Moulding is a manufacturing process used for producing hollow plastic parts. It is commonly used to create containers like bottles. The process involves inflating a plastic tube inside a mould to form the desired shape. This machine is highly efficient in producing high volumes. It ensures precise and consistent product quality. Blow Moulding is widely used in industries like packaging and consumer goods. The ability to produce lightweight yet durable products makes it indispensable. Advanced automation enhances production rates and reduces material waste."
      },
      { 
        name: "Vertical Injection Moulding - [60 - 120 TONNES]", 
        image: "/vertical.jpg", 
        description: "Vertical Injection Moulding machines are used to inject molten plastic into moulds under high pressure. These machines are designed for producing complex and small parts with great precision. They are highly versatile and energy-efficient. The vertical design ensures efficient space usage in factories. It is ideal for applications requiring high precision and repeatability. These machines are crucial for medical devices, electronics, and automotive components. Their compact design integrates seamlessly into modular manufacturing setups. Vertical Injection Moulding contributes significantly to reducing manufacturing defects."
      },
      { 
        name: "Tool-Room", 
        image: "/toolroom.jpg", 
        description: "Tool-Room involves designing and manufacturing custom tools and dies used in various machining processes. This capability ensures full control over quality and turnaround time. We specialize in creating precise tools tailored to customer specifications. It reduces lead times and enhances production efficiency. It allows for better customization and cost management in manufacturing. This approach minimizes dependency on external vendors and ensures rapid prototyping. The flexibility of in-house tooling supports innovation and process optimization. It plays a vital role in maintaining stringent quality standards.",
        link:"/carausel"
      },
      { 
        name: "Horizontal Injection Moulding [50 - 500 TONNES]", 
        image: "/horizontal.jpg", 
        description: "Horizontal Injection Moulding machines are used for producing plastic parts with high accuracy and efficiency. These machines inject molten plastic into horizontal moulds, allowing for larger and more complex parts. They are highly scalable for mass production and offer quick cycle times. Horizontal machines are used in a wide variety of industries, from automotive to consumer goods. The flexibility in design makes them ideal for diverse applications. The machines offer superior consistency in part production. Automated systems reduce downtime and improve productivity. Their ability to handle complex geometries adds value to end products."
      },
      { 
        name: "SPM (Special Purpose Machine)", 
        image: "/SPM (Special Purpose Machine).jpg", 
        description: "Special Purpose Machines (SPM) are custom-built machines designed for specific tasks. These machines are highly specialized for complex and repetitive production processes. They ensure enhanced precision, productivity, and cost-effectiveness. SPMs are used in industries such as automotive, electronics, and aerospace. The ability to tailor the machine to unique needs makes them a valuable asset in high-demand environments. These machines often integrate advanced technologies like robotics and AI. They help companies achieve high levels of automation and consistency. Customization ensures they adapt to ever-evolving industrial demands."
      },
      { 
        name: "Vision Measuring Machine", 
        image: "/optiv-lite-olm-01.jpg", 
        description: "The Vision Measuring Machine (VMM) is used for precise measurement of parts and components. It uses optical sensors to capture the dimensions of objects, providing high accuracy without physical contact. This machine is ideal for inspecting delicate or small components. It allows for quick and non-destructive testing. With its advanced software, it generates detailed reports for quality control. The machine is critical for industries requiring stringent dimensional checks. It ensures product consistency and compliance with standards. Its non-contact nature makes it suitable for fragile or sensitive materials."
      },
      { 
        name: "CRYSTA-Apex coordinate measuring machine", 
        image: "/mut3.jpg", 
        description: "The latest generation CRYSTA-Apex coordinate measuring machines, the new CRYSTA-Apex V Series, is packed with state of the art technology, necessary for performing very accurate measurements at high speed. All new, using Mitutoyo’s world-renowned ABS scales, the CRYSTA-Apex V series has a high resistance to environmental conditions and does not require to perform homing upon start-up. SMS capability enables status and service monitoring, ready for use in a Smart Factory environment.A future proof investment, the CRYSTA-Apex V is capable of tackling any task you might have in the future thanks to its ability to change or add probe systems and software with ease."
      }
];

const OurMachiningCapacity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [visibleIndexes, setVisibleIndexes] = useState([]);
  
    const handleScroll = () => {
      const items = document.querySelectorAll(".machining-item");
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setVisibleIndexes((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Trigger on mount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="machining-container">
        <h1 style={{ fontWeight: "bold" }}>Our Manufacturing Capabilities</h1>
        {machines.map((machine, index) => (
          <div
            key={index}
            className={`machining-item ${index % 2 === 0 ? "left" : "right"} ${
              visibleIndexes.includes(index) ? "visible" : ""
            }`}
          >
            <div className="machining-content">
              <div className="machining-image">
                <img src={machine.image} alt={machine.name} />
              </div>
              <div className="machining-text">
                <h2>{machine.name}</h2>
                <p>{machine.description}</p>
                {machine.link && (
                <Link to={machine.link} className="machining-link">
                  Learn More
                </Link>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default OurMachiningCapacity;