import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore()
    
    // Gets an array with all the components matched
    const promises = matchRoutes(Routes, req.path).map(({ route }) =>  {
        route.loadData? route.loadData(store) : null;
    });

    Promise.all(promises)
        .then(() => {
            console.log(store.getState());
            res.send(renderer(req, store));
        })
});

app.listen(3000, () => {
    console.log("running in 3000");
});