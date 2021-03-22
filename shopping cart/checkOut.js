var user_session = [];
function AddCheckOut(phone) {
    // get phone info
    var obj = document.getElementById(phone);
    var phoneName = obj.getElementsByClassName("name");
    var phonePrice = obj.getElementsByClassName("price");
    //Save phone info as a dictionary
    var user_add = {};
    user_add.name = phoneName[0].innerHTML;
    user_add.price = phonePrice[0].innerHTML;
    //Save user add
    user_session.push(user_add);
    console.log(user_session);
    sessionStorage.setItem("user_cart", JSON.stringify(user_session));
}
function create_table() {
    // get the full cart items 
    var user_data = sessionStorage.getItem("user_cart");
    var user_cart_items = JSON.parse(user_data);
    // Insert  empty rows for all items 
    var table = document.getElementById("AddedItems");
    var body = table.getElementsByTagName("tbody")[0];
    // iterate over each item and add it to a row
    var index = 0;
    for (var _i = 0, user_cart_items_1 = user_cart_items; _i < user_cart_items_1.length; _i++) {
        var item = user_cart_items_1[_i];
        var rows = body.insertRow(index++);
        var newCol1 = rows.insertCell(0);
        newCol1.innerHTML = item.name;
        var newCol2 = rows.insertCell(1);
        newCol2.innerHTML = item.price;
    }
}
