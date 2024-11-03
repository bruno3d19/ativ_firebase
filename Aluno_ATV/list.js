const listStudent = document.querySelector('#html_container')

let content = document.createElement('div')
listStudent.appendChild(content)

let ul = document.createElement('ul')
content.appendChild(ul)

function renderBook(doc) {
    let dataStudent = doc.data()

    let li = document.createElement('li')
    let name = document.createElement('span')
    let email = document.createElement('span')
    let date_nasc = document.createElement('span')
    let cpf = document.createElement('span')
    let rg = document.createElement('span')
    let tel_aluno = document.createElement('span')
    let tel_responsavel = document.createElement('span')

    let exclude = document.createElement('div')
    exclude.textContent = 'X'

    li.setAttribute('data-id', doc.id)
    name.textContent = `Aluno: ${dataStudent.nome}`
    email.textContent = `Email: ${dataStudent.email}`
    date_nasc.textContent = `Data Nascimento: ${dataStudent.data_nascimento}`
    cpf.textContent = `CPF: ${dataStudent.cpf}`
    rg.textContent = `RG: ${dataStudent.rg}`
    tel_aluno.textContent = `Tel (Aluno): ${dataStudent.tel_aluno}`
    tel_responsavel.textContent = `Tel (Responsável): ${dataStudent.tel_responsavel}`


    li.appendChild(name)
    li.appendChild(email)
    li.appendChild(date_nasc)
    li.appendChild(cpf)
    li.appendChild(rg)
    li.appendChild(tel_aluno)
    li.appendChild(tel_responsavel)
    li.appendChild(exclude)

    exclude.addEventListener('click', (event) => {
        event.stopPropagation()


        let id = event.target.parentElement.getAttribute('data-id')

        db.collection("Alunos-FireStore").doc(id).delete()
            .then(() => { window.location.reload() })
    })

    ul.appendChild(li)
}

db.collection("Alunos-FireStore").get()
    .then((snapshot) => { //snapshot = response (Irá gravar os dados recebidos pelo get)
        snapshot.docs.forEach(doc => {
            console.log(doc.data()) //A função "data" traz os dados direto, sem adentrar local/local dentro do objeto
            renderBook(doc)
        });
    })