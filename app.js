$(document).ready(function() {
var items = JSON.parse(localStorage["items"]) || [];

function addToList(val) {
  $("#pendingItems").append("<li>" + val + "  <button class='purchasedItem'>Purchased</button> <button class='deleteItem'>Delete Item</button></li>");
}

for (var i = 0; i < items.length; i++) {
  addToList(items[i]);
}

var addGoods = function() {
  var val = $("#item").val();
  if (val !== "") {
  items.push(val);
  localStorage["items"] = JSON.stringify(items);
  addToList(val, items.length - 1);
}
  $("#item").val("").focus();
}

$("#addItem").click(addGoods);
$("#item").keyup(function(event) {
  if (event.keyCode === 13) {
    addGoods();
  }
});

$('#pendingItems').on('click', '.purchasedItem', function() {
  localStorage["items"] = JSON.stringify(items);
  $(this).parent('li').addClass('purchased');
});

$('#pendingItems').on('click', '.deleteItem', function() {
  items.splice($(this).parent('li').index(), 1);
  localStorage["items"] = JSON.stringify(items);
  $(this).parent('li').remove();
});

});