import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SearchPanel } from './components/SearchPanel';
declare let module: any

ReactDOM.render(<SearchPanel/>,

document.getElementById('root'));


if (module.hot) {
   module.hot.accept();
}
