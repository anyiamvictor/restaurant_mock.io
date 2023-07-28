function createCredits(){
    const aboutContainer = document.createElement('div');
    const creditsTitle = document.createElement('h1');
    const credits = document.createElement('p');
    aboutContainer.id = 'aboutid';
    

    creditsTitle.textContent = "credits";
    credits.innerHTML = `Thanks to<a href=https://www.theodinproject.com/dashboard> the odin project</a> for the resoures to learn, <a href=https://unsplash.com/>Unsplash</a>  for their open licence to use their images and to the following individuals whose images i used in this little project.<br><br>
    1.Prithivaraj A<br>
    2.anh nguyen<br>
    3.chad montano<br>
    4.eiliv aceron`;

    aboutContainer.append(creditsTitle);
    aboutContainer.append(credits);

    return aboutContainer
}

function loadAbout() {
    const contentWrapper = document.getElementById('main');
    contentWrapper.innerHTML = '';
    contentWrapper.append(createCredits());


}
export default loadAbout