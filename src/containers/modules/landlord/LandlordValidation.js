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

    flatCost: {
        rules: [
            {
                test: /^[0-9]*$/,
                message: 'flatCost can contain only Numbers',
            },
            {
                test: (value) => {
                let cost = parseInt(value)
                return cost > 1;
            },
            message: 'flatCost cannot be zero or negative',
        },
        ],
        errors: [],
        valid: false,
        state: ''
    },
    flatAvailability: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: ' ',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },
    houseNo: {
        rules: [
            {
                test: /^[a-zA-Z0-9 ]*$/,
                message: 'House Number can contain only Numbers and Alphabets',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

    street: {
        rules: [
            {
                test: /^[a-zA-Z0-9 ]*$/,
                message: 'Street can contain only Numbers and Alphabets',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

    city: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'City must contain only alphabets characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    state: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'State must contain only alphabets characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    country: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'Country must contain only alphabets characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    pin: {
        rules: [
            {
                test: /^[0-9]*$/,
                message: 'Pin Code must contain only Numbers',
            },
            {
                test: (value) => {
                    return value.length === 6;
                },
                message: 'Pin Code should be of length 6',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

   
};

export default LandlordValidation;