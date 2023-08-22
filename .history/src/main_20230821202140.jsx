import React from 'react'
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import { App } from './app/App.jsx';
import { store } from './app/store.jsx';

import './index.css';


const render = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch}
        />,
        document.getElementById('root')
    )
};

render();

store.subscribe(render);


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </Provider>
// );
