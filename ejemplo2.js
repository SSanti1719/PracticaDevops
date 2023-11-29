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
  

  console.log(presentacionAnimal);
  
  console.log(sonidoAnimal);
  