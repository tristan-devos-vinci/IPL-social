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
        const numbers = "0123456789";
        for (let i = 0; i < password.length; i++) {
            if (numbers.includes(password[i])) {
                return true;
            }
        }
        return false;
    }

    noIPL(password) {
        return !password.toLowerCase().includes("ipl");
    }


    isValid(password) {
        return this.atLeastEight(password) && this.specialCharacter(password) && this.atLeastOneNumber(password) && this.noIPL(password);
    }
        

}