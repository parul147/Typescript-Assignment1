enum Roles {
  FS = "Full Stack Developer",
  LH = "Lead HR",
  BA = "Business Associate",
  SA = "Senior Associate",
  LM = "Lead Marketer",
}

interface Row {
  id: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Role: Roles;
  Address: string;
  Edit(id: string): void;
  DeleteButton(id: number): void;
  SaveButton(id: string): void;
  CancelButton(id: string): void;
}

let json = [
  {
    id: 1,
    FirstName: "Christy",
    MiddleName: "Graze",
    LastName: "Parrish",
    Email: "Alex.2331@gmail.com",
    PhoneNumber: "782314564",
    Role: Roles.FS,
    Address: "Street Pork, Los Angeles",
  },
  {
    id: 2,
    FirstName: "Shelby",
    MiddleName: "Green",
    LastName: "Wyatt",
    Email: "Wyattshelby123@gmail.com",
    PhoneNumber: "734314564",
    Role: Roles.BA,
    Address: "Downtown, Boston",
  },
  {
    id: 3,
    FirstName: "Natalie ",
    MiddleName: "Crystal",
    LastName: "Vasquez",
    Email: "Vasquez1996@gmail.com",
    PhoneNumber: "8734314564",
    Role: Roles.LH,
    Address: "Green Avenue, Chicago",
  },
  {
    id: 4,
    FirstName: "Katherine",
    MiddleName: "Petrova",
    LastName: "Peirce",
    Email: "evil1996@gmail.com",
    PhoneNumber: "9134314564",
    Role: Roles.SA,
    Address: "White Park, Manhattan",
  },
  {
    id: 5,
    FirstName: "Daniell ",
    MiddleName: "Reginald",
    LastName: "Castellano",
    Email: "Cast123@gmail.com",
    PhoneNumber: "993431452",
    Role: Roles.LM,
    Address: "Avenue 16th, Ohio",
  },
];
let editedContent: string[] = []; //to save row with changes

class jsonObject implements Row {
  id: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Role: Roles;
  Address: string;

  Edit(id: string): void {
    //function that invokes on clicking edit

    let id_name = "Edit_Panel" + id;
    id_name = id_name.toString();
    let id_name1 = "Save_Panel" + id;
    id_name1 = id_name1.toString();

    console.log("id of cancel", id);
    let editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    console.log("edit panel", editPanel);
    let savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    console.log("save panel", savePanel);
    if (editPanel.style.display == "block") {
      editPanel.style.display = "none";
      savePanel.style.display = "block";
      console.log("display vlovk");
    }

    console.log("idtupe", typeof id);
    // return ;
    console.log("id n", id);
    let currentrow: HTMLElement = document.getElementById(id) as HTMLElement;
    console.log("currentrow", currentrow);
    currentrow.contentEditable = "true";
  }

  DeleteButton(id: number): void {
    let v = newObj;

    let newArray = json.filter((item: any) => {
      return item.id !== id;
    });

    json = newArray;

    console.log("Debug2:newAray ", newArray);

    let temp = "";

    newArray.forEach((u: any) => {
      temp += "<tr  id=" + "row" + u.id + ">";
      temp += "<td>" + u.FirstName + "</td>";
      temp += "<td>" + u.MiddleName + "</td>";
      temp += "<td>" + u.LastName + "</td>";
      temp += "<td>" + u.Email + "</td>";
      temp += "<td>" + u.PhoneNumber + "</td>";
      temp += "<td>" + u.Role + "</td>";
      temp += "<td>" + u.Address + "</td>";
      temp +=
        "<td> <div class='options'><div id='Edit_Panelrow" +
        u.id +
        "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
        u.id +
        "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
        u.id +
        ")\"  > Delete </button></div><div id='Save_Panelrow" +
        u.id +
        "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
        u.id +
        ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
        u.id +
        ')" > Cancel</button> </div></div></td></tr>';
    });

    display_table.innerHTML = temp;
  }

