import { Request,Response } from "express"; 
import { IUser } from "../models/IUser";
import { Userutil } from "../Util/Userutil";
import { Userutilcopy } from "../Util/UserutilId";


export const getAlluser = async (request:Request,responce:Response)=>{
    try {
        let userData: IUser[] = await Userutil.getAlluser();
        responce.status(200).json(userData)
    }
    catch (err) {
        responce.status(500).json({
            msg: "server error"
        })
    }
}
export const getuser = async (request:Request,responce:Response) => {
    try {
        let { name } = request.params;
        console.log(request.params);
        
        let userData:IUser|undefined=await Userutil.getuser(String(name));
        if (userData)
        responce.status(200).json(userData)
    }
    catch (err) {
        responce.status(500).json({
            msg: "server error"
        })
    }
}
export const getuserId = async (request:Request,responce:Response)=>{
    try {
        let { userId } = request.params;
        console.log(request.params);
        
        let userData:IUser|undefined=await Userutilcopy.getuserId(Number(userId));
        if (userData)
        responce.status(200).json(userData)
    }
    catch (err) {
        responce.status(500).json({
            msg: "server error"
        })
    }
}  
