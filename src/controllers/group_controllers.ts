import { Router, Request, Response } from "express"

export class GroupsController{
    public static newGroupLab = (req: Request, res: Response): void => {
        
        res.status(501).json({
        success: false,
        message: `Formulario de registro para equipo no encontrado`
        });
    };

    public static listGroupExists = (req: Request, res: Response): void => {
        
        res.status(501).json({
        success: false,
        message: `Lista de grupos existentes en los laboratorios no encontrada`
        });
    };

    public static updateGroup = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Formulario de actualizacion no encontrado: ${id}`
        });
    };
}