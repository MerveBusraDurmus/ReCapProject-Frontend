import { Fuel } from "./fuel";
import { ResponseModel } from "./responseModel";

export interface FuelResponseModel extends ResponseModel{
    data:Fuel[]
}