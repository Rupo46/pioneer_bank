// login button event handler
const login = document.getElementById("buttton");
login.addEventListener("click", function () {
    const loginarea = document.getElementById("login_area");
    loginarea.style.display = "none";
    const tranction = document.getElementById("tranction_area");
    tranction.style.display = "block";

})

// diposit button event handler
const dipositbtn = document.getElementById("diposite");
dipositbtn.addEventListener("click", function () {
    // const diposiinput = document.getElementById("diposit").value;
    // const dipositNumber = parseFloat(diposiinput);

    const dipositNumber = getinputnumberr("diposit")

    updatespantext("currentDiposit", dipositNumber)

    updatespantext("currentbalance", dipositNumber)

    document.getElementById("diposit").value = "";
})



// withdraw button evelt handler
const withdrawntn = document.getElementById("addWithdraw");
withdrawntn.addEventListener("click", function () {
    const withdrawnumber = getinputnumberr("WithdrawAmount");
    updatespantext("currentwithdraw", withdrawnumber)
    updatespantext("currentbalance", -1 * withdrawnumber)
    document.getElementById("WithdrawAmount").value = "";

})

function getinputnumberr(id) {
    const withdrawamount = document.getElementById(id).value;
    const withdrawnumber = parseFloat(withdrawamount);
    return withdrawnumber;
}

function updatespantext(id, dipositNumber) {
    const currentbalance = document.getElementById(id).innerText;
    const currentbalancenumber = parseFloat(currentbalance);
    const totalbalance = dipositNumber + currentbalancenumber;
    document.getElementById(id).innerText = totalbalance;
};