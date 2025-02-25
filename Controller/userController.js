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
exports.get_data_api=async(req,res)=>{

  var id=req.params.id;

  var total_data=await user.find().countDocuments();
  var page_no=req.query.page_no || 1;

  if(page_no==undefined)
  {
      page_no=1;
  }
  console.log('total data='+page_no)

  var limit=1;

  var t_page=Math.ceil(total_data/limit);
  var start=(page_no-1)*limit;
  var data=await user.find().skip(start).limit(limit);

  res.status(200).json({
      status:"Success data",
      data,
      page_no,
      t_page
  })
}