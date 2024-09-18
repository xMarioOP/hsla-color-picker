import { useState } from 'react'
import './App.css'
import ColorBox from './ColorBox';
import Slider from './Slider';
import ColorValueDisplay from './ColorValueDisplay';

const App = () => {
  const [colorValues, setColorValues] = useState({
    hue: 186,
    saturation: 100,
    lightness: 42,
    alpha: 1
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setColorValues((prevColor) => ({
      ...prevColor,
      [name]: name === 'alpha' ? value / 100 : Number(value)
    }))
  }

  const handleCopyHSL = () => {
    const hslValue = `hsla(${colorValues.hue}, ${colorValues.saturation}%, ${colorValues.lightness}%, ${colorValues.alpha})`;
    navigator.clipboard.writeText(hslValue)
      .then(() => {
        alert('Valor HSL copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar el valor HSL: ', error);
      })
  };

  return (
    <div className="main-container">
      <h1 className="title">COLOR PICKER</h1>
      <ColorBox colorValues={colorValues} />
      <div className="inner-container">
        <ColorValueDisplay colorValues={colorValues} />
        <Slider name="hue" value={colorValues.hue} max={360} step={1} onChange={handleChange} label="H" />
        <Slider name="saturation" value={colorValues.saturation} max={100} step={1} onChange={handleChange} label="S" />
        <Slider name="lightness" value={colorValues.lightness} max={100} step={1} onChange={handleChange} label="L" />
        <Slider name="alpha" value={colorValues.alpha * 100} max={100} step={1} onChange={handleChange} label="A" />
      </div>
      <button onClick={handleCopyHSL}>Copiar valor HSL</button>
    </div>
  );
};

export default App;

