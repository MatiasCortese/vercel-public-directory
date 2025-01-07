export default function(req, res) {
    const nombre:string = "Matuli"
    console.log("Soy la api", nombre)
    res.send(nombre)
}