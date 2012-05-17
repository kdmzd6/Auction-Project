function popitem() {
    var numberitem = document.getElementById('numberitem')
    var num = ""
    for (var i = 100; i <= 350; i++) {

        num += '<option value+"' + i + '">' + i + "</option>"
    }
    numberitem.innerHTML = num

}
popitem()
document.getElementById("Enter").onclick= function() {
  var itempackage = {}
    itempackage.number = document.getElementById('numberitem').value
    itempackage.name = document.getElementById('itemname').value
    itempackage.desc = document.getElementById('itemdesc').value
    itempackage.value = document.getElementById('itemvalue').value
    itempackage.cost = document.getElementById('itemcost').value
  alert (itempackage.number + " " + itempackage.name + " " + itempackage.desc + " " + itempackage.value + " " + itempackage.cost);

}


