var form=document.getElementById('form1')
var itemlist=document.getElementById('add')
form.addEventListener('submit',additem)
function additem(e)
{
    e.preventDefault()
    var empam=document.getElementById('my expam').value;
    var description=document.getElementById('cd').value;
    var catagory=document.getElementById('cac').value;

    var li=document.createElement('li')
    li.className="list";
    li.appendChild(document.createTextNode(empam))
    li.appendChild(document.createTextNode("-"))
    li.appendChild(document.createTextNode(description))
    li.appendChild(document.createTextNode("-"))
    li.appendChild(document.createTextNode(catagory))
    li.appendChild(document.createTextNode("  "))
    var editbtn=document.createElement('button')
    //add class
    editbtn.className="btn btn-primary btn-sm float-md-right "
    
    //add text 
    editbtn.appendChild(document.createTextNode('edit expenses'))
    li.appendChild(editbtn)
  
    //add delete buttin
    var deletebtn=document.createElement('button');
    //add class 
    deletebtn.className="btn btn-danger btn-sm float-right delete"
    //add text
    deletebtn.appendChild(document.createTextNode('delete expenses'));
    //add delete button to li
    li.appendChild(deletebtn)
    //appended li to item list
itemlist.appendChild(li)

localStorage.setItem("expense amount",empam)
localStorage.setItem("description",description)
localStorage.setItem("catagory", catagory)
deletebtn.onclick=()=>
{
    localStorage.removeItem("expense amount")
    localStorage.removeItem("description")
    localStorage.removeItem("catagory")
    
itemlist.removeChild(li)
}
editbtn.onclick=()=>
{
    document.getElementById('my expam').value=empam
    document.getElementById('cd').value=description
    document.getElementById('cac').value=catagory
    localStorage.removeItem("expense amount")
    localStorage.removeItem("description")
    localStorage.removeItem("catagory")
    
itemlist.removeChild(li)
}
   
}