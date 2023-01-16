const submitBtn = document.querySelector('.submit-btn');

if(submitBtn) {
    submitBtn.addEventListener('click', validateForm);
}

document.querySelector('.pve-button').addEventListener('click', function () {
    validateForm()
    x = document.querySelector('.fname').value;
    y =  document.querySelector('.fname-two').value;
    localStorage.setItem("playerOne", x);
    localStorage.setItem("playerTwo", y);
    window.open('pve.html', '_self');
})