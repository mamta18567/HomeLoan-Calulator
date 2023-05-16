const loanAmount = document.querySelector("#amount");
const interestRate = document.querySelector("#interest");
const loanTime = document.querySelector("#loanTenure");
const submitBtn = document.querySelector("button");
const emi = document.querySelector("#emi");
const interest = document.querySelector("#payableInterest");
const totalpayable = document.querySelector("#total")
const calculateEMI = () =>{
    let noOfMonths = 0;
    if(loanAmount.value == "" || interestRate.value == "" || loanTime == ""){
        Swal.fire('Please Enter all the credentials !')
    }
    else{
        noOfMonths = loanTime.value;
        let r = parseFloat(interestRate.value)/12/100
        let p = loanAmount.value;
        let t = noOfMonths;
        let EMI = (p*r*Math.pow((1+r),t))/(Math.pow((1+r),t)-1) 
        let totalInterest = (EMI *t)-p;
        let totalPayment = totalInterest + parseFloat(p);
        emi.innerHTML = "Rs."+ Math.round(EMI);
        interest.innerHTML = "Rs."+ Math.round(totalInterest);
        totalpayable.innerHTML = "Rs."+ Math.round(totalPayment);
    }
}


submitBtn.addEventListener("click",()=>{
    console.log(loanAmount.value);
    console.log(interestRate.value);
    console.log(loanTime.value);
    calculateEMI();
})