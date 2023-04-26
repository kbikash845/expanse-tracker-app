
let item=document.getElementById("items"); 


item.addEventListener('submit',onsubmit);
// making function
function onsubmit(e){
        e.preventDefault();
        let amount=e.target.amount.value;
        let description=e.target.description.value;
        let category=e.target.category.value;
//add in local storage
        
    

//create new variable for creating string like stru
        let myObj={
            amount,
            description,
            category
        };
        let x=JSON.stringify(myObj);
        localStorage.setItem(myObj.amount,x);
        showOnUserScreen(myObj);

        
}
function showOnUserScreen(myObj){

//create new element store data
        let ul=document.getElementById("users");
        let li=document.createElement("li");
        li.textContent=myObj.amount + "-" + myObj.description + "-" + myObj.category;
        ul.appendChild(li);
        
//create fields
        

//create delete btn
    let deletebtn=document.createElement("input");
    deletebtn.type="button";

    deletebtn.value="Delete";
    deletebtn.id="deletebtn"
    
//append in li
    li.appendChild(deletebtn); 
//append li inside userList
    ul.appendChild(li);

    deletebtn.onclick=(e)=>{
        localStorage.removeItem(myObj.amount);
        ul.removeChild(li);
        
    }
    //create edit btn
    let editbtn=document.createElement("input");
    editbtn.type="button";
    editbtn.value="Edit";
    editbtn.id="editbtn"

    // console.log(editbtn);
    //append in li
    li.appendChild(editbtn); 
    //append li inside userList
    ul.appendChild(li);

    editbtn.onclick=(e)=>{
       //populating the userdetails
        document.getElementById("item1").value=myObj.amount;
        document.getElementById("item2").value=myObj.description
        document.getElementById("item3").value=myObj.category;
        localStorage.removeItem(myObj.amount);
        ul.removeChild(li);
    }
     

      //-----create fields empty------


    var item1=document.getElementById("item1");
    var item2=document.getElementById("item2");
    var item3=document.getElementById("item3");

    item1.value="";
    item2.value="";
    item3.value="";

    

}

