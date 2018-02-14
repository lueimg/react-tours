import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'components/configStore.js';


const serverRender = (req, context) => {
    return ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );
};

export default serverRender;