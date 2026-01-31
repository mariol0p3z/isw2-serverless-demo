export default function handler(req, res) {
  const nombre = req.query.nombre || "anonimo";
  
  res.status(200).json({
    mensaje: `Hola ${nombre}`,
    curso: "Ingenieria de Software II",
    timestamp: new Date().toISOString()
  });
}
