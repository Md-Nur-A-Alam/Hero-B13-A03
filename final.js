//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) { 
    let check = (typeof currentPrice !== "number" || typeof discount !== "number"||discount<0 || discount>100)?"Invalid":currentPrice-currentPrice*discount/100;
    (typeof check==="number")?check=check.toFixed(3):"Invalid";
    return check;
} 
 

//Problem-02: OTP Validation for Zapshift
/*function signature/sample */ 
function validOtp(otp) { 
    let check = (typeof otp === "string")?(otp.length === 8 && otp.startsWith("ph-"))? true: false : "Invalid";
    return check;
}

//Problem-03: BCS Final Score Calculator
/*function signature/sample */ 
function finalScore (omr) { 
    const mark = (typeof omr !== "object" ||omr === null ||Array.isArray(omr)||typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number" || omr.right + omr.wrong + omr.skip !== 100)?"Invalid":Math.round(omr.right-0.5*omr.wrong);
    return mark;
} 




//Problem-04: Upcoming Gono Vote
function gonoVote(array) { 
    let countHa, countNa;
    let result = (Array.isArray(array)) ?
        (countHa = array.filter(ha => ha === "ha").length,
        countNa = array.filter(na => na === "na").length,
        (countHa>countNa)? true :(countHa<countNa)?false:"equal"):"Invalid";
    return result;
} 

//Problem-05: Text Analyzer for an AI Company
/*function signature/sample */ 
function  analyzeText(str) {
    if (typeof str === "string" && str.trim().length) {
        let Object ={
            longwords:"",
            token:str.length
        }
        let max=0,curretn=0, maxWord="",len=str.length;
        for (let i = 0; i < len; i++) {
            if (str[i]===" ") {
                Object.token--;
                if (max<curretn) {
                    Object.longwords=maxWord;
                    max=curretn;
                }
                maxWord="";
                curretn=0;
            }
            else{
                maxWord=maxWord+str[i];
                curretn++;
            }
        }
        if (max<curretn) {
            Object.longwords=maxWord;
        }
        maxWord="";
        curretn=0;
        return Object;
    }
    else{
        return "Invalid";
    }
}

