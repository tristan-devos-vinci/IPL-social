export class Main {
    atLeastEight(password) {
        return password.length >= 8;
    }

    specialCharacter(password) {
        const specialCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
        for (let i = 0; i < password.length; i++) {
            if (specialCharacters.includes(password[i])) {
                return true;
            }
        }
        return false;    }

    atLeastOneNumber(password) {

    }
        

}