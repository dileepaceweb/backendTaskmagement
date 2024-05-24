const express=require("express");
const router=express.Router();

const{createInventory, getInventory, updateInventory, deleteInventory}=require("../controllers/inventoryController");
router.post("/create",createInventory);
router.get("/fetched",getInventory);
router.put("/update/:id",updateInventory);
router.delete("/delete/:id",deleteInventory);

module.exports=router;