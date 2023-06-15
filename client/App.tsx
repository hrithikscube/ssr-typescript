import { FunctionComponent } from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux'

import { store } from "./store";
import { Provider } from "react-redux";
import MyComponent from './components/MyComponent';

export const App: FunctionComponent = () => {
    return (
        <div>
            <Provider store={store}>
                <MyComponent />
            </Provider>
        </div>
    )
};
