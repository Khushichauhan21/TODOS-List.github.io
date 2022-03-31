function getAndupdate(){
    console.log('updating');
    tit=document.getElementById("title").value;
    desc=document.getElementById("description").value;

 //    if itemJson is null
     if(localStorage.getItem("itemJson")==null){
         itemJsonArr = [];
         itemJsonArr.push([tit, desc]);
         localStorage.setItem("itemJson", JSON.stringify(itemJsonArr))
       
     }
     // if itemJson is not null
     else{
         itemJsonArrstr = localStorage.getItem("itemJson");
         itemJsonArr = JSON.parse(itemJsonArrstr);
         itemJsonArr.push([tit, desc]);
         localStorage.setItem("itemJson", JSON.stringify(itemJsonArr));
     }
     update();
 

}

// localstorage items are visible after refresh 
function update(){

    if(localStorage.getItem("itemJson")==null){
        itemJsonArr = [];
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArr))
      
    }
    else{
        itemJsonArrstr = localStorage.getItem("itemJson");
        itemJsonArr = JSON.parse(itemJsonArrstr);
        
    }
 //   Displaying Content on tables/Populate the table
 let str="";
 let  tableBody = document.getElementById("tablebody");
 itemJsonArr.forEach((element, index) => {
    
     str += ` 
     <tr>
     <th scope="row">${index + 1}</th>
     <td>${element[0]}</td>
     <td>${element[1]}</td>
     <td><button class="btn btn-sm btn-outline-danger" onclick ="deleted(${index})">Delete</button></td>
     </tr>`
     
 });
 tableBody.innerHTML = str;
 update();
     
 
}

// calling Function update after adding value to title and description and onclick on add to list button
add = document.getElementById("add");
add.addEventListener("click",getAndupdate);
update();




// Calling delete Function to delete ItemJsonArr ELements by Clicking on Delete button
function deleted(itemIndex){

    console.log("Delete", itemIndex);
    itemJsonArrstr = localStorage.getItem("itemJson");
    itemJsonArr = JSON.parse(itemJsonArrstr);
    //Delete itemIndex element from the Array
    itemJsonArr.splice(itemIndex, 1)
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArr));
    update();

}

// Clearing the list by Clicking the Clear List Button
function clearstorage(){
    // warning for user before clearing the entire list
    if(confirm("Do you really Want to clear the List")){
        console.log("Clearing the List...");
        localStorage.clear();
        update();
    }
  

}







   