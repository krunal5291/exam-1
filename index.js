let array=[];

let ui=()=>{
  document.getElementById("body").innerHTML=" ";
  array.map((ele ,i)=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.innerHTML = ele.name;
    td2.innerHTML = ele.last;
    td3.innerHTML = ele.Company;
    td4.innerHTML = ele.hr;
    td5.innerHTML = ele.email;
    td7.innerHTML = "delete";
    td7.style.backgroundColor = "red";
    td7.style.color = "white";
    td7.addEventListener("click", () => {
      array.splice(i,1);
      ui();
    });
    tr.append(td1, td2, td3, td4, td5, td7);
    document.getElementById("body").append(tr);
  })

}
const emp = (e) => {
    e.preventDefault();
    let name = document.getElementById("name1").value;
    let last = document.getElementById("name2").value;
    let Company = document.getElementById("Company").value;
    let hr = document.getElementById("hr").value;
    let email = document.getElementById("Email").value;



    let data={
      name:name,
      last:last,
      Company:Company,
      hr:hr,
      email:email
    }

    ui()
  
  array.push(data);
   console.log(array);
  }

const deleteall=()=>{

  document.getElementById("body").innerHTML=" ";
  array=[];
}

document.getElementById("deleteall").addEventListener( "click" , deleteall );
document.getElementById("form").addEventListener("submit", emp);