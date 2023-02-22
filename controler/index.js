const { findOneAndUpdate } = require('../Model/user');
const UserModel = require('../Model/user');
const first = function (req,res) {
    res.send('Hello World');
};

const createRecord = async (req,res) => {
    const newRecord = new UserModel ({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: '1',
    });
   // console.log("newRecord",newRecord);
   const saveData = await newRecord.save(); 
   res.send(saveData);
};

const updateRecord = async(req,res) => {
    const updateData = await UserModel.findOneAndUpdate(
        { _id: req.body.id },
        {
            email:req.body.email,
            name: req.body.name,
        }
    );
  
    // res.send("Data Updated Successfully ");  
   // Bind An API 
   const findRecord = await UserModel.findById({ _id: req.body.id });
   res.send(findRecord);
};

const deleteRecord = async (req,res) => {
  await UserModel.findByIdAndDelete({_id: req.body.id });
  res.send("Data Deleted Successflly ");
};
module.exports = {
    first,
    createRecord,
    updateRecord,
    deleteRecord,
}