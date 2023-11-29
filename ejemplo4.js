var miAnimal = {
    nombre: "Gato",
    tipo: "Felino",
    edad: 1,
    hacerSonido: function() {
      return "Meow";
    },
    presentarse: function() {
      return "Hola, soy un " + this.tipo + " llamado " + this.nombre + ".";
    }
  };
  
  
  var sonidoAnimal = miAnimal.hacerSonido();
  var presentacionAnimal = miAnimal.presentarse();
  

  console.log(presentacionAnimal);
  
  console.log(sonidoAnimal);
  