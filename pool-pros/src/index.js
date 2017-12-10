import React                    from 'react';
import ReactDOM                 from 'react-dom';
import App                      from './App';
import registerServiceWorker    from './registerServiceWorker';

import './reset.css';
import './assets/fonts/ssPika/ss-pika.css';
import './index.css';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();