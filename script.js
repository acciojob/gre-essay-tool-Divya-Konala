//your code here
let inputBox= document.createElement("input");
inputBox.setAttribute("type","text");
inputBox.setAttribute("id","evaluatedText");
document.body.append(inputBox);
let h3Ele=document.createElement("h3");
h3Ele.setAttribute("id","wordCount");
document.body.append(h3Ele);

document.getElementById("evaluatedText").addEventListener("keyup",()=>{
        let word_count=inputBox.value.length;
        document.getElementById("wordCount").innerText=word_count;
    })