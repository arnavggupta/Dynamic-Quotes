let realtimedata="";
const quote=document.getElementById("quotes") ;
const authors=document.getElementById("author"); 
const bt=document.getElementById("bt");
const getnewquotes=()=>{
    let random=Math.floor(Math.random()*27);
quote.innerText=`${realtimedata[random].text}`;
authors.innerText=`${realtimedata[random].author}`;
};

const getQuotes=async()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data=await fetch(api);
        realtimedata= await data.json();
getnewquotes();

    } catch (error) {
      
    }
};


getQuotes();
bt.addEventListener("click",getnewquotes);