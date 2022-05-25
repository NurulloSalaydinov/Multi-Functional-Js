// THAT WAS MADE FROM NURLLO SALAYDINOV

// INITIALIZE ATTRIBUTES

function InitializeAttributes() {
    document.querySelectorAll("*").forEach(elem => {
        let attr_list = elem.attributes ? Object.values(elem.attributes) : {}
        if (attr_list.length) {
            i = 0;
            while (i < attr_list.length) {
                let attr_id = attr_list[i].localName.startsWith("#");
                let attr_class = attr_list[i].localName.startsWith(".");

                if (attr_class) {
                    let localName = attr_list[i].localName.replace(/[.]/g, " ");
                    elem.setAttribute("class", localName);
                    elem.removeAttribute(attr_list[i].localName);
                };
                if (attr_id) {
                    let localName = attr_list[i].localName.slice(1, attr_list[i].localName.length);
                    elem.setAttribute("id", localName);
                    elem.removeAttribute(attr_list[i].localName);
                };
                i++;
            };
        };
    });
}

function AddClassName(element, className) { // function add class name
    elem = eval(`document.querySelector('.${element}')`);
    elem.classList.add(`${className}`);
};

function AddId(element, idName) { // function add id
    elem = eval(`document.querySelector('.${element}')`);
    elem.setAttribute('id', `${idName}`);
};

function ActivateStyle() {
    let styleList = {};
    document.querySelectorAll('*').forEach(elem => {
        conditional = elem.attributes['style'];
        if (conditional) {
            styleList += `${conditional.nodeValue}\n`
        };
    });
    // console.log(styleList);
    function randomClassName() {
        let chars = 'qwertyuiopasdfghjklzxcvbnm';
        let className = '';
        for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
            className += chars[Math.floor(Math.random() * chars.length)]
        }
        console.log(className);
    }

    randomClassName();
};

// console.log("SUCCESSFULLY WORKED !\nNO BUGS FOUND\nIF YOU FIND ANY BUG\nCONTACT SALAYDINOVNURULLO@GMAIL.COM")