var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}

// Read operation using this function

function readFormData(){
    var formData = {};
    formData["sturoll"] = document.getElementById("sturoll").value;
    formData["stuname"] = document.getElementById("stuname").value;
    formData["studept"] = document.getElementById("studept").value;
    formData["stucourse"] = document.getElementById("stucourse").value;
    return formData;
}

// Create operation

function insertNewRecord(data){
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.sturoll;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.stuname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.studept;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.stucourse;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button type="button" class="btn btn-primary" onClick='onEdit(this)'>Edit</button> <button type="button" class="btn btn-danger" onClick='onDelete(this)'>Delete</button>`;
}

// To Reset the data of fill input

function resetForm(){
    document.getElementById("sturoll").value = '';
    document.getElementById("stuname").value = '';
    document.getElementById("studept").value = '';
    document.getElementById("stucourse").value = '';
    selectedRow = null;
}

// For Edit operation

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sturoll").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stuname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("studept").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stucourse").value = selectedRow.cells[3].innerHTML;
}

// For Update operation

function updateRecord(data){
    selectedRow.cells[0].innerHTML = data.sturoll;
    selectedRow.cells[1].innerHTML = data.stuname;
    selectedRow.cells[2].innerHTML = data.studept;
    selectedRow.cells[3].innerHTML = data.stucourse;
}

function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }    
}
