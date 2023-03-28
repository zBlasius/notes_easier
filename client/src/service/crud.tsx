import axios from 'axios';
const host = 'http://localhost:8000';
const user = 'gustavo.blasius@catolicasc.org.br';

interface bdSearchInfo {
    kind:string,
    route:string
}

function get(searchData: bdSearchInfo, data: object) {
    const {kind, route} = searchData;
    data = {...data, kind}
    axios.get(host + route, {
        params: data
    }).then(ret => {
        return ret;
    }).catch(err => {
        throw err;
    })
}

function post(searchData: bdSearchInfo, data: object) {
    const {kind, route} = searchData;
    data = {...data, kind}
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