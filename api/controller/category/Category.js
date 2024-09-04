import fs from "fs/promises";
import path from "path";

const categoriesFilePath = path.resolve('data/categories.json');

export const getCategories = async (req, res) => {
    try {
        let categories = await fs.readFile(categoriesFilePath);
        res.status(200).json(JSON.parse(categories));
    } catch (error) {
        res.status(500).json({ message: 'Error reading file', error });
    }
}

export const getCategory = async (req, res) => {

}