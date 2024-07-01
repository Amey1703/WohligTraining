const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url)

        xhr.responseType = 'json';
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = () => {
            resolve(xhr.response);
        }
        
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then((response) => {console.log(response);})
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/users',{
        name: "morpheus",
        job: "leader"
    }).then((response) => {console.log(response);})
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);