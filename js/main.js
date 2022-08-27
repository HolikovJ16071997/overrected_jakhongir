// const ellogolikn = document.querySelector('.site_header_logo');

// const elChangeLogotext =document.querySelector('.text_logo_change')

// elChangeLogotext.addEventListener('click', function(){
//     ellogolikn.textContent = "Boshqa matin";
// });

const elDarkModeButton = document.querySelector('.site_heade_dark');
const elLightkModeButton = document.querySelector('.site_heade_light');

elLightkModeButton.addEventListener('click', function(){
    document.body.classList.remove('dark_mode');
})

elDarkModeButton.addEventListener('click', function(){
    document.body.classList.add('dark_mode');
})