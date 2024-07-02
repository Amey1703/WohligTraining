import {createServer } from 'http'
import dotenv from 'dotenv'
dotenv.config()
const PORT =  process.env.PORT 

const users = [
    {id:1, name: 'John Smith'},
    {id:2, name: 'Jane Smith'},
    {id:3, name: 'Johnny Smith'},
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
}

// JSON  middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

// Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

// Route handler for POST /api/users
const createUsersHandler = (req, res) => {
    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const newUsers = JSON.parse(body)
        users.push(newUsers)
        res.statusCode = 201;
        res.write(JSON.stringify(newUsers))
    })
}

// Route Handler for GET /api/users/:id
const getUsersByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]
    const user = users.find((user) => user.id === Number(id))

    if(user){
        res.write(JSON.stringify(user))
    }else{
        res.statusCode = 404;
        res.write(JSON.stringify({message:"User not found"}))
    }
    res.end()
}

// not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message:"Route not found"}))
    res.end()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () =>{
            if(req.url ==='/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);

            }else if(req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUsersByIdHandler(req, res);
            } else if ( req.url === '/api/users' && req.method === 'POST' ){
                createUsersHandler(req, res);
            }else{
                notFoundHandler(req, res);
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })