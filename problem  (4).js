/*function signature/sample */ 
function gonoVote(array) { 
    let countHa, countNa;
    let result = (Array.isArray(array)) ?
        (countHa = array.filter(ha => ha === "ha").length,
        countNa = array.filter(na => na === "na").length,
        (countHa>countNa)? true :(countHa<countNa)?false:"equal"):"Invalid";
    return result;
} 

/*function signature/sample */ 
function gonoVote2(array) { 
    let countHa=0, countNa=0;
    if (Array.isArray(array)) {
        for(let i of array)
        {
            if (i==="ha") {
                countHa++;
            }
            else{
                countNa++;
            }
        }
        if (countHa>countNa) {
            return true;
        }
        else if (countHa<countNa) {
            return false;
        }
        else{
            return "equal";
        }
    }
    else{
        return "Invalid";
    }
} 

let array=["ha", "na", "ha", "na"];
console.log(gonoVote2(array));