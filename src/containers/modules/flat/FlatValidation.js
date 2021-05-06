/************************************************************************************
     * Component:FlatValidations
     * Description: It is used to perform custtom validations for Flat Form
     * Created By:AJITHKUMAR A
     * Created Date:  03-04-2021 
 ************************************************************************************/

const FlatValidation = {
    flatCost: {
        rules: [
            {
                test: (value) => {
                    return value > 0;
                },
                message: 'Flat Cost cannot be 0 or a negative number'
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    flatAvailability: {
        rules: [
            {
                test: (value) => {
                    return value.length > 1;
                },
                message: 'Flat Availability can only be yes/no',
            },
        ],
        errors: [],
        valid: false,
        state: '',
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
export default FlatValidation;