import { useState } from "react"

function hexToRgb (hex) {
  if (hex === '#ff0000') {
    return 'Ошибка';
  }

  const rgbNumbers = [...hex.match(/\w\w/g)].map(x => parseInt(x, 16)).join();
  return `rgb(${rgbNumbers})`;
}

export const ConverterForm = () => {
  const [color, setColor] = useState('#ffffff')

  function handleChangeColor(e) {
    const { value } = e.target;
    const hexColor = /#([a-f0-9]{6})/gi;

    if (value.length < 7) return;

    if (value.match(hexColor)) {
      setColor(e.target.value);
    } else {
      setColor('#ff0000');
    }
  }

  return (
    <div className="converter" style={{backgroundColor: color}}>
      <div className="converter__container">
        <div className="converter__color-hex">
          <input type="text" className="converter__input" onChange={handleChangeColor} placeholder="e.g. #000000" />
        </div>
        <div className="converter__color-rgb" style={{backgroundColor: color}}>
          <span className="converter__color-text">{hexToRgb(color)}</span>
        </div> 
      </div>
    </div>
  )
}
