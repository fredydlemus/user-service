const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    try{
        const {name, email} = req.body;
        const user = await prisma.user.create({ data: { name, email } });
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({ error: error.message})
    }
}

exports.getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
}