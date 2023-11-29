var miAnimal = {
    nombre: "Tigre",
    tipo: "Felino",
    edad: 7,
    hacerSonido: function() {
      return "Rugido";
    },
    presentarse: function() {
      return "Hola, soy un " + this.tipo + " llamado " + this.nombre + ".";
    }
  };
  
  
  var sonidoAnimal = miAnimal.hacerSonido();
  var presentacionAnimal = miAnimal.presentarse();
  

  console.log("Presentación del animal:");
  console.log(presentacionAnimal);
  
  console.log("Sonido del animal:");
  console.log(sonidoAnimal);
  