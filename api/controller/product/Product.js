import fs from "fs/promises";
import path from "path";

const productsFilePath = path.resolve('data/products.json');

export const getProducts = async (req, res) => {
    try {
        let products = await fs.readFile(productsFilePath);
        res.status(200).json(JSON.parse(products));
    } catch (error) {
        res.status(500).json({ message: 'Error reading file', error });
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        let products = await fs.readFile(productsFilePath);
        products = JSON.parse(products);
        const product = products.find(product => product.name === id); 

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error reading file to get product', error });
    }
}