  SaveButton(id: string): void {
    console.log("argument of save button", id);
    let rowid = "row" + id;

    let selectedrow = document.getElementById(rowid);
    let selectedrowcontent = selectedrow.innerHTML;
    console.log("select row content", selectedrowcontent);
    let idint = parseInt(id);
    editedContent[idint] = selectedrowcontent;

    let is_current = selectedrow.isContentEditable;
    if (is_current) {
      selectedrow.contentEditable = "false";
    }
    let id_name = "Edit_Panel" + rowid;
    let id_name1 = "Save_Panel" + rowid;
    let editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    let savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    if (editPanel.style.display == "none") {
      editPanel.style.display = "block";
      savePanel.style.display = "none";
    }
  }
  CancelButton(id: string): void {
    console.log("id", id);
    let intid = parseInt(id);
    console.log("in cancel button");
    console.log("intid", intid);
    console.log(editedContent[intid]);
    let temp = "";
    let rowid = "row" + id;
    console.log(rowid);
    let selectedrow1 = document.getElementById(rowid);
    let selectedrow1c = selectedrow1.innerHTML;
    console.log("cancel row", selectedrow1);

    let is_editable = selectedrow1.isContentEditable;
    if (is_editable) {
      selectedrow1.contentEditable = "false";
    }
    let i;
    for (i = 1; i <= jsoncopy.length; i++) {
      if (editedContent[i]) {
        temp += "<tr id='row" + i + "'>" + editedContent[i] + "</tr>";
      }
      if (!editedContent[i]) {
        let u = jsoncopy[i - 1];
        temp += "<tr  id=" + "row" + u.id + ">";
        temp += "<td >" + u.FirstName + "</td>";
        temp += "<td>" + u.MiddleName + "</td>";
        temp += "<td>" + u.LastName + "</td>";
        temp += "<td>" + u.Email + "</td>";
        temp += "<td>" + u.PhoneNumber + "</td>";
        temp += "<td>" + u.Role + "</td>";
        temp += "<td>" + u.Address + "</td>";
        temp +=
          "<td> <div class='options'><div id='Edit_Panelrow" +
          u.id +
          "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
          u.id +
          "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
          u.id +
          ")\"  > Delete </button></div><div id='Save_Panelrow" +
          u.id +
          "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
          u.id +
          ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
          u.id +
          ')" > Cancel</button> </div></div></td></tr>';

        console.log("u.id", u.id);
      }
      console.log(temp);
      display_table.innerHTML = temp;
    }

    let id_name = "Edit_Panel" + rowid;
    let id_name1 = "Save_Panel" + rowid;
    let editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    let savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    if (editPanel.style.display == "none") {
      editPanel.style.display = "block";
      savePanel.style.display = "none";
    }
  }
}

let newObj = (<any>Object).assign(new jsonObject(), json);

let jsoncopy = json;
let display_table: HTMLElement = document.getElementById(
  "tabledata"
) as HTMLElement;
function showTable(): void {
  let display_none: boolean =
    document.getElementById("displaytable").style.display === "none";
  let refresh_button: HTMLElement = document.getElementById(
    "table2"
  ) as HTMLElement;
  let load_button: HTMLElement = document.getElementById(
    "table1"
  ) as HTMLElement;

  let display_block: HTMLElement = document.getElementById(
    "displaytable"
  ) as HTMLElement;

  if (display_none) {
    refresh_button.style.display = "block";
    load_button.style.display = "none";
    display_block.style.display = "block";
  } else {
    window.location.reload();
  }
}

let temp = "";

let i;
for (i = 0; i < 5; i++) {
  let u = newObj[i];
  let v = newObj;
  temp += "<tr  id=" + "row" + u.id + ">";
  temp += "<td >" + u.FirstName + "</td>";
  temp += "<td>" + u.MiddleName + "</td>";
  temp += "<td>" + u.LastName + "</td>";
  temp += "<td>" + u.Email + "</td>";
  temp += "<td>" + u.PhoneNumber + "</td>";
  temp += "<td>" + u.Role + "</td>";
  temp += "<td>" + u.Address + "</td>";
  temp +=
    "<td> <div class='options'><div id='Edit_Panelrow" +
    u.id +
    "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
    u.id +
    "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
    u.id +
    ")\"  > Delete </button></div><div id='Save_Panelrow" +
    u.id +
    "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
    u.id +
    ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
    u.id +
    ')" > Cancel</button> </div></div></td></tr>';
}

display_table.innerHTML = temp;
