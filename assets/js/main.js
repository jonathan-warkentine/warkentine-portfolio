workSect = document.getElementById('work');
aboutSect = document.getElementById('about');

function hideWork(){
    workSect.setAttribute('style', 'display: none;');
    aboutSect.setAttribute('style', 'display: flex;');
}

function hideAbout(){
    aboutSect.setAttribute('style', 'display: none;');
    workSect.setAttribute('style', 'display: flex;');
}