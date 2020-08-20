//Procurando o botão

document.querySelector('#add-time')

    .addEventListener('click', cloneField)

function cloneField() {
    //duplicar campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Pegar os campos para depois limpar
    const fields = newFieldContainer.querySelectorAll('input');

    //Limpar cada campo
    fields.forEach(function (field) {
        //Pegar os fields
        field.value = "";
        []
    });

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}