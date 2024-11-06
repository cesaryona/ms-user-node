import { findAll, findUserById, createUser, updateUser, deleteUser } from '../services/UserService.js'

export const getAll = async (req, res) => {
    const users = await findAll();

    return res.status(200).json(users);
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findUserById(id);
        
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: error.message})
    }
    
}

export const save = async (req, res) => {
    try {
        const user = await createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const update = async (req, res) => {
    const { id } = req.params;

    try {
        const userUpdated = await updateUser(id, req.body);

        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteById = async (req, res) => {
    const { id } = req.params;

    const deleted = await deleteUser(id);

    return res.status(200).json(deleted);
}
