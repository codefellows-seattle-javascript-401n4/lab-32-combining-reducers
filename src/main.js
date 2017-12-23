import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/app';
import {Provider} from 'react-redux';
import createStore from './app/store';

const store = createStore();

class Main extends React.Component{
    constructor(props){
        super(props);
    }

componentDidMount(){
    store.subscribe(()=>console.log('STORE::::', store.getState()));
}

render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
              </Provider>
        )
    }
}
ReactDom.render(<Main/>, document.getElementById('root'));