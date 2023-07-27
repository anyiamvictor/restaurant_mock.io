function createHome() {  
    const homeBody = document.createElement('div'); 
    const text = document.createElement('div');
    const welcomeMsgText = document.createElement('p');    

    welcomeMsgText.textContent = "Welcome to De' Local Restaurant. Wer'e  not french so dont mind the name"
    text.classList.add('welcomemessage');
    text.append(welcomeMsgText);
    homeBody.append(text);

    return homeBody;
}


function loadHome() {
    const contentWrapper = document.getElementById('main');
    contentWrapper.textContent = '';
    contentWrapper.append(createHome());
    
}
export default loadHome ;