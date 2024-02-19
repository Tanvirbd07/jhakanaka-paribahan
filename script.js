const buttons = document.getElementsByClassName("bttn");
let click = 0;
let availableSeat = 40;


for (const button of buttons){
    button.addEventListener("click", function(e){
    button.classList.remove("bg-neutral-200");
    button.classList.add("bg-green-400");
    const seatName = e.target.parentNode.childNodes[1].innerText;
    const container = document.getElementById("container");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td.innerText = seatName;
    td2.innerText = "Economy";
    td3.innerText = "550";
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    container.appendChild(tr)
    availableSeat = availableSeat - 1;
    click = click + 1;
    document.getElementById("seat").innerText =  click;
    document.getElementById("available-seat").innerText = availableSeat;
    const total = click * 550;
    document.getElementById("total-price").innerText = total;
    console.log(total) 
})}

const discount = document.getElementById("discount");
let total = parseFloat(
    document.getElementById("total-price").innerText
)
    const coupneSection = document.getElementById("coupne-section");
    discount.addEventListener("click", function(e){
        const cupon = document.getElementById("cupon").value;
        if(document.getElementById("total-price").innerText >= 2200){
         if(cupon === "NEW15" || cupon === "Couple 20"){
            if(cupon === "NEW15"){
                const grandTotal = document.getElementById("discounted-price");
        const discountAmount = document.getElementById("total-price").innerText * 0.15 ;
        const finalPrice = document.getElementById("total-price").innerText - discountAmount;
        grandTotal.innerText = finalPrice;
        coupneSection.classList.add("hidden");
            }
            else {
                const grandTotal = document.getElementById("discounted-price");
        const discountAmount = document.getElementById("total-price").innerText * 0.20 ;
        const finalPrice = document.getElementById("total-price").innerText - discountAmount;
        grandTotal.innerText = finalPrice;
        coupneSection.classList.add("hidden");
            }
            }
            else{
                alert("Invalid Cupon")
            }
        }
        else{
            alert("Please select 4 tickets to apply cupon  ")
        }
        console.log(cupon)
    })







