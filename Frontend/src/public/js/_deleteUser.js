function deleteRegister(tr) {
    let id = tr.find('td')[0].innerText;
    Swal.fire({
        titleText: 'Tem certeza que deseja excluir o usuário de id ' + id + '?',
        html: '<b>Essa ação é irreversível!<b>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: `Sim`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/musico/delete/" + id,
                type: "DELETE",
                success: function (resultAjax) {
                    Swal.fire({
                        title: 'Sucesso!',
                        icon: 'success',
                        text: "Usuário excluído com sucesso!",
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        resetInfos();
                        window.location.reload();

                    })


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.responseJSON);
                    console.log(xhr.thrownError);
                    console.log(xhr.ajaxOptions);

                    var json = xhr.responseJSON;
                    var lstErros = json.mensagens;
                    if (lstErros.length > 0) {
                        var html2 = "<h4>" + json.retorno + "</h4>";
                        lstErros.forEach(element => {
                            html2 += element;
                            html2 += "<br>";
                        });

                        Swal.fire({
                            title: 'Erro!',
                            icon: 'error',
                            html: html2,
                            confirmButtonText: 'Ok'
                        })
                        resetInfos();
                    }
                }
            })
        } else if (result.isDenied) {
            Swal.fire('Usuário NÃO foi excluído', '', 'info')
        }
    })
}