export class Main {
    atLeastEight(password) {
        return password.length >= 8;
    }

    specialCharacter(password) {
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    }

    atLeastOneNumber(password) {
    }
        

}