//your code here
let inputBox= document.createElement("input");
inputBox.setAttribute("type","text");
inputBox.setAttribute("id","evaluatedText");
document.body.append(inputBox);
let h3Ele=document.createElement("h3");
h3Ele.setAttribute("id","wordCount");
h3Ele.innerText='0';
document.body.append(h3Ele);
let arrOfWords;

document.getElementById("evaluatedText").addEventListener("keyup",()=>{
     let wordArr=inputBox.value.trim().split(/\s+/);
     console.log(wordArr);
     let word_count=wordArr.length;
        document.getElementById("wordCount").innerText=word_count;
    })

