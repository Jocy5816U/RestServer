const {Schema, model} = require ("mongoose");

const UsuariosSchema = Schema({
    nombre:{
        type:String,
        require:[true, 'el nombre es obligatorio']
    },
    correo:{
        type:String,
        require:[true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type:String,
        require:[true, 'la contraseña es obligatoria']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        require:true,
        emun:['ADMIN_ROLE', 'USER_ROL']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:true
    },

});
module.exports= model('Usuarios', UsuariosSchema);
