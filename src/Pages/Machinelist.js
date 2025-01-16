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
    { id: 17, machineType: 'CMM CRYSTA APEX V574', capacity: '500 x 700 x 400', make: 'MITUTOYO' },
    { id: 18, machineType: 'VMM (OPTIV LITE)', capacity: '500 X 400', make: 'HEXAGON' },
  ];

  const injectionMouldingData = [
    { id: 1, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '35 TONNES', noOff: 1, make: 'TOYO' },
    { id: 2, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '40 TONNES', noOff: 1, make: 'NISSEI' },
    { id: 3, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '80 TONNES', noOff: 1, make: 'BATTENFELD' },
    { id: 4, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '80 TONNES', noOff: 1, make: 'ENGEL' },
    { id: 5, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '120 TONNES', noOff: 1, make: 'NISSEI' },
    { id: 6, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'MITSUBISHI' },
    { id: 7, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'BATTENFELD' },
    { id: 8, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '180 TONNES', noOff: 1, make: 'BATTENFELD' },
    { id: 9, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '150 TONNES', noOff: 1, make: 'HPM' },
    { id: 10, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '250 TONNES', noOff: 1, make: 'HPM' },
    { id: 11, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '350 TONNES', noOff: 2, make: 'HPM' },
    { id: 12, description: 'FULLY AUTOMATIC INJECTION MOULDING M/c', capacity: '500 TONNES', noOff: 1, make: 'CINCINATTI' },
  ];

  const verticalInsertMouldingData = [
    { id: 1, description: 'VERTICAL INSERT INJECTION MOULDING MACHINE', capacity: '60 TONNES', noOff: 3, make: 'NISSEI' },
    { id: 2, description: 'VERTICAL INSERT INJECTION MOULDING MACHINE - ROTARY', capacity: '100 TONNES', noOff: 1, make: 'HISHIYA-TIE BAR LESS' },
    { id: 3, description: 'VERTICAL INSERT INJECTION MOULDING MACHINE - ROTARY', capacity: '120 TONNES', noOff: 1, make: 'NISSEI' },
  ];

  const blowMouldingData = [
    { id: 1, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '1 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 2, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '3 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 3, description: 'FULLY AUTOMATIC BLOW MOULDING DOUBLE STATION M/c', capacity: '5 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 4, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '15 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 5, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '20 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 6, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '40 LTR', noOff: 2, make: 'JAGMOHAN' },
    { id: 7, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '80 LTR', noOff: 1, make: 'JAGMOHAN' },
    { id: 8, description: 'FULLY AUTOMATIC BLOW MOULDING M/c', capacity: '150 LTR', noOff: 2, make: 'JAGMOHAN' },
  ];

  const plasticProcessingData = [
    { id: 1, rmType: 'ABS', rmGrade: 'T65XF' },
    { id: 2, rmType: 'AKULON', rmGrade: 'S223-G6' },
    { id: 3, rmType: 'DELRIN', rmGrade: '900PNC010' },
    { id: 4, rmType: 'DELRIN', rmGrade: 'F20-J' },
    { id: 5, rmType: 'DELRIN', rmGrade: 'PM3007GSNT(535NGR)' },
    { id: 6, rmType: 'DURANEX', rmGrade: 'PBT 30% 531 HS' },
    { id: 7, rmType: 'DURETHEN', rmGrade: 'BKV 30Q' },
    { id: 8, rmType: 'EVA', rmGrade: 'N8038' },
    { id: 9, rmType: 'HDPE', rmGrade: 'B-6401' },
    { id: 10, rmType: 'HDPE', rmGrade: 'HD50MA 180' },
    { id: 11, rmType: 'HYTREL', rmGrade: '7246' },
    { id: 12, rmType: 'LUCHAR', rmGrade: 'ARG-10' },
    { id: 13, rmType: 'NYLON', rmGrade: '66BN RN 66GF33' },
    { id: 14, rmType: 'NYLON', rmGrade: 'TORAY(CM3006G50)' },
    { id: 15, rmType: 'NYLON-6', rmGrade: '73G30L BLACK' },
    { id: 16, rmType: 'NYLON-6', rmGrade: 'B30S' },
    { id: 17, rmType: 'NYLON-6', rmGrade: 'M28RC' },
    { id: 18, rmType: 'NYLON-66', rmGrade: 'NGF66B30%' },
    { id: 19, rmType: 'NYLON-66', rmGrade: 'OSAMIDE ASG10C' },
    { id: 20, rmType: 'NYLON-66', rmGrade: 'RGF33W BLACK' },
    { id: 21, rmType: 'NYLON-66', rmGrade: 'ULTRAMID A3WG10 BLACK 00564' },
    { id: 22, rmType: 'NYLON-66', rmGrade: 'ULTRAMID A3W2G10 BLACK 20560' },
    { id: 23, rmType: 'NYLON-66', rmGrade: 'ULTRAMID A3WG6 BLACK 20560' },
    { id: 24, rmType: 'OSAMIDE', rmGrade: '70G 10 HS BK' },
    { id: 25, rmType: 'PC', rmGrade: '500BK06' },
    { id: 26, rmType: 'PC(N)', rmGrade: '143/1111' },
    { id: 27, rmType: 'PI-LON', rmGrade: '630P' },
    { id: 28, rmType: 'PI-LON', rmGrade: 'P NAT' },
    { id: 29, rmType: 'POM', rmGrade: 'N2320' },
    { id: 30, rmType: 'POM', rmGrade: 'W2320' },
    { id: 31, rmType: 'PP', rmGrade: '110MAS' },
    { id: 32, rmType: 'PP', rmGrade: 'D120MA' },
    { id: 33, rmType: 'PP', rmGrade: 'DANA BLACK' },
    { id: 34, rmType: 'PP', rmGrade: 'DELRIN 100PNC010' },
    { id: 35, rmType: 'PP', rmGrade: 'DELRIN 500P NC010' },
    { id: 36, rmType: 'PP', rmGrade: 'DELRIN F-20-03' },
    { id: 37, rmType: 'PPCP', rmGrade: 'B-220MN' },
    { id: 38, rmType: 'PPCP', rmGrade: 'M-304' },
    { id: 39, rmType: 'PPCP', rmGrade: 'M312' },
    { id: 40, rmType: 'PPCP', rmGrade: 'MI-3530' },
    { id: 41, rmType: 'PPCP', rmGrade: 'B-220MN' },
    { id: 42, rmType: 'PPCP', rmGrade: 'M-304' },
    { id: 43, rmType: 'PPCP', rmGrade: 'M-312' },
    { id: 44, rmType: 'PPCP', rmGrade: 'MI-3530' },
    { id: 45, rmType: 'PVC', rmGrade: 'COMPOUND 50 BK' },
    { id: 46, rmType: 'ZYTEL', rmGrade: '101FNC010' },
    { id: 47, rmType: 'ZYTEL', rmGrade: '101LNC' },
    { id: 48, rmType: 'ZYTEL', rmGrade: '70G30HSLR BK' },
    { id: 49, rmType: 'ZYTEL', rmGrade: '70G30HSLR NC' },
    { id: 50, rmType: 'ZYTEL', rmGrade: '7331 JNC010' },
    { id: 51, rmType: 'ZYTEL', rmGrade: 'FR50 BK' },
    { id: 52, rmType: 'ZYTEL', rmGrade: 'MT409ASH NC010' },

  ];

  const renderTable = (data, title, headers = ['S. No.', 'Description', 'Capacity / Specification', 'No. Off', 'Make']) => (
    <div className="machines-table">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              {headers.length === 3 ? (
                <>
                  <td>{item.rmType}</td>
                  <td>{item.rmGrade}</td>
                </>
              ) : (
                <>
                  <td>{item.description || item.rmType}</td>
                  <td>{item.capacity || item.rmGrade}</td>
                  <td>{item.noOff || '-'}</td>
                  <td>{item.make || '-'}</td>
                </>
              )}
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
        <br />
        <div style={{ marginTop: '20px' }}>
        {renderTable(plasticProcessingData, 'Plastic Raw Material Processing Capabilities', ['S. No.', 'RM Type', 'RM Grade'])}
        </div>
      </div>
    </section>
  );
};

export default Machines;
