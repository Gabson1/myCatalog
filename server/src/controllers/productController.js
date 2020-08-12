// TODO: Split code --> middleware, services, .... See './userController.js' for example

import validationResult from 'express-validator';
import mongoose from 'mongoose';

import httpError from '../utils/http-error';
import Product from '../models/productModel';
import User from '../models/userModel';

// Get all products
export const getAllProducts = async (req, res) => {
	const allProducts = await Product.find();
	res.json({
		data: allProducts,
	});
};

// Get a single product
export const getProductById = async (req, res, next) => {
	const funcName = 'getProductById';
	const productId = req.params.pid;

	let product;
	try {
		product = await Product.findById(productId);
	} catch (err) {
		const error = new httpError(`${funcName}: Something went wrong`, 500);
		return next(error);
	}

	res.json({ data: product });
};

// Get products by User ID
export const getProductByUserId = async (req, res, next) => {
	const funcName = 'getProductByUserId';
	const userId = req.params.uid;

	let products;
	try {
		products = await Product.find({ creator: userId });
	} catch (err) {
		const error = new httpError(`${funcName}: Something went wrong`, 404);
		return next(error);
	}

	res.json({ data: products });
};

// CREATE product
export const createProduct = async (req, res, next) => {
	const funcName = 'createProduct';
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(
			new httpError(`${funcName}: Something went wrong`, 422)
		);
	}

	const { name, description, category, image = 'https://picsum.photos/200', creator } = req.body;

	const newProduct = new Product({
		name,
		description,
		category,
		image,
		creator,
	});

	let user;
	try {
		user = await User.findById(creator);
	} catch (err) {
		const error = new httpError(`${funcName}: The product creator must be a valid user.`);
		return next(error);
	}

	try {
		const startSession = await mongoose.startSession();
		startSession.startTransaction();
		await newProduct.save({ session: startSession });
		user.products.push(newProduct);
		await user.save({ session: startSession });
		await startSession.commitTransaction();
	} catch (err) {
		const error = new httpError(`${funcName}: Creating place failed! Please try again.`, 500);
		return next(error);
	}

	res.status(201).json({ newProduct });
};

// UPDATE product
export const updateProduct = async (req, res, next) => {
	const funcName = 'updateProduct';
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = new httpError(`${funcName}: Invalid inputs passed, please check your data`, 422);
		return next(error);
	}

	const { name, description } = req.body;
	const productId = req.params.pid;

	let product;
	try {
		product = await Product.findById(productId);
	} catch (err) {
		const error = new httpError(`${funcName}: Could not find a product to update`, 500);
		return next(error);
	}

	product.name = name;
	product.description = description;

	try {
		await product.save();
	} catch (err) {
		const error = new httpError(`${funcName}: Something went wrong`, 500);
		return next(error);
	}

	res.status(200).json({ product });
};

// DELETE product
export const deleteProduct = async (req, res, next) => {
	const funcName = 'deleteProduct';
	const productId = req.params.pid;

	let product;
	try {
		product = await Product.findById(productId).populate('creator');
	} catch (err) {
		const error = new httpError(`${funcName}: Something went wrong.`, 500);
		return next(error);
	}

	if (!product) {
		const error = new httpError(`${funcName}: Could not find a product with given ID.`, 404);
		return next(error);
	}

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await product.remove({ session: sess });
		product.creator.products.pull(product);
		await product.creator.save({ session: sess });
		await sess.commitTransaction();
	} catch (err) {
		const error = new httpError(`${funcName}: Could not find a product to delete.`, 500);
		return next(error);
	}

	res.status(200).json({ message: `${product.name} was successfully deleted` });
};
