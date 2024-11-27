import express from 'express';
import userController from '../controller/userController.js';
import daftarController from '../controller/daftar-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';
import transaksiController from '../controller/transaksi-controller.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware)


userRouter.get("/users/profile", userController.getProfile)
userRouter.post("/users/daftar", daftarController.daftar)
userRouter.delete("/users/logout", userController.logout)
userRouter.get("/users/daftar/:nama_lengkap", daftarController.getDaftarUser)
userRouter.post("/users/bayar/:id",transaksiController.transaksiPembayaran)

export {
    userRouter
}








