var user =require("../Model/userModel");

exports.index=async (req,res)=>{

  var data=await user.find();

  res.status(200).json({
      status:"Success",
      data
    })
}
exports.Add=async (req,res)=>{

    user.create(req.body);
    res.status(200).json({
        status:"Success"
      })
}
exports.get_data=async (req,res)=>{
  
  var id=req.params.id;
  var data=await user.findById(id,req.body);

  res.status(200).json({
      status:"Success",
      data
    })
}