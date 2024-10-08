const express=require('express');
const ProductModel=require('../Models/product.model');


const productRouter=express.Router();

productRouter.post('/create-products',async(req,res)=>{
    try {
        const {title,price,category,subCategory,image}=req.body;
        const product=new ProductModel({
            title,price,image,category,subCategory
        })

        await product.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

productRouter.get('/get-products',async(req,res)=>{
    try {
        const product=await ProductModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",product
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

productRouter.get('/get-product/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await ProductModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",product
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=productRouter