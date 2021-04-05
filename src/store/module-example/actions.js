import axios from "axios";

export async function getUniversities(context) {
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        var universities = await axios.get('http://localhost:8080/getuniversities')
        context.commit('addUniversities', {data: universities.data})
    } catch (error) {
        console.error(error)
    }

}

export async function getCareers(context, payload) {
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         var careers = await axios.get('http://localhost:8080/getcareers', {
             params: {
                 university: payload.university
             }
         })
        context.commit('addCareers', {data: careers.data})
    } catch (error) {
        console.error(error)
    }

}

export async function getCareerInfo(context, payload) {
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         var career = await axios.get('http://localhost:8080/careerinfo', {
             params: {
                 career: payload.career
             }
         })
        context.commit('addCareer', {data: career.data})
    } catch (error) {
        console.error(error)
    }

}


export async function getStudents(context) {
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        var students = await axios.get('http://localhost:8080/getstudents')
        context.commit('addStudents', {data: students.data})
    } catch (error) {
        console.error(error)
    }

}

export async function getStudent(context, payload) {
    console.log(payload.cedula)
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         var student = await axios.get('http://localhost:8080/getstudent', {
             params: {
                 id: payload.cedula
             }
         })
        context.commit('setStudent', {data: student.data})
    } catch (error) {
        console.error(error)
    }
}

export async function getNominations(context, payload) {
    console.log(payload.cedula)
    try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         var nominations = await axios.get('http://localhost:8080/getnominations', {
             params: {
                 id: payload.cedula
             }
         })
        context.commit('addNominations', {data: nominations.data})
    } catch (error) {
        console.error(error)
    }
}