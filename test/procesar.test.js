import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
  resultado: "Nombre procesado: JUAN",
  longitud: 4
  });
});

test("procesar maneja nombre ausente", () => {
  const req = { query: {} };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
  assert.equal(res.body.longitud, 7) //Verifica que si muestre siempre como longitud 7 ya que es la cantidad de caracteres que posee anonimo
});

//Crear prueba para validar que el formato del JSON de salida sea consistente
test("validar formato del JSON", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null, 
    body: null,
    status(code){
      this.statusCode = code;
      return this;
    },
    json(payload){
      this.body = payload;
      return this;
    }
  };
  
  handler(req, res);  

  assert.equal(res.statusCode, 200);
  //Validar estructura
  assert.ok(typeof res.body === "object");
  assert.ok("resultado" in res.body);
  assert.ok("longitud" in res.body);
  //Validar tipos
  assert.equal(typeof res.body.resultado, "string");
  assert.equal(typeof res.body.longitud, "number");
  //Validar formato en mayuscula
  assert.ok(res.body.resultado.endsWith("JUAN"));
});
