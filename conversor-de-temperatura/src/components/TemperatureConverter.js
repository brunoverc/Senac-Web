import React, {useState} from "react";

const TemperatureConverter = () => {
  //Atribuimos o valor inicial vazio para a variável que contém o estado da temperatura.
  let [temperature, setTemperature] = useState("");
  const handleTemperature = (valorTecla) => {
    if(valorTecla === "." && temperature.includes("."))
    {
      return false;
    }
    if(valorTecla === "-" && temperature === ""){
      setTemperature(valorTecla);
      return true;
    }
    if(valorTecla === "." && 
    (temperature === "" || temperature === "-"))
    {
      setTemperature(temperature + "0.");
      return true;
    }

    if(valorTecla !== "-"){
      setTemperature(temperature + valorTecla);
    }
    
  }

  const handleBackSpace = () => {
    //Método do JS Slice(start, end) destinado a remover itens de um array
    //No nosso caso são caracteres de uma string.
    //Cada clique na tecla remove o último caractere da termperatura digitada
    temperature = temperature.slice(0, -1);
    setTemperature(temperature);
  }

  const handleConverter = () => {
    const resultCelsius = document.querySelector("#celsius-temp");
    const resultFahrenheit = document.querySelector("#fahrenheit-temp");
    const resultKelvin = document.querySelector("#kelvin-temp");

    const fromTemp = document.querySelector("#user-choice").options[document.querySelector("#user-choice").selectedIndex].value;
    console.log(fromTemp);
    //Forçamos a conversão da string para número
    temperature = Number(temperature);

    resultCelsius.textContent = "";
    resultFahrenheit.textContent = "";
    resultKelvin.textContent = "";

    if(fromTemp === "C")
    {
      //Arredondamos o número de casas decimais das temperaturas
      const celsiusTemperature = temperature.toFixed(2);
      //Cálculo da temperatura em graus Fahrenheit
      const fahrenheitTemperature = ((temperature * 9) / 5 + 32).toFixed(2);
      const kelvinTemperature = (temperature + 273.15).toFixed(2);

      console.log(celsiusTemperature);
      console.log(fahrenheitTemperature);
      console.log(kelvinTemperature);

      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }
    if(fromTemp === "F")
    {
      const fahrenheitTemperature = temperature.toFixed(2);
      const celsiusTemperature = ((temperature - 32) * 5 / 9).toFixed(2);
      const kelvinTemperature = ((temperature - 32) * 5 / 9 + 273.15).toFixed(2);

      console.log(celsiusTemperature);
      console.log(fahrenheitTemperature);
      console.log(kelvinTemperature);

      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }
    if(fromTemp === "K")
    {
      const kelvinTemperature = temperature.toFixed(2);
      const celsiusTemperature = (temperature - 273.15).toFixed(2);
      const fahrenheitTemperature = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);

      console.log(celsiusTemperature);
      console.log(fahrenheitTemperature);
      console.log(kelvinTemperature);

      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }
    
  }

  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={ temperature } />
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
        <button className="tecla" id="converter" onClick={() => handleConverter()}>
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperature("1")}>1</button>
        <button className="n2 tecla" onClick={() => handleTemperature("2")}>2</button>
        <button className="n3 tecla" onClick={() => handleTemperature("3")}>3</button>
        <button className="n4 tecla" onClick={() => handleTemperature("4")}>4</button>
        <button className="n5 tecla" onClick={() => handleTemperature("5")}>5</button>
        <button className="n6 tecla" onClick={() => handleTemperature("6")}>6</button>
        <button className="n7 tecla" onClick={() => handleTemperature("7")}>7</button>
        <button className="n8 tecla" onClick={() => handleTemperature("8")}>8</button>
        <button className="n9 tecla" onClick={() => handleTemperature("9")}>9</button>
        <button className="n0 tecla" onClick={() => handleTemperature("0")}>0</button>
        <button className="virgula tecla" onClick={() => handleTemperature(".")}>,</button>
        <button className="limpa tecla" onClick={() => handleBackSpace()}>Limpa</button>
        <button className="negativo tecla" onClick={() => handleTemperature("-")}>-</button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
