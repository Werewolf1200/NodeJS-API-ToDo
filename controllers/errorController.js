const error404 = (req, res) => {
    res.status(404).json({
        code: 404,
        message: "La página no existe"
    });
};

export default {
    error404
}