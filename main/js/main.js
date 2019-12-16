
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}



const showBackTopButton = () => {
    var btnBackTop = document.getElementById("id-backtop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackTop.style.visibility = "visible";
        btnBackTop.style.opacity = 0.8;

    } else {
        btnBackTop.style.visibility = "hidden";
        btnBackTop.style.opacity = 0;

    }
}

const fontSelectInit = () => {
    const fontSelectDiv=document.getElementsByClassName('font-select')[0];
    const fontSelected=document.getElementsByClassName('font-select-selected')[0];
    const fontSelectedText=document.getElementsByClassName('font-select-selected-text')[0];
  
    
    const fontSelectDropdown=document.getElementsByClassName('font-select-dropdown')[0];

    
    fontSelected.onclick= ()=>{
        if(fontSelectDropdown.style.display=="none")
            fontSelectDropdown.style.display="block";
        else if(fontSelectDropdown.style.display=="block")
            fontSelectDropdown.style.display="none";
    }

    const fontSelectItem=document.getElementsByClassName('font-select-item');
    for(let i=0;i<fontSelectItem.length;i++){
        fontSelectItem[i].onclick= ()=>{
           
            fontSelectedText.innerText=fontSelectItem[i].innerText;
            fontSelectDropdown.style.display="none";
        }
    
    }
    

}



window.onload = () => {
    const neonSizeRadio = document.getElementsByName("size");
    const neonTextPhrase = document.getElementById('customise-phrase-text');
    const neonFontSel = document.getElementById("customise-font-sel");
    const neonColorRadio = document.getElementsByName("color");

    const neonSignShowcase = document.getElementById('neonSignShowcase');

    const neonSubmitBtn = document.getElementById('try-btn');
 
    neonSubmitBtn.onclick = () => {

        let size, text, font, color;

        for (let i = 0; i < neonSizeRadio.length; i++) {
            if (neonSizeRadio[i].checked) {
                size = neonSizeRadio[i].value;
            }
        }

        text = neonTextPhrase.value;
        font = neonFontSel[neonFontSel.selectedIndex].value;
        for (let i = 0; i < neonColorRadio.length; i++) {
            if (neonColorRadio[i].checked) {
                color = neonColorRadio[i].value;
            }
        }

        let tmpClassName = `text-neon-${color} text-neon-${size} `


        neonSignShowcase.style.fontFamily = font;
        neonSignShowcase.setAttribute('class', tmpClassName);


        neonSignShowcase.innerText = text;


    }


    const naviCheckBox = document.getElementById('navi-toggle');
    function myFunction(x) {
        if (x.matches) {
            naviCheckBox.checked = false;
        } else {
            naviCheckBox.checked = false;
        }
    }
    const x = window.matchMedia("(max-width: 768px)");
    myFunction(x)
    x.addListener(myFunction);



    const naviItems = document.getElementsByClassName("navi-item");
    for (let i = 0; i < naviItems.length; i++) {
        naviItems[i].onclick = () => {
            naviCheckBox.checked = false;
        }
    }







    smoothScroll();
    fontSelectInit();
}
window.onscroll = function () {
    showBackTopButton();

};