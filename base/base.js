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

function ToggleClassName(element, className) { // function toggle class
    elem = eval(`document.querySelector('.${element}')`);
    elem.classList.toggle(`${className}`);
}

function AddId(element, idName) { // function add id
    elem = eval(`document.querySelector('.${element}')`);
    elem.setAttribute('id', `${idName}`);
};

function ActivateStyle() { // function activate style

    var styleObject = {

        styleList: [],

        media: {
            xs: '@media only screen and (max-width: 600px) {\n',
            sm: '@media only screen and (min-width: 600px) {\n',
            md: '@media only screen and (min-width: 768px) {\n',
            lg: '@media only screen and (min-width: 992px) {\n',
            xl: '@media only screen and (min-width: 1200px) {\n',
        },
    
        addStyleElement: function(obj) { 
            this.styleList.push(obj)
        },
        
        addMediaStyleElement: function(obj, to) {
            if (to == 'xs') {
                this.media.xs += obj
            }
            else if (to == 'sm') {
                this.media.sm += obj
            }
            else if (to == 'md') {
                this.media.md += obj
            }
            else if (to == 'lg') {
                this.media.lg += obj
            }
            else if (to == 'xl') {
                this.media.xl += obj
            }
        },

        prepareStyleProduction: function() {
            let preparedStyles = '\n'
            for (let element of this.styleList) {
                preparedStyles += `.${element.className}{${element.style}}\n`
            }
            return preparedStyles
        },

        pushToStyleTag: function() {
            let styleTag = document.createElement('style');
            styleTag.textContent = this.prepareStyleProduction();
            document.head.appendChild(styleTag);
        },
        
        pushMediaToStyleTag: function() {
            let styleTag = document.createElement('style');
                styleTag.textContent += this.media.xs + '\n}\n';
                styleTag.textContent += this.media.sm + '\n}\n';
                styleTag.textContent += this.media.md + '\n}\n';
                styleTag.textContent += this.media.lg + '\n}\n';
                styleTag.textContent += this.media.xl + '\n}\n';
            document.head.appendChild(styleTag);
        }

    };
    
    document.querySelectorAll('*').forEach(elem => {
        // for only styles
        conditional = elem.attributes['style'];
        if (conditional) {
            randomChar = randomClassName();
            styleObject.addStyleElement(
                {'className': randomChar,'style': conditional.nodeValue}
            );
            elem.classList.add(randomChar);
            elem.removeAttribute('style');
        };
        // for media styles
        xs = elem.attributes['xs'];
        sm = elem.attributes['sm'];
        md = elem.attributes['md'];
        lg = elem.attributes['lg'];
        xl = elem.attributes['xl'];

        if (xs) {
            randomClass = randomClassName();
            styleObject.addMediaStyleElement(
                `.${randomClass} {
                    ${xs.nodeValue}
                }`, 'xs'
            )
            elem.classList.add(randomClass)
            elem.removeAttribute('xs')
        }
        if (sm) {
            randomClass = randomClassName();
            styleObject.addMediaStyleElement(
                `.${randomClass} {
                    ${sm.nodeValue}
                }`, 'sm'
            )
            elem.classList.add(randomClass)
            elem.removeAttribute('sm')
        }
        if (md) {
            randomClass = randomClassName();
            styleObject.addMediaStyleElement(
                `.${randomClass} {
                    ${md.nodeValue}
                }`, 'md'
            )
            elem.classList.add(randomClass)
            elem.removeAttribute('md')
        }
        if (lg) {
            randomClass = randomClassName();
            styleObject.addMediaStyleElement(
                `.${randomClass} {
                    ${lg.nodeValue}
                }`, 'lg'
            )
            elem.classList.add(randomClass)
            elem.removeAttribute('lg')
        }
        if (xl) {
            randomClass = randomClassName();
            styleObject.addMediaStyleElement(
                `.${randomClass} {
                    ${xl.nodeValue}
                }`, 'xl'
            )
            elem.classList.add(randomClass)
            elem.removeAttribute('xl')
        }

    });

    function randomClassName() {
        let chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJLZXCVBNM';
        let className = '';
        for (let i = 0; i < 11; i++) {
            className += chars[Math.floor(Math.random() * chars.length)]
        }
        return className
    };

    styleObject.pushToStyleTag();
    styleObject.pushMediaToStyleTag();

};

// console.log("SUCCESSFULLY WORKED !\nNO BUGS FOUND\nIF YOU FIND ANY BUG\nCONTACT SALAYDINOVNURULLO@GMAIL.COM")