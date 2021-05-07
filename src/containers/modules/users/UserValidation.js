/************************************************************************************
     * Component: UserValidations
     * Description: It is used to perform custom validations for User Form
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-04-2021 
 ************************************************************************************/

const UserValidation = {
    userName: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'User Name must contain only alphabets characters',
            },
            {
                test: (value) => {
                    return value.length > 3;
                },
                message: 'User Name must be longer than three characters ',
            },
        ],
        errors: [],
        valid: false,
        state: '',
    },

    password: {
        rules: [
            {
                test: /(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}/,
                message: 'Password should be in this format : Aeiou@2000',

            },


        ],
        errors: [],
        valid: false,
        state: '',
    },

    userType: {
        rules: [
            {
                test: /^[a-zA-Z ]*$/,
                message: 'User Type can contain only Alphabets and Should be Admin,Landlord,Tenant',
            },
        ],
        errors: [],
        valid: false,
        state: ''
    },

    newpass: {
        rules: [
            {
                test: /(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}/,
                message: 'Password should be in this format : Aeiou@2000',

            },


        ],
        errors: [],
        valid: false,
        state: '',
    },

};

export default UserValidation;
