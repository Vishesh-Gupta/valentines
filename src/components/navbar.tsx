import React from 'react';

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, index) => currentYear + index); // Generate the next 3 years

  return (
    <nav style={{ backgroundColor: 'lightgray', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ width: '50px', height: '50px', backgroundColor: 'darkgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        V ❤️ L
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '15px' }}>
        {years.map(year => (
          <li key={year}>
            <a 
              href={`#${year}`} 
              style={{ 
                textDecoration: 'none', 
                color: (year === currentYear) ? 'black' : 'gray', // Make the current year active
                pointerEvents: (year === currentYear) ? 'auto' : 'none' // Disable click for past years
              }}
            >
              {year}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
