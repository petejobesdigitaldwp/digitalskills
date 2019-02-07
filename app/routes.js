const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching 0.1

router.post('/version-0-1/where', function (req, res) { 
  res.redirect('/version-0-1/lep-north-east')
})

// Branching 0.2

router.post('/version-0-2/where', function (req, res) { 
  res.redirect('/version-0-2/lep-ne-skills-demand')
})

