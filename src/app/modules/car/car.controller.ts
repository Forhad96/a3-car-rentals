import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createCar, getAllCars, updateSingleCar } from './car.service';

const handleCreateCar = catchAsync(async (req, res) => {
  const result = await createCar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});


const handleGetAllCars = catchAsync(async (req,res)=>{
    const result = await getAllCars()
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Cars retrieved successfully',
        data: result,
      });
})
const handleUpdateSingleCar = catchAsync(async (req,res)=>{
    
    
    const {carId} = req.params
    const result = await updateSingleCar(carId,req.body)


      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Cars updated successfully',
        data: result,
      });
})



export { handleCreateCar,handleGetAllCars,handleUpdateSingleCar };
