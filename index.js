function addToTable() {
    const grossSalary = document.getElementById("gross-salary-input").value;
    
    let mynhif = NHIF(grossSalary);
    let payeTax = calculatePaye(grossSalary); 
    let mypaye = calculatePaye(grossSalary) 
    
    let totalpaye = netPay(grossSalary,payeTax,mynhif);


    document.getElementById("nhif").innerHTML = mynhif;

    document.getElementById("demo").innerHTML = grossSalary;
    document.getElementById("netpay").innerHTML = mypaye
    document.getElementById("total").innerHTML = totalpaye

}

// NHIF Rates
function NHIF(e) {
    grossSalary = e;

    NHIF = 0;

    if (grossSalary >= 100000) {
        NHIF = 1700;
    }
    else if (grossSalary >= 90000) {
        NHIF = 1600;
    }

    else if (grossSalary >= 80000) {
        NHIF = 1500;
    }
    else if (grossSalary >= 70000) {
        NHIF = 1400;
    }
    else if (grossSalary >= 60000) {
        NHIF = 1300;
    }
    else if (grossSalary >= 50000) {
        NHIF = 1200;
    }
    else if (grossSalary >= 45000) {
        NHIF = 1100;
    }
    else if (grossSalary >= 40000) {
        NHIF = 1000;
    }
    else if (grossSalary >= 35000) {
        NHIF = 950;
    }
    else if (grossSalary >= 30000) {
        NHIF = 900;
    }
    else if (grossSalary >= 25000) {
        NHIF = 850;
    }
    else if (grossSalary >= 20000) {
        NHIF = 750;
    }
    else if (grossSalary >= 15000) {
        NHIF = 600;
    }
    else if (grossSalary >= 12000) {
        NHIF = 500;
    }
    else if (grossSalary >= 8000) {
        NHIF = 400;
    }
    else if (grossSalary >= 6000) {
        NHIF = 300;
    }
    else if (grossSalary >= 0) {
        NHIF = 150;
    }
    else {

       NHIF = 0;
    }

    return NHIF;


}
 
function calculatePaye(grossSalary) {
    let payeTax = 0;

    if (grossSalary >= 24001) {
        let taxableIncome = grossSalary - 2400;

        if (taxableIncome <= 24000) {
            payeTax = 24000 * 0.1;
        }

        // else if (taxableIncome<= 32333) {
        //     payeTax = 24000 * 0.1 + (taxableIncome- 240000) * 0.25;
        // }

        else if (taxableIncome<= 8333) {
            payeTax = 24000 * 0.1 +  8333 * 0.25
        }

        else  if (taxableIncome>= 32333){
            payeTax = 24000 * 0.1 + 8333 * 0.25 + (taxableIncome-32333) * 0.3;
        }


        else {
            payeTax = 0;
        }
    }

    return payeTax.toFixed(2);
}

function netPay(grossSalary,payeTax,NHIF){
    let paye = grossSalary-NHIF-payeTax;
    return paye;
    
}

