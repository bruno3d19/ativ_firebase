// CADASTRO DO ESTUDANTE -----------------------------------------------------------------------------------------------------
const formStudent = document.querySelector("#student_form")

formStudent.addEventListener('submit', (e) => {
    e.preventDefault()

    db.collection("Alunos-FireStore").add({
        nome: formStudent.form_name.value,
        email: formStudent.form_email.value,
        cpf: formStudent.form_cpf.value,
        rg: formStudent.form_rg.value,
        tel_aluno: formStudent.form_tel_student.value,
        tel_responsavel: formStudent.form_tel_resp.value,
        data_nascimento: formStudent.form_date.value
    }).then(() => {
        formStudent.form_name.value = ""
        formStudent.form_email.value = ""
        formStudent.form_cpf.value = ""
        formStudent.form_rg.value = ""
        formStudent.form_tel_student.value = ""
        formStudent.form_tel_resp.value = ""
        formStudent.form_date.value = ""

        window.location.reload()
    })
})