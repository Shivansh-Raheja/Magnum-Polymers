import React from "react";
import { useEffect } from "react";
import './Machine.css'; // Add your custom CSS file for styling

const Machines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const machinesData = [
    { id: 1, machineType: 'LATHE MACHINE', capacity: '6 FEET', make: 'GD' },
    { id: 2, machineType: 'LATHE MACHINE16', capacity: '4 FEET', make: 'GD' },
    { id: 3, machineType: 'UNIVERSAL MILLING MACHINE', capacity: '2" INCH', make: 'PRECICUT' },
    { id: 4, machineType: 'UNIVERSAL MILLING MACHINE', capacity: '2" INCH', make: 'PRECICUT' },
    { id: 5, machineType: 'DRILLING', capacity: '1/2" INCH', make: 'ITCO' },
    { id: 6, machineType: 'VERTICAL MACHINING CENTRE (VMC)', capacity: 'VM700', make: 'TAL.TATA' },
    { id: 7, machineType: 'SURFACE GRINDER', capacity: '9X14"', make: 'MACHINO' },
    { id: 8, machineType: 'SURFACE GRINDER', capacity: '9X18"', make: 'GURU ARJUN' },
    { id: 9, machineType: 'SURFACE GRINDER', capacity: '9X20"', make: 'GURU ARJUN' },
    { id: 10, machineType: 'SURFACE GRINDER (AUTOMATIC)', capacity: '10X32"', make: 'KASTRUP-DANMARK' },
    { id: 11, machineType: 'EDM (SPARK EROSION)', capacity: '520X30', make: 'ELECTRONICA PSR SERIES' },
    { id: 12, machineType: 'CNC WIRECUT', capacity: '600X1050', make: 'PHILIPS' },
    { id: 13, machineType: 'DRILL EDM', capacity: '600X400', make: 'PHILIPS' },
    { id: 14, machineType: 'EDM', capacity: '850X590X370', make: 'PHILIPS' },
    { id: 15, machineType: 'VERTICAL MACHINING CENTRE (VMC) * 2 NOS', capacity: 'VF2', make: 'HAAS' },
    { id: 16, machineType: 'EDM (PZE 400)', capacity: '980x570x400', make: 'PHILIPS' },
    { id: 17, machineType: 'CRYSTA APEX V574', capacity: '500 x 700 x 400', make: 'MITUTOYO' },
  ];

  return (
    <section className="machining-capacity">
      <div className="container">
        <h2 className="section-title">Our Machining Capacity and List of Machines</h2>
        <p className="section-description">
          We are equipped with a wide range of high-performance machines, ensuring the highest precision and
          quality for all your manufacturing needs. Below is a list of our advanced machinery and their capacities.
        </p>
        <div className="machines-table">
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Machine Type</th>
                <th>Capacity</th>
                <th>Make</th>
              </tr>
            </thead>
            <tbody>
              {machinesData.map((machine, index) => (
                <tr key={machine.id}>
                  <td>{index + 1}</td>
                  <td>{machine.machineType}</td>
                  <td>{machine.capacity}</td>
                  <td>{machine.make}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Machines;
