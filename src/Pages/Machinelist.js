import React, { useEffect } from "react";
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

  const injectionMouldingData = [
    { id: 1, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '35 TONNES', noOff: 1, make: 'TOYO' },
    { id: 2, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '40 TONNES', noOff: 1, make: 'NISSEI' },
    { id: 3, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '80 TONNES', noOff: 1, make: 'KRAUSS MASSEI' },
    { id: 4, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '80 TONNES', noOff: 1, make: 'ENGEL' },
    { id: 5, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '120 TONNES', noOff: 1, make: 'NISSEI' },
    { id: 6, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'MITSUBISHI' },
    { id: 7, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'ALL PLAS' },
    { id: 8, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'CINCINNATI' },
    { id: 9, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'HPM' },
    { id: 10, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '250 TONNES', noOff: 1, make: 'VANDORN' },
    { id: 11, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '250 TONNES', noOff: 2, make: 'TOSHIBA' },
    { id: 12, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '500 TONNES', noOff: 1, make: 'VANDORN' },
  ];

  const verticalInsertMouldingData = [
    { id: 1, description: 'VERTICLE INSERT INJECTION MOULDING MACHINE', capacity: '80 TONNES', noOff: 1, make: 'NISSEI' },
    { id: 2, description: 'VERTICLE INSERT INJECTION MOULDING MACHINE - ROTARY', capacity: '100 TONNES', noOff: 1, make: 'HISHIYA-TIE BAR LESS' },
    { id: 3, description: 'VERTICLE INSERT INJECTION MOULDING MACHINE - ROTARY', capacity: '100 TONNES', noOff: 1, make: 'NISSEI' },
  ];

  const blowMouldingData = [
    { id: 1, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '1 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 2, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '3 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 3, description: 'FULLY AUTOMATIC BLOW MOULDING DOUBLE STATION M/c', capacity: '5 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 4, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '15 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 5, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '20 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 6, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '30 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 7, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '40 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 8, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '80 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 9, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '150 LTR', noOff: 1, make: 'JAGMOHAN' },
  ];

  const renderTable = (data, title) => (
    <div className="machines-table">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Description</th>
            <th>Capacity / Specification</th>
            <th>No. Off</th>
            <th>Make</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.capacity}</td>
              <td>{item.noOff}</td>
              <td>{item.make}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="machining-capacity">
      <div className="container">
        <h2 className="section-title">Tool-Room Machines</h2>
        <p className="section-description">
          We are equipped with a wide range of high-performance machines, ensuring the highest precision and quality for all your manufacturing needs. Below is a list of our advanced machinery and their capacities.
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
        <br />

        <div style={{ marginTop: '20px' }}>
          {renderTable(injectionMouldingData, 'Injection Moulding Machines')}
        </div>
        <br />
        <div style={{ marginTop: '20px' }}>
          {renderTable(verticalInsertMouldingData, 'Vertical Insert Injection Moulding Machines')}
        </div>
        <br />
        <div style={{ marginTop: '20px' }}>
          {renderTable(blowMouldingData, 'Blow Moulding Machines')}
        </div>
      </div>
    </section>
  );
};

export default Machines;
