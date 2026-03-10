document.addEventListener('DOMContentLoaded', () => {
    const togglePass = document.getElementById('togglePass');
    const passInput = document.getElementById('pass');

    if (togglePass && passInput) {
        togglePass.addEventListener('click', function() {
            const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passInput.setAttribute('type', type);
            
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
            
            this.style.color = (type === 'text') ? '#4f46e5' : '#475569';
        });
    }
});