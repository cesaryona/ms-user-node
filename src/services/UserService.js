import userModel from "../models/UserModel.js";

export const findAll = async () => {
    return await userModel.find();
}

export const findUserById = async (userId) => {
    const current = await userModel.findById(userId);

    if (!current) {
        throw new Error('User not found');
    }

    return current;
}

export const createUser = async (userRequestBody) => {
    const { firstName, lastName, email } = userRequestBody

    const user = await userModel.create({
        firstName,
        lastName,
        email
    })

    return user;
}

export const updateUser = async (id, userRequestBody) => {
    const current = await findUserById(id);

    const { firstName, lastName, email } = userRequestBody;

    Object.assign(current, userRequestBody);

    return await current.save();
}

export const deleteUser = async (userId) => {
    await userModel.findByIdAndDelete(userId);
    return { message: 'User deleted successfully' };

}