function popitem() {
    var numberitem = document.getElementById('numberitem')
    var num = ""
    for (var i = 100; i <= 350; i++) {

        num += '<option value+"' + i + '">' + i + "</option>"
    }
    numberitem.innerHTML = num

}
popitem()

