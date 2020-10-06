  
/*
Insertamos un documento en la colección col002
tendremos que hacer previamente un:
 use bd
 para posicionarlos o usar una base de datos concreta
*/
db.col002.insertOne({ 
    "nombre": "Juan", // Entre comillas es string
    "apellidos": "Sánchez Pérez",
    "edad": 20  // Sin comillas es numérico
})
db.col002.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 22
})
db.col002.find()