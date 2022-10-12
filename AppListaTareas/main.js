(function () {
  //Variables

  var lista = document.getElementById("lista");
  tareaInput = document.getElementById("tareaInput");
  btnNuevaTarea = document.getElementById("btn-agregar");

  //Funciones
  var agregarTarea = function () {
    var tarea = tareaInput.value,
      nuevaTarea = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(tarea);

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
      tareaInput.className = "error";
      return false;
    }

    //Agg el contenido al enlace
    enlace.appendChild(contenido);
    //Le establecemos un atributo href
    enlace.setAttribute("href", "#");
    //Agg el enlace a un elemento li
    nuevaTarea.appendChild(enlace);
    //Agg la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for (var i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }
  };
  var comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agregar tarea");
  };
  var eliminarTarea = function () {
    this.parentNode.removeChild(this);
  };
  //Eventos

  //Agg tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  //Borrando elementos de la lista
  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
})();
