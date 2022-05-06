/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import Result from './components/Result';

import './App.css';

const App = () => {
    const [stack, setStack] = useState('')
    
    const items = words(stack, /[^-^+^*/]+/g)
    
    const value = items.length > 0 ? items[items.length-1] : '0';
    
    console.log('Renderizacion de la app', value)

    return ( 
        <main className='react-calculator'> 
            <Result value={value}/>

            <Numbers onClickNumber={number => {
                console.log('Click en number', number)
                setStack(`${stack}${number}`)
                }}/>

            <Functions 
                onContentClear={() => {
                    console.log('Content clear')
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0){
                        console.log('onDelete')
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            
            <MathOperations 
                onClickOperation={operation => {
                    console.log('Operacion:', operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log('Equal', equal)
                    setStack(eval(stack).toString())
                }}

            />
        </main>
     );
}
 
export default App;
 
