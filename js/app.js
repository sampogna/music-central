

$('#add').click(function(){

    $('#list').append(makeRow());
});

function deleteRegister(tr){
    let id = tr.find('td')[0].innerText;
    console.log(id);
    tr.remove();

}



function editRegister(tr){
    console.log(tr);
    Swal.fire({
        title: 'WIP!!',
        text: 'Modal para editar músico de id ' + tr.find('td')[0].innerText,
        icon: 'warning',
        confirmButtonText: 'Cool'
      })

}



function makeRow()
{
    var html = `
    <tr>
    <td class="text-light text-center">${1}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-center"> 
        <i onclick="editRegister($(this).closest('td').closest('tr'))" class="text-warning fas fa-pencil-alt"></i>
        &nbsp;&nbsp;&nbsp;
        <i onclick="deleteRegister($(this).closest('td').closest('tr'))" class="text-danger fas fa-trash-alt"></i>
    </td>
    `;
    return html;


}