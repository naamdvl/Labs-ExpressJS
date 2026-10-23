import { Router, Request, Response } from "express"

export class LabsController{
    public static getListLabs = (req: Request, res: Response): void => {

        res.status(501).json({
        success: false,
        message: `Lista no encontrada de laboratorios y espacios fisicos`
        });
    };

    public static postLabs = (req: Request, res: Response): void => {

        res.status(501).json({
        success: false,
        message: `Formulario de registro no encontrado`
        });
    };

    public static updateLabs = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Laboratorio o Espacio no encontrado: ${id}`
        });
    };
}