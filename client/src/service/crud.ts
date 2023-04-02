import axios from 'axios';
import {BdSearchInfo, BdDataInfo} from '../interfaces/interface'

const host = 'http://localhost:8000';

function get(searchData: BdSearchInfo, data: BdDataInfo) {
    const {route} = searchData;
    
    console.log('GET','searchData: ', searchData, 'data: ', data)
    axios.get(host + route, {
        params: data
    }).then(ret => {
        return ret;
    }).catch(err => {
        throw err;
    })
}

function post(searchData: BdSearchInfo, data: BdDataInfo) {
    const {route} = searchData;
    
    console.log('POST','searchData: ', searchData, 'data: ', data)
    axios.post(host + route, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

export default {
    get,
    post
}