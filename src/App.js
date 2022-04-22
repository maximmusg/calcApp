import React from 'react';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import Result from './components/Result';

import './App.css';

const App = () => {

    console.log('Renderizacion de la app')
    return ( 
        <main className='react-calculator'> 
            <Result value={undefined}/>

            <Numbers onClickNumber={number => console.log('Click en number', number)}/>

            <Functions 
                onContentClear={() => console.log('Content clear')}
                onDelete={() => console.log('onDelete')}
            />
            
            <MathOperations 
                onClickOperation={operation => console.log('Operacion:', operation)}
                onClickEqual={equal => console.log('Equal', equal)}

            />
        </main>
     );
}
 
export default App;
 
