import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    cat: { type: String, required: true }, // Category of the product 
    realPrice: { type: Number, required: true }, // Original price of the product
    price: { type: Number, required: true }, // Discounted or selling price
    day: { type: Number, required: true }, // Relevant date (e.g., discount date)
    dis: { type: String, required: true }, // Description of the product
    img: { type: String, required: true }, // URL to the product image
    daily: { type: Number, required: true } // URL to the product image
});
// {name:'',status:'',cat:'',realPrice:'',price:'',day:'',dis:'',img:'',daily:''}
const productModel = mongoose.model('Product', productSchema);
export default productModel;
