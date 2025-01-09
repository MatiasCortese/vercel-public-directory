import { send } from 'micro'
import { methods } from 'micro-method-router'

export { send, methods }
// module.exports = methods({
//     async get(req, res) {
//         return send(res, 200, "It's a get request")
//     },
//     async post(req, res){
//         return send (res, 200, "It's a post request")
//     }
// })