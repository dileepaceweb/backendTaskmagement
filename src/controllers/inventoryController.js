const { response } = require("express");
const Inventory = require("../models/inventoryModel");

//==== Create=======
const createInventory = async (req, res) => {
  const data = req.body;
  const { name, vendor, price, quantity } = data;

  // Corrected regular expressions for validation
  const alphabeticRegex = /^[A-Za-z ]+$/;
  const numericRegex = /^[0-9]*\.?[0-9]+$/;

  if (!name) {
    return res.status(400).send({ message: "Name field is required" });
  } else if (!alphabeticRegex.test(name)) {
    return res
      .status(400)
      .send({ message: "Name must contain only alphabetic characters" });
  }

  if (!vendor) {
    return res.status(400).send({ message: "Vendor field is required" });
  } else if (!alphabeticRegex.test(vendor)) {
    return res
      .status(400)
      .send({ message: "Ventor must contain only alphabetic characters" });
  }

  if (!price) {
    return res.status(400).send({ message: "Price field is required" });
  } else if (!numericRegex.test(price)) {
    return res
      .status(400)
      .send({ message: "Price must contain only numeric characters" });
  }

  if (!quantity) {
    return res.status(400).send({ message: "Quantity field is required" });
  } else if (!numericRegex.test(quantity)) {
    return res
      .status(400)
      .send({ message: "Quantity must contain only numeric characters" });
  }

  try {
    const savedData = await Inventory.create(data);
    res.status(201).send({ message: "Data created successfully", savedData });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal server error", error });
  }
};

//==============fetched =========
const getInventory = async (req, res) => {
  try {
    const fetchedData = await Inventory.find();
    if (!fetchedData) {
      return res.status(404).send({ message: "Not Found Data" });
    }
    res.status(200).send({ message: "Successfully Fetched Data", fetchedData });
  } catch (error) {
    console.log("data fetched Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//============update ===========
const updateInventory = async (req, res) => {
  const id = req.params.id;
  console.log("id:",id)
  const data = req.body;
  const { name, vendor, price, quantity } = data;
  const alphabeticRegex = /^[A-Za-z ]+$/;
  const numericRegex = /^[0-9]*\.?[0-9]+$/;

  if (!alphabeticRegex.test(name)) {
    return res
      .status(400)
      .send({ message: "Name must contain only alphabetic characters" });
  }

  if (!alphabeticRegex.test(vendor)) {
    return res
      .status(400)
      .send({ message: "Vendor must contain only alphabetic characters" });
  }

  if (!numericRegex.test(price)) {
    return res
      .status(400)
      .send({ message: "Price must contain only numeric characters" });
  }

  if (!numericRegex.test(quantity)) {
    return res
      .status(400)
      .send({ message: "Quantity must contain only numeric characters" });
  }
  try {
    updatedData=await Inventory.findByIdAndUpdate(id,{name,vendor, price,quantity},{new:true})
    res.status(200).send({message:"Successfully Updated",updatedData});  
} catch (error) {
    console.log("updating Error:",error);
    res.status(500).send({message:"Internal Server Error:",error});
  }
};

//============delete============

const deleteInventory=async(req,res)=>{
    const {id}=req.params;
    console.log("id:",id)
   
    try {
        const deletedData=await Inventory.findByIdAndDelete(id);
         res.status(200).send({message:"Data Deleted Successfully:",deletedData});
        
    } catch (error) {
       console.log("Error:",error );
       res.status(500).send({message:"Internal Server Error:",error}); 
    }
}
module.exports = { createInventory, getInventory,updateInventory,deleteInventory };
