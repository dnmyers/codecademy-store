import React from 'react'
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

import { App } from './app/App.jsx';
import { store } from './app/store.jsx';

import './index.css';

const root = createRoot(document.getElementById('root'));

const render = () => {
    root.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch}
        />
    )
};

render();

store.subscribe


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </Provider>
// );
