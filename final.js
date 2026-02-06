function newPrice(currentPrice , discount ) { 
    if (typeof currentPrice === "number" && typeof discount === "number") {
        let price = currentPrice-currentPrice*discount/100;
        return price.toFixed(3);
    }
    else
    {
        return "Invalid"
    }
} 
 
/*function signature/sample */ 
function validOtp(otp) { 
    let check = (typeof otp === "string")?(otp.length === 8 && otp.startsWith("ph-"))? true: false : "Invalid";
    return check;
}

/*function signature/sample */ 
function finalScore (omr) { 
    const mark = (omr.right + omr.wrong + omr.skip === 100)?Math.round(omr.right-0.5*omr.wrong):"Invalid";
    return mark;
} 
