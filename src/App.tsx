import MainPage from './pages/main'; // Importing the MainPage component
import Navbar from './components/navbar'; // Importing the Navbar component
import Footer from './components/footer'; // Importing the Footer component
import Countdown from './components/countdown'; // Importing the Countdown component

const whiteStyle = { backgroundColor: 'white' }; // Changed to solid white color

function App() {
  const targetDate = new Date(new Date().getFullYear() + 1, 1, 14); // Set target date for countdown

  return (
    <div className="App" style={whiteStyle}>
      <Navbar /> {/* Adding the Navbar component */}
      <Countdown targetDate={targetDate} /> {/* Adding the Countdown component before MainPage */}
      <MainPage /> {/* Adding the MainPage component */}
      <Footer /> {/* Adding the Footer component */}
    </div>
  );
}

export default App;
