var Roles;
(function (Roles) {
    Roles["FS"] = "Full Stack Developer";
    Roles["LH"] = "Lead HR";
    Roles["BA"] = "Business Associate";
    Roles["SA"] = "Senior Associate";
    Roles["LM"] = "Lead Marketer";
})(Roles || (Roles = {}));
var json = [
    {
        "id": 1,
        "FirstName": "Christy",
        "MiddleName": "Graze",
        "LastName": "Parrish",
        "Email": "Alex.2331@gmail.com",
        "PhoneNumber": "782314564",
        "Role": Roles.FS,
        "Address": "Street Pork, Los Angeles"
    },
    {
        "id": 2,
        "FirstName": "Shelby",
        "MiddleName": "Green",
        "LastName": "Wyatt",
        "Email": "Wyattshelby123@gmail.com",
        "PhoneNumber": "734314564",
        "Role": Roles.BA,
        "Address": "Downtown, Boston"
    },
    {
        "id": 3,
        "FirstName": "Natalie ",
        "MiddleName": "Crystal",
        "LastName": "Vasquez",
        "Email": "Vasquez1996@gmail.com",
        "PhoneNumber": "8734314564",
        "Role": Roles.LH,
        "Address": "Green Avenue, Chicago"
    },
    {
        "id": 4,
        "FirstName": "Katherine",
        "MiddleName": "Petrova",
        "LastName": "Peirce",
        "Email": "evil1996@gmail.com",
        "PhoneNumber": "9134314564",
        "Role": Roles.SA,
        "Address": "White Park, Manhattan"
    },
    {
        "id": 5,
        "FirstName": "Daniell ",
        "MiddleName": "Reginald",
        "LastName": "Castellano",
        "Email": "Cast123@gmail.com",
        "PhoneNumber": "993431452",
        "Role": Roles.LM,
        "Address": "Avenue 16th, Ohio"
    },
];
var jsoncopy = json;
var display_table = document.getElementById("tabledata");
function showTable() {
    var display_none = document.getElementById("displaytable").style.display === "none";
    var refresh_button = document.getElementById("table2");
    var load_button = document.getElementById("table1");
    var display_block = document.getElementById("displaytable");
    if (display_none) {
        refresh_button.style.display = "block";
        load_button.style.display = "none";
        display_block.style.display = "block";
    }
    else {
        window.location.reload();
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
        temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
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
    console.log("id of cancel", id);
    var editPanel = document.getElementById(id_name);
    console.log("edit panel", editPanel);
    var savePanel = document.getElementById(id_name1);
    if (editPanel.style.display == 'block') {
        editPanel.style.display = "none";
        savePanel.style.display = "block";
    }
    console.log("idtupe", typeof (id));
    // return ;
    console.log('id n', id);
    var currentrow = document.getElementById(id);
    console.log("currentrow", currentrow);
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
        temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
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
    var rowid = 'row' + id;
    console.log(rowid);
    var selectedrow1 = document.getElementById(rowid);
    var selectedrow1c = selectedrow1.innerHTML;
    console.log("cancel row", selectedrow1);
    var is_editable = selectedrow1.isContentEditable;
    if (is_editable) {
        selectedrow1.contentEditable = "false";
    }
    var i;
    for (i = 1; i <= jsoncopy.length; i++) {
        if (editedContent[i]) {
            temp += "<tr id='row" + i + "'>" + editedContent[i] + "</tr>";
        }
        if (!editedContent[i]) {
            var u = jsoncopy[i - 1];
            temp += "<tr  id=" + "row" + u.id + ">";
            temp += "<td >" + u.FirstName + "</td>";
            temp += "<td>" + u.MiddleName + "</td>";
            temp += "<td>" + u.LastName + "</td>";
            temp += "<td>" + u.Email + "</td>";
            temp += "<td>" + u.PhoneNumber + "</td>";
            temp += "<td>" + u.Role + "</td>";
            temp += "<td>" + u.Address + "</td>";
            temp += "<td> <div class='options'><div id='Edit_Panelrow" + u.id + "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"EditButton('row" + u.id + "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"DeleteButton(" + u.id + ")\"  > Delete </button></div><div id='Save_Panelrow" + u.id + "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"SaveButton(" + u.id + ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"CancelButton(" + u.id + ")\" > Cancel</button> </div></div></td></tr>";
            console.log("u.id", u.id);
        }
        console.log(temp);
        display_table.innerHTML = temp;
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
