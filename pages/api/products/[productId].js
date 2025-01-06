// le llamamos [productId] al archivo ya que escribirlo asi indica a Vercel que no es el nombre exacto de la ruta. Indica si, por el nombre de la carpeta, que entraremos a /products/loquesea
export default function test(req, res) {
    res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        test: true
    })
}