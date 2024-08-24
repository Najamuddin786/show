import express from "express";
import productModel from "../model/product.model.js";

const allRouter = express.Router();

allRouter.post('/productCreate',async(req,res)=>{
        let data=req.body
        try {
            let newProduct=await productModel.insertMany(data)
            res.send(`Product create successfully:, ${newProduct}`);

        } catch (error) {
            res.send(`Error creating product:, ${error.message}`);
        }
        
})
allRouter.get('/product', async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await productModel.find();
        
        // Send the products array as JSON
        res.json(products);
    } catch (error) {
        // Send error message if something goes wrong
        res.status(500).json({ message: `Product not fetched: ${error.message}` });
    }
});





export default allRouter;
