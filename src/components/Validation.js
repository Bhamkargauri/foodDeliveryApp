export const DataValidation = (email, password) => {

    // console.log(email);
    // console.log(password);


    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const passwordValidation = /^(?=.{6,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(password);

    if (!emailValidation) {
        console.log("Incorrect Email");
    }

    if (!passwordValidation) {
        console.log("Wrong Password");
    }

}