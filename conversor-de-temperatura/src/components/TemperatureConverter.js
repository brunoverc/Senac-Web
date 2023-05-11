import React from "react";

const TemperatureConverter = () => {
  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue="" />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter">
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla">1</button>
        <button className="n2 tecla">2</button>
        <button className="n3 tecla">3</button>
        <button className="n4 tecla">4</button>
        <button className="n5 tecla">5</button>
        <button className="n6 tecla">6</button>
        <button className="n7 tecla">7</button>
        <button className="n8 tecla">8</button>
        <button className="n9 tecla">9</button>
        <button className="n0 tecla">0</button>
        <button className="virgula tecla">,</button>
        <button className="limpa tecla"></button>
        <button className="negativo tecla">-</button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
