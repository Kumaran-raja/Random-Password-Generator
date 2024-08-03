function generate(num){
    // function generatePassword(length) {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        const allChars = uppercase + lowercase + numbers + specialChars;
        let password = '';
        
        for (let i = 0; i < num; i++) {
          const randomIndex = Math.floor(Math.random() * allChars.length);
          password += allChars[randomIndex];
        }
        
        document.getElementById("password").innerText="Password : "+password;
        
}
