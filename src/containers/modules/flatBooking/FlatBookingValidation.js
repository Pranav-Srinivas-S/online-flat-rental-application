// const FlatBookingValidation = {  
//     bookingFromDate: {
//         rules: [
//             {
//                 test: /^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$/,
//                 message: 'Tenant Name must contain only alphabets characters',
//             },
        
//         ],
//         errors: [],
//         valid: false,
//         state: '',
//     },


//     bookingToDate: {
//         rules: [
//             {
//                 test: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
//                 message: 'Tenant Name must contain only alphabets characters',
//             },
        
//         ],
//         errors: [],
//         valid: false,
//         state: '',
//     },

//     tenantAge: {
//         rules: [
//             {
//                 test: (value) => {
//                     let age = parseInt(value)
//                     return age > 0;
//                 },
//                 message: 'Tenant Age cannot be Negative',
//             },
//             {
//                 test: (value) => {
//                     let age = parseInt(value)
//                     let defaultAge = parseInt(0);
//                     return age !== defaultAge;
//                 },
//                 message: 'Tenant Age cannot be Zero',
//             },
//             {
//                 test: (value) => {
//                     let age = parseInt(value)
//                     return age > 18;
//                 },
//                 message: 'Tenant Age cannot be Minor',
//             },
//             {
//                 test: /^[0-9]*$/,
//                 message: 'Tenant Age must contain only numbers',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: ''
//     },

//     houseNo: {
//         rules: [
//             {
//                 test: /^[a-zA-Z0-9 ]*$/,
//                 message: 'House Number can contain only Numbers and Alphabets',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: ''
//     },

//     street: {
//         rules: [
//             {
//                 test: /^[a-zA-Z0-9 ]*$/,
//                 message: 'Street can contain only Numbers and Alphabets',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: ''
//     },

//     city: {
//         rules: [
//             {
//                 test: /^[a-zA-Z ]*$/,
//                 message: 'City must contain only alphabets characters',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: '',
//     },

//     state: {
//         rules: [
//             {
//                 test: /^[a-zA-Z ]*$/,
//                 message: 'State must contain only alphabets characters',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: '',
//     },

//     country: {
//         rules: [
//             {
//                 test: /^[a-zA-Z ]*$/,
//                 message: 'Country must contain only alphabets characters',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: '',
//     },

//     pin: {
//         rules: [
//             {
//                 test: /^[0-9]*$/,
//                 message: 'Pin Code must contain only Numbers',
//             },
//             {
//                 test: (value) => {
//                     return value.length === 6;
//                 },
//                 message: 'Pin Code should be of length 6',
//             },
//         ],
//         errors: [],
//         valid: false,
//         state: ''
//     },
// };

// export default FlatBookingValidation;