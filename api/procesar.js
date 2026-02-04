export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";
  const timestamp = new Date().toISOString()

  if(nombre == "error"){
    return res.status(500).json({
      error: "Nombre no puede ser error",
      timestamp
    })
  }
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp
  });
}
