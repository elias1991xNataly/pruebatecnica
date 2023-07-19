import { useState } from "react";
import React from 'react';

const Contador = ()=>{
const [contador,setContador]=useState(0);



	return(<div>
<button onClick={()=>{setContador(prevCount=>prevCount+1)}}>Incrementar</button>

{contador}
<button onClick={()=>{setContador(prevCount=>contador!==0?prevCount-1:prevCount)}}>Disminuir</button>

	</div>)
}

export default Contador;
