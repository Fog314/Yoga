let more = document.querySelector('.more');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');
let descriptionBtn = document.querySelectorAll('.description-btn');

for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
}


more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

class Options {
    constructor(height, width, bg, color, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.backgroundColor = bg;
        this.color = color;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    divCreat(text = "defaultText") {
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `height: ${this.height};
                                width: ${this.width};
                                background-color: ${this.backgroundColor};
                                color: ${this.color};
                                font-size: ${this.fontSize};
                                text-align: ${this.textAlign};`;
        document.body.appendChild(div);
    }
}
let styles = ['100px', '100%', 'black', 'white', '140%', 'center']
let hello = "©Tim Iskhakov.2020";
let newDiv = new Options(...styles);
newDiv.divCreat(hello);