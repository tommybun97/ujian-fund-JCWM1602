function showDataUSers(index){
    let getTable = document.getElementById('table-users')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ""
    for(let i=0; i<Datausers.length; i++){
        if(i == index){
        tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td> 
                <td>
                    <center><input type="text" name="user-name" value="${Datausers[index].username}" class="input-edit-users"></center>
                </td>
                <td>
                    <center><input type="text" name="user-name" value="${Datausers[index].email}" class="input-edit-user"></center>
                </td>
                <td>
                <center><input type="text" name="user-name" value="${Datausers[index].role}" class="input-edit-user"></center>

                </td>
                
                <td>
                    <center>
                    <input type="button" name="button-save" value="Save" onClick="onSaveProduct(${index})">
                        
                    </center>
                </td>
            </tr> 
        `
    }else {
        tr += `
        <tr>
        <td>
            <center>${i+1}</center>
        </td> 
        <td>
            <center>${Datausers[i].username}</center>
        </td>
        <td>
            <center>${Datausers[i].email}</center>
        </td>
        <td>
            <center>${Datausers[i].Role}</center>
        </td>
        
        <td>
            <center>
            <input type="button" name="button-edit" value="Edit" onClick="editUsers${i}">
            <input type="button" name="button-delete" value="Delete" onClick="deleteUsers(${i})">
            </center>
        </td>
    </tr> 
` 
        
}
}
    getTbody.innerHTML = tr
}
showDataUSers()

function addDataUsers(){
    let inputs = document.getElementsByClassName("user-input")
    console.log(inputs)

    let username = inputs[0].value
    let email = inputs[1].value
    let role = inputs[2].value

    if(username && email && role){
        Datausers.push({
            username : username,
            email : email,
            role: role,
        })

        showDataUSers()
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''

    }else {
        let errorMessage = document.getElementById('error-message')
        errorMessage.innerHTML = 'Data harus diisi!'
    }



}
document.getElementById("add-user").addEventListener("click", addDataUsers)

function deleteUsers(i){
    let confirmBox = confirm(`Are you sure want to delete product ${Datausers[i].username}?`)

    if(confirmBox){
        Datausers.splice(i, 1)
        alert('Delete Product Success!')

        showDataUSers()
    }
}

function editUsers(i){
    let confirmBox = confirm(`Are you sure want to edit ${Datausers[i].name}`)

    if(confirmBox == true){
        showDataUSers(i)
    }
}
function onSaveProduct(index){
    let inputs1 = document.getElementsByClassName('input-edit-users')
    
    let username = inputs1[0].value
    let email = inputs1[1].value
    let role = inputs1[2].value
   

    if(username && email && role ){
        Datausers[index].name = productName
        Datausers[index].price = price
        Datausers[index].role = role
        

        alert('Edit Data Berhasil!')

        showDataUSers()
    }
}