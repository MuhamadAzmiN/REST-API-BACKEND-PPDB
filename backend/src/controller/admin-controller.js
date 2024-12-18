import e from "express"
import adminService from "../service/admin-service.js"


const getAllDaftar = async (req,res,next) => {
    try {
        const result = await adminService.getAllDaftar()
        res.status(200).json({
            data : result
        })
    }catch (error) {
        next(error)
    }
}



const updateDaftar = async (req,res,next) => {
    try {
        const user = req.user
        const daftarId = req.params.id
        const request = req.body
        request.id = daftarId
        const result = await adminService.updateDaftar(user, req.body)
        res.status(200).json({
            data : result
        })
    }catch (error) {
        next(error)
    }
}


const deleteDaftar = async (req,res,next) => {
    try{

        const daftarId = req.params.id
        const result = await adminService.deleteDaftar(daftarId)
        res.status(200).json({
            data : "Data dengan nama lengkap " + result.nama_lengkap + " berhasil dihapus"
        })
    }catch (error) {
        next(error)
    }
}



const userketeranganLulus = async (req,res,next) => {
    try{
        const daftarId = req.params.id
        console.log(daftarId)
        const result = await adminService.userketeranganLulus(daftarId)
        res.status(200).json({
            data : result
        })
    }catch (error) {
        next(error)
    }
}



const getAllUser = async (req,res,next) => {
    try {
        const result = await adminService.getAllUser()
        res.status(200).json({
            data : result
        })
    }catch (error) {
        next(error)
    }
}


const getAllTransaksi = async (req,res,next) => {
    try {
        const result = await adminServismce.getAllTransaksi()
        res.status(200).send({
            data : result,
        })

    }catch(error) {
        next(error)
    }
}


const updateTransaksi = async (req,res,next) => {
    try {
        const user = req.user
        const id = req.params.id
        const request = req.body
        console.log(user)
        request.id = id 
        const result = await adminService.updateTransaksi(req.user, req.body)
        res.status(200).json({
            data : result
        })


    }catch (error) {
        next(error)
    }
}






export default {
    getAllDaftar,
    updateDaftar,
    deleteDaftar,
    userketeranganLulus,
    getAllUser,
    getAllTransaksi,
    updateTransaksi

}