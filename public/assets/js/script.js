function helloWorld() {
    const hello = $("<h1>");
    hello.text("Hello World!");
    $("#target").prepend(hello);
}

$(document).ready(() => {
    helloWorld();
})