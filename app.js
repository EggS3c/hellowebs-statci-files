const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#0b1d30'
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


/****************************************CURSOR HOVERED*****************************/
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
/****************************************END OF CURSOR HOVERED*****************************/



/*** *************************************HERO SECTION*************************************/
let brand = document.querySelectorAll('.brand');
let Creative = document.querySelectorAll('.creative');
let introMain = document.querySelectorAll('.intro');
let Welcome = document.querySelectorAll('.welcome');
let ctn = document.querySelectorAll('.ctn');
let menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');





brand.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('brand-hovered');
    });
});
brand.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('brand-hovered');
    });
});
Creative.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('creative-hovered');
    });
});
Creative.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('creative-hovered');
    });
});
introMain.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('intro-main-hovered');
    });
});
introMain.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('intro-main-hovered');
    });
});
Welcome.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('welcome-hovered');
    });
});
Welcome.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('welcome-hovered');
    });
});
ctn.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('ctn-hovered');
    });
});
ctn.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('ctn-hovered');
    });
});
menuItems.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('menu-itemH');
    });
});
menuItems.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('menu-itemH');
    })
})
/*** *************************************END OF HERO SECTION*************************************/



/*** *************************************LEARNING SECTION HOVER*************************************/
let sectiontittle = document.querySelectorAll('#learning .section-tittle');
let hellowebs = document.querySelectorAll('.hellowebs');
let helping = document.querySelectorAll('.helping');

sectiontittle.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('section-hovered');
    });
});
sectiontittle.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('section-hovered');
    });
});

hellowebs.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('hellowebs-hovered');
    });
});
hellowebs.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('hellowebs-hovered');
    });
});
helping.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('helping-hovered');
    });
});
helping.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('helping-hovered');
    });
});
/*** *************************************THE END OF THE LEARNING CENTER*************************************/


/****************************************INFO  SECTION HOVERED*****************************/
let centro = document.querySelectorAll('.centro');
let centroinfo = document.querySelectorAll('.centro-info');
let desktopView = document.querySelectorAll('.desktopView');
let infoP1 = document.querySelectorAll('.infoP1 ');
let infoP2 = document.querySelectorAll('.infoP2');
let infoP3 = document.querySelectorAll('.infoP3');
let infoP4 = document.querySelectorAll('.infoP4');
let infoP5 = document.querySelectorAll('.infoP5');
let PSST = document.querySelectorAll('.PSST');


centro.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('centro-hovered');
    });
});
centro.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('centro-hovered');
    });
});
centroinfo.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('centroInfo-hovered');
    });
});
centroinfo.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('centroInfo-hovered');
    });
});
infoP1.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('infoP1-hovered');
    });
});
infoP1.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('infoP1-hovered');
    });
});
infoP2.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('infoP2-hovered');
    });
});
infoP2.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('infoP2-hovered');
    });
});
infoP3.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('infoP3-hovered');
    });
});
infoP3.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('infoP3-hovered');
    });
});
infoP4.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('infoP4-hovered');
    });
});
infoP4.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('infoP4-hovered');
    });
});
infoP5.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('infoP5-hovered');
    });
});
infoP5.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('infoP5-hovered');
    });
});
PSST.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('PSST-hovered');
    })
})
PSST.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('PSST-hovered');
    })
})
desktopView.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('desktopView-hovered');
    })
})
desktopView.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('desktopView-hovered');
    })
})
/****************************************INFO  SECTION HOVERED*****************************/

/****************************************SERVICES SECTION HOVERED*****************************/
let introServices = document.querySelectorAll('.intro-services');
let introServicesP1 = document.querySelectorAll('.intro-servicesP1');
let custom = document.querySelectorAll('.custom');
let customparagraph = document.querySelectorAll('.custom-paragraph');

introServices.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('IntroServices-hovered');
    });
});
introServices.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('IntroServices-hovered');
    });
});
introServicesP1.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('introServicesP1-hovered');
    });
});
introServicesP1.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('introServicesP1-hovered');
    });
});
custom.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('custom-hovered');
    });
});
custom.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('custom-hovered');
    });
});
customparagraph.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('customparagraph-hovered');
    });
});
customparagraph.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('customparagraph-hovered');
    })
})

////////**************** PROJECT SECTION HOVER************************************** */
let introProjects = document.querySelectorAll('.intro-projects');
let projectInfo = document.querySelectorAll('.project-info');
let projectIMG = document.querySelectorAll('.project-img');
let frontend = document.querySelectorAll('.frontend');

introProjects.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('introProjects-hovered');
    });
});
introProjects.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('introProjects-hovered');
    })
})
projectInfo.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('projectInfo-hovered');
    });
});
projectInfo.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('projectInfo-hovered');
    })
})

// add a new a line of code here//

projectIMG.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('projectIMG-hovered');
    })
})
projectIMG.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('projectIMG-hovered');
    })
})

frontend.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('frontend-hovered');
    })
})
frontend.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('frontend-hovered');
    })
})


//*******ABOUT ME SECTION HOVERED********************************* */
let aboutMeP = document.querySelectorAll('.aboutMeP');
let img = document.querySelectorAll('.img');


aboutMeP.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('aboutMep-hovered');
    });
});
aboutMeP.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('aboutMep-hovered');
    });
})

img.forEach(link => {
    link.addEventListenerd('mouseover', () => {
        mouseCursor.classList.add('Img-hovered');
    });
});
img.forEach(link => {
    link.addEventListenerd('mouseleave', () => {
        mouseCursor.classList.remove('Img-hovered');
    });
});


//*******THE END OF ABOUT ME SECTION HOVERED********************************* */

//*******CONTAC ME SECTION HOVERED********************************* */
let contacto = document.querySelectorAll('.contact-intro');
let contactInfo = document.querySelectorAll('.contact-info');
let contacPlust = documen.querySelectorAll('.contacticon');
let hoverIcon = document.querySelector('.hoverIcon');
let bgcolor = document.querySelectorAll('.ng-color');


bgcolor.forEach(link => {
    
})



hoverIcon.forEach(link => {
    link.addEventListener('mouserover', () => {
        mouseCursor.classList.add('hoverIcon');
    });
});





contacto.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('contacto');
    });
});


contactInfo.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('contactInfo-hovered');
    });
});
contactInfo.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('contactInfo-hovered');
    });
});
contactIcon.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('contactIcon-hovered');
    });
});
contactIcon.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('contactIcon-hovered');
    });
});





