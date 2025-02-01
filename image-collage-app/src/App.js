//import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/imageUpload';  // Import ImageUpload component

function App() {
  return (
    <div className="App">
      <h1>Image Collage Creator</h1>
      <ImageUpload /> {/* Add the ImageUpload component here */}
    </div>
  );
}

export default App;
