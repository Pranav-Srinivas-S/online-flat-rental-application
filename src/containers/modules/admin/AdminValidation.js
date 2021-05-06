const AdminValidation = {
    adminPassword: {
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

}
export default AdminValidation;