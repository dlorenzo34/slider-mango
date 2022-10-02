import React, { useState } from 'react';
import PriceSlider from './components/slider/PriceSlider'

function App() { 
	const [maxSliderValue, setMaxSliderValue] = useState(10);

	function handleRangeChange(event){
		return setMaxSliderValue(event.target.value);
	}

	return (
		<React.Fragment>
			<span>Set maximum slider value: </span><input type="number" aria-label="max-price" value={maxSliderValue} min="10" max="60" onChange={handleRangeChange}></input>
			<PriceSlider maxValue={maxSliderValue}/>
		</React.Fragment>
	);
}

export default App;