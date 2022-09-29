const navbarSupportedContent = document.getElementById('navbarSupportedContent');
navbarSupportedContent.style.display ="none";
const aboutUs = document.getElementById('aboutUs');
aboutUs.style.display = "none";
//const listContacts = document.getElementById('listOfContact');

document.addEventListener('click',(e) =>
  {
    var elementClass = e.target.className;
    const contactById = document.getElementById(String(elementClass).split(' ')[1]);
    if(contactById != null && contactById.id.includes('id'))
    {
        if(contactById.style.display =="none")
        {
            contactById.style.display = "block";
        }
        else 
        {
            contactById.style.display ="none";
        }
    }
  }
);


function OpenCLoseNavbar() {
    if(navbarSupportedContent.style.display =="none")
    {
        navbarSupportedContent.style.display = "block";
    }
    else 
    {
        navbarSupportedContent.style.display ="none";
    }
}

function OpenCLoseAboutUs() {
    if(aboutUs.style.display =="none")
    {
        aboutUs.style.display = "block";
    }
    else 
    {
        aboutUs.style.display ="none";
    }
}


document.getElementById('navbar-toggler-btn').addEventListener('click', OpenCLoseNavbar);
document.getElementById('aboutUsBtn').addEventListener('click', OpenCLoseAboutUs);




