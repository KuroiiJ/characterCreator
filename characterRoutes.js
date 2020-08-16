const express = require('express')
const router = express.Router()
const path = require('path')
const Character = require(path.join(__dirname, './characterModel'))

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const character = new Character({
        name: req.body.name,
        profession: req.body.profession,
        race: req.body.race
    })
    try {
        const newChar = await character.save()
        res.status(201).json(newChar)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router