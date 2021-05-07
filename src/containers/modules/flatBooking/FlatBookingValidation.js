
/************************************************************************************
     * Component:FlatValidations
     * Description: It is used to perform custtom validations for FlatBooking Form
     * Created By:SHAIK ABDUL BASHEER
     * Created Date:  03-04-2021 
 ************************************************************************************/
 const FlatBookingValidation = { 
    
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

    fhouseNo: {
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

    fstreet: {
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

    fcity: {
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

    fstate: {
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

    fcountry: {
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

    fpin: {
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


    tenantName: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'Tenant Name must contain only alphabets characters',
            },
            {
                test: (value) => {
                    return value.length > 3;
                },
                message: 'Tenant Name must be longer than three characters',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    tenantAge: {
        rules: [
            {
                test: (value) => {
                    let age = parseInt(value)
                    return age > 0;
                },
                message: 'Tenant Age cannot be Negative',
            },
            {
                test: (value) => {
                    let age = parseInt(value)
                    let defaultAge = parseInt(0);
                    return age !== defaultAge;
                },
                message: 'Tenant Age cannot be Zero',
            },
            {
                test: (value) => {
                    let age = parseInt(value)
                    return age > 18;
                },
                message: 'Tenant Age cannot be Minor',
            },
            {
                test: /^[0-9]*$/,
                message: 'Tenant Age must contain only numbers',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

    thouseNo: {
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

    tstreet: {
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

    tcity: {
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

    tstate: {
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

    tcountry: {
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

    tpin: {
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

export default FlatBookingValidation;