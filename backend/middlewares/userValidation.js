const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome digitado não é uma string")
            .isLength({ min: 3 })
            .withMessage("O nome deve ter no minimo 3 caracteres"),
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatorio")
            .isEmail()
            .withMessage("Insira um e-mail valido"),
        body("password")
            .isString()
            .withMessage("Insira uma senha")
            .isLength({ min: 6 })
            .withMessage("A senha deve ter no minimo 6 caracteres"),
        body("confirmpassword")
            .isString()
            .withMessage("Confirme a senha")
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("As senhas não são iguais");
                }
                return true;
            }),
    ];
};

module.exports = {
    userCreateValidation,
};
