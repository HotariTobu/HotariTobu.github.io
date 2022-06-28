function reloadContent(id) {
    const windowContent = $(`#${id}`);
    const url = windowContent.attr("src");
    windowContent.attr("src", url);
}

function toggleVisibility(id) {
    $(`#${id}`).parent().toggle("fast");
}