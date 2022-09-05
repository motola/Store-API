const notFound = (req, res) => {
    res.status(404).json('Accessed Route not found')
}


module.exports = notFound