// -----------Back-end---------//
const express = require('express')
const router = express.Router()

// -----------Controller---------//
const UserController = require('../controllers/UserController')


// -----------Router---------//

router.get('/', UserController.index)

router.post('/', UserController.store)

router.get('/:id', UserController.show)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.destroy)


module.exports = router