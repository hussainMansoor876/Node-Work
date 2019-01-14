const express = require('express');
const router = express.Router();

router.use('/user',()=>{
    console.log('User***')
})

router.use('/post',()=>{
    console.log('Post***')
})

module.exports = router