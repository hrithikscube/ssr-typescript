import { FunctionComponent } from 'react';
import { useState } from 'react';

export const App: FunctionComponent = () => {

    const [counter, setCounter] = useState(0)

    return <div className='flex flex-col justify-center items-center m-5'>
        <p className='text-6xl font-medium text-red-500'>Hello world</p>
        <br />
        <div className='flex items-center gap-5'>
            <button onClick={() => setCounter(counter - 1)} className='p-3 bg-[#f2f2] text-black font-medium'>decrement</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)} className='p-3 bg-[#f2f2f2] text-black font-medium'>increment</button>
        </div>
    </div>;
};
