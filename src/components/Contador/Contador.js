import { useState } from "react";
import React from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);
	//función para sumar uno
	function addOne() {
		setContador(prevCount => prevCount + 1)
	}
	//función para restar uno
	function restOne() {
		setContador(prevCount => contador !== 0 ? prevCount - 1 : prevCount)
	}



	return (<div>
		<button onClick={() => addOne()}>Incrementar</button>

		{contador}
		<button onClick={() => restOne()}>Disminuir</button>

	</div>)
}

export default Contador;
