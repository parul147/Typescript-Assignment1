var json = [
    {
        "id": 1,
        "FirstName": "Christy",
        "MiddleName": "Graze",
        "LastName": "Parrish",
        "Email": "Alex.2331@gmail.com",
        "PhoneNumber": "782314564",
        "Role": "Full Stack Developer",
        "Address": "Street Pork, Los Angeles"
    },
    {
        "id": 2,
        "FirstName": "Shelby",
        "MiddleName": "Green",
        "LastName": "Wyatt",
        "Email": "Wyattshelby123@gmail.com",
        "PhoneNumber": "734314564",
        "Role": "Business Associate",
        "Address": "Downtown, Boston"
    },
    {
        "id": 3,
        "FirstName": "NatalieM ",
        "MiddleName": "Crystal",
        "LastName": "Vasquez",
        "Email": "Vasquez1996@gmail.com",
        "PhoneNumber": "8734314564",
        "Role": "Lead Marketer",
        "Address": "Green Avenue, Chicago"
    }
];
var jsoncopy = json;
var display_table = document.getElementById("tabledata");
function showTable() {
    var display_none = document.getElementById("displaytable").style.display === "none";
    var refresh_button = document.getElementById("table1");
    var display_block = document.getElementById("displaytable");
    if (display_none) {
        refresh_button.innerHTML = "REFRESH DATA";
        display_block.style.display = "block";
    }
    else {
        //    window.location.reload();
        display_block.style.display = "block";
    }
}
if (json.length > 0) {
    var temp = "";
    json.forEach(function (u) {
        temp += "<tr  id=" + "row" + u.id + ">";
        temp += "<td >" + u.FirstName + "</td>";
        temp += "<td>" + u.MiddleName + "</td>";
        temp += "<td>" + u.LastName + "</td>";
        temp += "<td>" + u.Email + "</td>";
        temp += "<td>" + u.PhoneNumber + "</td>";
        temp += "<td>" + u.Role + "</td>";
        temp += "<td>" + u.Address + "</td>";
        temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
    });
    // The line below will also give id
    // dynamically to the tables
    //table.id = i+1;
    //close loop
    display_table.innerHTML = temp;
}
function EditButton(id) {
    console.log(id);
    var id_name = 'Edit_Panel' + id;
    var id_name = id_name.toString();
    var id_name1 = 'Save_Panel' + id;
    var id_name1 = id_name1.toString();
    var editPanel = document.getElementById(id_name);
    console.log("edit panel", editPanel);
    var savePanel = document.getElementById(id_name1);
    if (editPanel.style.display == 'block') {
        editPanel.style.display = "none";
        savePanel.style.display = "block";
    }
    // return ;
    var currentrow = document.getElementById(id);
    currentrow.contentEditable = "true";
}
function DeleteButton(id) {
    var newArray = json.filter(function (item) {
        return item.id !== id;
    });
    json = newArray;
    console.log("Debug2:newAray ", newArray);
    var temp = "";
    newArray.forEach(function (u) {
        temp += "<tr  id=" + "row" + u.id + ">";
        temp += "<td>" + u.FirstName + "</td>";
        temp += "<td>" + u.MiddleName + "</td>";
        temp += "<td>" + u.LastName + "</td>";
        temp += "<td>" + u.Email + "</td>";
        temp += "<td>" + u.PhoneNumber + "</td>";
        temp += "<td>" + u.Role + "</td>";
        temp += "<td>" + u.Address + "</td>";
        temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
    });
    display_table.innerHTML = temp;
}
var l = json.length;
var editedContent = [];
function SaveButton(id) {
    console.log("argument of save button", id);
    var rowid = 'row' + id;
    var selectedrow = document.getElementById(rowid);
    var selectedrowcontent = selectedrow.innerHTML;
    console.log('select row content', selectedrowcontent);
    var idint = parseInt(id);
    editedContent[idint] = selectedrowcontent;
    var is_current = selectedrow.isContentEditable;
    if (is_current) {
        selectedrow.contentEditable = "false";
    }
    var id_name = 'Edit_Panel' + rowid;
    var id_name1 = 'Save_Panel' + rowid;
    var editPanel = document.getElementById(id_name);
    var savePanel = document.getElementById(id_name1);
    if (editPanel.style.display == 'none') {
        editPanel.style.display = "block";
        savePanel.style.display = "none";
    }
}
var array = json;
function CancelButton(id) {
    console.log("id", id);
    var intid = parseInt(id);
    console.log("in cancel button");
    console.log("intid", intid);
    console.log(editedContent[intid]);
    var temp = "";
    if (editedContent[intid]) {
        var i;
        for (i = 1; i <= jsoncopy.length; i++) {
            if (i == intid) {
                temp += editedContent[intid];
            }
            if (i != intid) {
                var u = jsoncopy[i - 1];
                temp += "<tr  id=" + "row" + u.id + ">";
                temp += "<td>" + u.FirstName + "</td>";
                temp += "<td>" + u.MiddleName + "</td>";
                temp += "<td>" + u.LastName + "</td>";
                temp += "<td>" + u.Email + "</td>";
                temp += "<td>" + u.PhoneNumber + "</td>";
                temp += "<td>" + u.Role + "</td>";
                temp += "<td>" + u.Address + "</td>";
                temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
            }
        }
        display_table.innerHTML = temp;
    }
    var rowid = 'row' + id;
    var selectedrow1 = document.getElementById(rowid);
    var is_current = selectedrow1.isContentEditable;
    if (is_current) {
        selectedrow1.contentEditable = "false";
    }
    var id_name = 'Edit_Panel' + rowid;
    var id_name1 = 'Save_Panel' + rowid;
    var editPanel = document.getElementById(id_name);
    var savePanel = document.getElementById(id_name1);
    if (editPanel.style.display == 'none') {
        editPanel.style.display = "block";
        savePanel.style.display = "none";
    }
}
