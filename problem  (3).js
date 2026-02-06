/*function signature/sample */ 
function finalScore (omr) { 
    const mark = (omr.right + omr.wrong + omr.skip === 100)?Math.round(omr.right-0.5*omr.wrong):"Invalid";
    return mark;
} 
