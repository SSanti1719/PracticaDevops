var miAnimal = {
    nombre: "León",
    tipo: "Felino",
    edad: 5,
    hacerSonido: function() {
      return "Rugirrrr";
    },
    presentarse: function() {
      return "Hola, soy un " + this.tipo + " llamado " + this.nombre + ".";
    }
  };
  

  var sonidoAnimal = miAnimal.hacerSonido();
  var presentacionAnimal = miAnimal.presentarse();
  

  console.log(presentacionAnimal);
  console.log(sonidoAnimal);
  