class carrera {
    Nombre_Carrera;
    Materias;
    constructor(nombre_carrera,materias){
        super(nombre_carrera,materias)
        this.Nombre_Carrera=nombre_carrera;
        this.Materias=materias;

    }
    Agregar_Carrera = function (carrera){
        this.carrera.push(carrera);
        return carrera;
    }

}

