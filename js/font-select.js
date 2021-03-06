



const initFontSelect = () => {
    const fontSelectDiv = document.getElementsByClassName('font-select')[0];
    const fontSelected = document.getElementsByClassName('font-select-selected')[0];
    const fontSelectedText = document.getElementsByClassName('font-select-selected-text')[0];
    const fontSelectDropdown = document.getElementsByClassName('font-select-dropdown')[0];


    fontSelected.onclick = () => {
        if (fontSelectDropdown.style.display == "none")
            fontSelectDropdown.style.display = "block";
        else if (fontSelectDropdown.style.display == "block")
            fontSelectDropdown.style.display = "none";
    }

    const fontSelectItem = document.getElementsByClassName('font-select-item');
    fontSelectedText.innerText = fontSelectItem[0].innerText;
    fontSelectedText.style.fontFamily = fontSelectItem[0].style.fontFamily;

    for (let i = 0; i < fontSelectItem.length; i++) {
        fontSelectItem[i].onclick = () => {
            fontSelectedText.innerText = fontSelectItem[i].innerText;
            fontSelectedText.style.fontFamily = fontSelectItem[i].style.fontFamily;
            fontSelectDropdown.style.display = "none";
        }

    }

    //close dropdown when click outside selection
    document.onclick = function(e){
        if(e.target.getAttribute('class')!== 'font-select-selected'
        &&e.target.getAttribute('class')!== 'font-select-selected-text'
        &&e.target.getAttribute('class')!== 'font-select-icon'){
            fontSelectDropdown.style.display = 'none';
        }
     };

}

const initNeonSignControl = () => {
    initFontSelect();
    const neonSignShowcase = document.getElementById('neonSignShowcase');
    const neonSizeRadios = document.getElementsByName("size");
    const neonTextPhrase = document.getElementById('customise-phrase-text');
    const neonSelectedFont = document.getElementsByClassName('font-select-selected-text')[0];

    const neonFontListItems = document.querySelectorAll('.font-select-item');
    const neonColorRadios = document.getElementsByName("color");

    let size = 'small';
    neonSizeRadios.forEach((selectedSize) => {
        if (selectedSize.checked == true) {
            size = selectedSize.value;
        }
    }
    )
    let text = 'Neon Sign Sample';
    let font = neonSelectedFont.textContent;

    let color = 'red';
    neonColorRadios.forEach((selectedColor) => {
        if (selectedColor.checked == true) {
            color = selectedColor.value;
        }
    })

    neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size}`);
    neonSignShowcase.innerText = text;
    neonSignShowcase.style.fontFamily = font;




    neonSizeRadios.forEach((selectedSize) => {
        selectedSize.addEventListener('click', () => {
            if (selectedSize.checked) {
                console.log(selectedSize.value);
                size = selectedSize.value;
                neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size} `);
            }
        })

    })

    neonTextPhrase.oninput = () => {
        neonSignShowcase.innerText = neonTextPhrase.value;
        if (neonTextPhrase.value === "") {
            neonSignShowcase.innerText = "Neon Sign Sample";
        }
    }
    neonFontListItems.forEach((fontItem) => {
        fontItem.addEventListener('click', () => {
            neonSignShowcase.style.fontFamily = fontItem.style.fontFamily;
            font = fontItem.style.fontFamily;
        })
    });
    neonColorRadios.forEach((selectedColor) => {
        selectedColor.addEventListener('click', () => {
            if (selectedColor.checked) {
                console.log(selectedColor.value);
                color = selectedColor.value;
                neonSignShowcase.setAttribute('class', `text-neon-${color} text-neon-${size} `);
            }
        })

    })
}


window.onload = () => {

    initNeonSignControl();


 
};
