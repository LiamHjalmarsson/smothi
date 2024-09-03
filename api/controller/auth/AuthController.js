import path from 'path';
import fs from "fs/promises";
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';

const usersFilePath = path.resolve('data/users.json');

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const data = await fs.readFile(usersFilePath);
    const users = JSON.parse(data);

    const user = users.find(user => user.email === email);

    if (user) {
        let passwordIsMatch = await bcrypt.compare(password, user.password);

        if (passwordIsMatch) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}

export const register = async (req, res) => {
    try {
        let { password, password_confirm, ...userData } = req.body;

        if (!password || !password_confirm) {
            return res.status(400).json({ message: 'All fields needs to be filed' });
        }

        if (password !== password_confirm) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        let user = {
            ...userData,
            id: nanoid(),
            password: hashedPassword
        }

        let users = JSON.parse(await fs.readFile(usersFilePath));
        users.push(user);

        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
        res.status(201).json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out', error });
    }
}
