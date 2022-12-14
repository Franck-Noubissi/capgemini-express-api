import { contacts } from "./data.js";

function getContacts(req, res) {
    res.status(200).json(contacts)
}

function getContactById(req, res) {
    const id = req.params.id;
    var contact = contacts.find((user) => user.id === id)
    res.status(200).json(contact)
}

function addContact(req, res) {
    const data = {
        id: req.body.id,
        nom: req.body.nom,
        telephone: req.body.telephone
    }

    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export { getContactById, getContacts, addContact }