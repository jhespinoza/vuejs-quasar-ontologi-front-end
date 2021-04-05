export function addUniversities(state, payload) {
    state.universities = [...payload.data]
}

export function addCareers(state, payload) {
    state.careers = [...payload.data]
}

export function addCareer(state, payload) {
    if (payload.data.length > 0) {
        state.career.nombre = payload.data[0].NombreCarrera
        state.career.cupos = payload.data[0].Cupos
        state.career.puntajeMin = payload.data[0].PuntajeMinimo
    }
}

export function addStudents(state, payload) {
    state.students = payload.data.map(function (x) {
        return {
            label: x.nombre + " "+ x.apellido,
            value: x.cedula
        }
    })
}

export function setStudent(state, payload) {
   if (payload.data.length > 0) {
        state.student.nombre = payload.data[0].Aspirante
        state.student.cedula = payload.data[0].Cedula
        state.student.puntaje = payload.data[0].Puntaje
    }
}

export function addNominations(state, payload) {
    state.nominations = [...payload.data]
}
