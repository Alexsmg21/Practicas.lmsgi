$(function () {
    $("section").on("click",function () {
        var texto=$(this).data("texto");
        $("h1").text(texto);
    });
});