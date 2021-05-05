const LandlordValidation = {
    landlordName: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'Landlord Name must contain only alphabets characters',
            },
            {
                test: (value) => {
                    return value.length > 3;
                },
                message: 'Landlord Name must be longer than three characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    landlordAge: {
        rules: [
            {
                test: (value) => {
                    let age = parseInt(value)
                    return age > 0;
                },
                message: 'Landlord Age cannot be Negative',
            },
            {
                test: (value) => {
                    let age = parseInt(value)
                    let defaultAge = parseInt(0);
                    return age !== defaultAge;
                },
                message: 'Landlord Age cannot be Zero',
            },
            {
                test: (value) => {
                    let age = parseInt(value)
                    return age > 18;
                },
                message: 'Landlord Age cannot be Minor',
            },
            {
                test: /^[0-9]*$/,
                message: 'Landlord Age must contain only numbers',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

   
};

export default LandlordValidation;