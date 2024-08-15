const Product = require('../models/productModel.js')

const getProducts = async (req,res) => {
        try{
            const products = await Product.find({})
            res.status(200).json(products)
        } catch (error){
            res.status(500).json({message: error})
        }
}

const getProduct = async (req,res) => {
    try{
        const { id } = req.params
        const products = await Product.findById(id)
        res.status(200).json(products)
    } catch (error){
        res.status(500).json({message: error})
    }
}

const createProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        const { id } = req.params
        const updatedData = req.body
        const product = await Product.findByIdAndUpdate(id, updatedData, {new:true})
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }catch (error){
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async(req, res) => {
    try{
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json({message: "product deletes succesfully"})
        if(!product){
            return res.status(404).json({message:'product not found'})
        }
    } catch (error){
        res.status(500).json({message: error})
    }
}

module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}