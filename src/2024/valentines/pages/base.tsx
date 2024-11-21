import React from 'react';

const BasePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ color: 'white' }}>Bubu and Dudu</h2>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src="path/to/bubu.png" alt="Bubu" style={{ width: '100px', height: '100px', margin: '10px' }} />
        <img src="path/to/dudu.png" alt="Dudu" style={{ width: '100px', height: '100px', margin: '10px' }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '50px',
          color: 'red'
        }}>
          ❤️
        </div>
      </div>
    </div>
  );
};

export default BasePage;
