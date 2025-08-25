// localStorage :- object store nhi krta string store krta h string convert krne ke liye we use 
// JSON.stringify we pass any object  in this  and it convert it into string 
// parse:- if we want our string original or in previous state then we use pass

localStorage.setItem("name","neha");
console.log(localStorage.getItem("name"));

const obj = {
  name:"neha",
  arr:[1,2,3,"4"]
}

console.log(JSON.stringify(obj));
localStorage.setItem("obj",JSON.stringify(obj));

console.log("Storage - ",localStorage.getItem("obj"));
let storedObj = JSON.parse(localStorage.getItem("obj"));
console.log(storedObj);

const h1 = document.getElementsByTagName("h1")[0];

const getQR = async(url) => {
    console.log('Making request for URL:', url);
    

    const response = await fetch(`https://api.api-ninjas.com/v1/qrcode?format=png&data=${encodeURIComponent(url)}`, {
      headers: {
        "X-Api-Key": "5PS27NfasZs4XGM1r+GUqw==5DZBxayXhB11yGGH"
      }
    });
    
    const blob = await response.blob();
    
    const imageUrl = URL.createObjectURL(blob);
    console.log('Object URL created:', imageUrl);
    
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "QR Code";
    img.style.maxWidth = "300px";
    
    h1.after(img);
  }

getQR("https://ai-inerview-prep.vercel.app/")