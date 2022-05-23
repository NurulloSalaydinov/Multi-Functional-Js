// THAT WAS MADE FROM NURLLO SALAYDINOV
// EXPRESSED BY LIBRARIES
// COPYRIGHT

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
                    // first way, but first is easy to do
                    let localName = attr_list[i].localName.replace(/[.]/g, " ")
                    elem.setAttribute("class", localName)
                    elem.removeAttribute(attr_list[i].localName)
                    // second way
                    // let local_name = attr_list[i].localName
                    // let joined_class = ''
                    // for (let j = 0; j < local_name.length; j++) {
                    //     if (local_name[j] == ".") {
                    //         joined_class += ' '
                    //     }
                    //     else {
                    //         joined_class += local_name[j]
                    //     }
                    // }
                    // elem.setAttribute("class", joined_class);
                    // elem.removeAttribute(local_name)
                }
                if (attr_id) {
                    let localName = attr_list[i].localName.slice(1, attr_list[i].localName.length)
                    elem.setAttribute("id", localName)
                    elem.removeAttribute(attr_list[i].localName)
                }
                i++;
            }
        }
    });
}

function AddActiveClass(element, className) {
    elem = eval(`document.querySelector('.${element}')`)
    // console.log(elem)
    elem.classList.add(`${className}`)
}

// console.log("SUCCESSFULLY WORKED !\nNO BUGS FOUND\nIF YOU FIND ANY BUG\nCONTACT SALAYDINOVNURULLO@GMAIL.COM")