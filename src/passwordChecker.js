export class Main {
    checkPassword(password) {   
        if(password.length < 8)
            return false;
        return true;
    }

}