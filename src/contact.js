
function createContact() {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact'); 
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    

    address.textContent = 'Address: No. 23  Dream World Housing Estate';
    phone.textContent = 'Phone: +234-5478-910';
    email.textContent= 'Email: delocalRez@instanceof.qualm'

    contactWrapper.append(address);
    contactWrapper.append(phone);
    contactWrapper.append(email);

    return contactWrapper;
}

function loadContact() {
    const contentWrapper = document.getElementById('main');
    contentWrapper.textContent = '';
    contentWrapper.append(createContact());
}

export default loadContact;