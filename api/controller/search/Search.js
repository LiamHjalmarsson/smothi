import fs from 'fs/promises';
import path from 'path';

const productsFilePath = path.resolve('data/products.json');

export const search = async (req, res) => {
    const query = req.query.query.toLowerCase();
    
    try {
        const data = await fs.readFile(productsFilePath, 'utf8');
        const products = JSON.parse(data);
        
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        
        res.json(filteredProducts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}
