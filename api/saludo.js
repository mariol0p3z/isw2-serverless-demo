export default function handler(req, res) {
  res.status(200).json({
    mensaje: "Hola ISW2",
    curso: "Ingenieria de Software II",
    timestamp: new Date().toISOString()
  });
}
