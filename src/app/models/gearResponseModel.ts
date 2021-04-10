import { Gear } from "./gear";
import { ResponseModel } from "./responseModel";

export interface GearResponseModel extends ResponseModel{
    data:Gear[]
}