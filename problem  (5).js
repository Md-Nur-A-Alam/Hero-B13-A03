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
st = "I am a little honest person";
console.log(analyzeText(st));