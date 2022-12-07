const UserModel = require('../Models/UserModel');

class UserController {
    async banco (req, res){
        const createdUser = await UserModel.create(req.body);

        return res.status(200).json(createdUser);
    }
    
    async index (req, res){
        const users = await UserModel.find();

        return res.status(200).json({ users })
    }

    async show(req, res){
try {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    if(!user){
        return res.status(404).json({message: "User does not exists"});
    }

    return res.status(200).json(user);

} catch (error) {
    return res.status(404).json({message: "Verify the user ID"});
}
    } // Se não tiver nenhum id de user retornar error 404

    async update(req, res){
       try {
        const { id } = req.params;
        
        await UserModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({ message: "User updated" });
       } catch (error) {
        return res.status(404).json({message: "Failed to update user"});
       } 

    }
}

module.exports = new UserController();