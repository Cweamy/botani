const plants=[
{
    name:"ใบเงิน",
    sci:"Graptophyllum pictum (L.) Griff",
    id:"7-41000-003-293/14",
    family:"ACANTHACEAE",
    type:"ไม้พุ่ม",
    char:"ใบสีเขียวแซมขาวหรือเหลืองอ่อน ขอบใบเป็นคลื่น",
    location:"พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
    date:"15 มกราคม 2566",
    img:"img/ใบเงิน.jpg"
},
{
    id: "7-41000-003-294/15",
    name: "ใบทอง",
    sci: "Graptophyllum pictum (L.) Griff",
    family: "ACANTHACEAE",
    type: "ไม้พุ่ม",
    char: "ใบสีเขียวแกมเหลือง มีสีเขียวแทรกอยู่ตามใบ รูปวงรี ขอบเป็นคลื่น",
    location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
    img: "img/ใบทอง.jpg",
    date: "2023-01-15"
},
{
    id: "7-41000-003-295/13",
    name: "ใบนาก",
    sci: "Graptophyllum pictum (L.) Griff",
    family: "ACANTHACEAE",
    type: "ไม้พุ่ม",
    char: "ใบมีสีม่วงแกมเขียว มีรอยด่างสีขาว รูปวงรี ขอบเป็นคลื่น",
    location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
    img: "img/ใบนาก.jpg",
    date: "2023-01-15"
},
];

const list=document.getElementById("plantList");

plants.forEach((p,i)=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
        <img src="${p.img}">

        <div class="card-inner">
            <h3>${p.name}</h3>
            <em>${p.sci}</em>

            <p><b>ID:</b> ${p.id}</p>
            <p><b>ประเภท:</b> ${p.type}</p>
            <p><b>สถานที่:</b> ${p.location}</p>
            <p><b>วันที่:</b> ${p.date}</p>

            <div class="view-btn" onclick="openPopup(${i})">
                📖 ดู
            </div>
        </div>
    `;
    list.appendChild(card);
});


function openPopup(i){
    const p=plants[i];
    overlay.style.display="flex";

    pImg.src=p.img;
    pName.innerText=p.name;
    pSci.innerText=p.sci;
    pId.innerText=p.id;
    pFam.innerText=p.family;
    pType.innerText=p.type;
    pChar.innerText=p.char;
    pLoc.innerText=p.location;
    pDate.innerText=p.date;
}

function closePopup(){
    overlay.style.display="none";
}
