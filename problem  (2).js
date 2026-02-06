/*function signature/sample */ 
function validOtp(otp) { 
    if(typeof otp === "string")
    {
        let check = (otp.length === 8 && otp.startsWith("ph-"))? true: false;
        return check
    }
    else{
        return "Invalid"
    }
}

/*function signature/sample */ 
function validOtp(otp) { 
    let check = (typeof otp === "string")?(otp.length === 8 && otp.startsWith("ph-"))? true: false : "Invalid";
    return check;
}