let MainText = document.getElementById("QRText") ; 
let MainBox = document.getElementById("displayBox") ; 
let QR = document.getElementById("QRMain") ; 


document.getElementById("Generator").addEventListener('click' , () => {
    if(MainText.value != 0) { 
    QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + MainText.value ; 
    MainBox.classList.add("show-Item") ;
    } else { 
        
        MainText.classList.add('error') ; 
        setTimeout(()=>{
            MainText.classList.remove('error') ; 
        }, 1000)
    } 
})