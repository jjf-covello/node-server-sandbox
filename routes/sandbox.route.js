const {Router} = require('express')
const router = Router()
require('dotenv').config()

const logInput = async(req, resp) => {
    console.log('request recieved: ', req)
    console.log('body request recieved: ', req.body)
    console.log('query request recieved: ', req.query)
    console.log('params request recieved: ', req.params)
    resp.status(500).json({
        msg: 'Mocking Test',
    })
}
router.get(process.env.SANDBOX_URL,[
], logInput)
router.post(process.env.SANDBOX_URL,[
], logInput)
router.put(process.env.SANDBOX_URL,[
], logInput)
router.patch(process.env.SANDBOX_URL,[
], logInput)
router.delete(process.env.SANDBOX_URL,[
], logInput)


module.exports = router