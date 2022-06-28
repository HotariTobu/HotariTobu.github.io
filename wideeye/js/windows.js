function reloadContent(id) {
    document.getElementById(id).contentWindow.location.reload();
}

function toggleVisibility(id) {
    $(`#${id}`).toggle("fast");
}