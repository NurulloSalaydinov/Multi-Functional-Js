// THAT WAS MADE FROM NURLLO SALAYDINOV
// CONTACT salaydinovnurullo@gmail.com
// FOR BUGS AND CONTRIBUTION ^

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

    var styleObject = {

        styleList: [],
    
        addElement: function(obj) { 
            this.styleList.push(obj)
        },

        prepareProduction: function() {
            let preparedStyles = '\n'
            for (let element of this.styleList) {
                preparedStyles += `.${element.className}{${element.style}}\n`
            }
            return preparedStyles
        },

        pushToStyleTag: function() {
            let styleTag = document.createElement('style');
            styleTag.textContent = this.prepareProduction();
            document.head.appendChild(styleTag);
        }

    };
    
    document.querySelectorAll('*').forEach(elem => {
        conditional = elem.attributes['style'];
        if (conditional) {
            randomChar = randomClassName();
            styleObject.addElement(
                {'className': randomChar,'style': conditional.nodeValue}
            );
            styleObject.pushToStyleTag();
            elem.setAttribute('class', randomChar);
            elem.removeAttribute('style');
        };
    });

    function randomClassName() {
        let chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJLZXCVBNM';
        let className = '';
        for (let i = 0; i < 11; i++) {
            className += chars[Math.floor(Math.random() * chars.length)]
        }
        return className
    }

};

// console.log("SUCCESSFULLY WORKED !\nNO BUGS FOUND\nIF YOU FIND ANY BUG\nCONTACT SALAYDINOVNURULLO@GMAIL.COM")