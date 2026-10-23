import { Router, Request, Response } from "express"

export class UsuariosController{
    public static getLoansUsers = (req: Request, res: Response): void => {
        // TODO: pasar id a la operación de aceptación y responder con el resultado.
        res.status(200).json({
        success: true,
        message: `lista de usuarios `,
        perfil_estudiantes: [
            {user: `pedro`, id: `102039490`},
            {user: `sanchez`, id: `3920384829`}
        ], 
        perfil_profesores: [],
        perfil_administrador: []
        
        });
    };

    public static addNewUser = (req: Request, res: Response): void => {
        res.status(501).json({
        success: false,
        message: `Falta la implementacion del formulario para registro`
        });
    };

    public static getUserById = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado: ${id}`
        });
    };

    public static updateUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado para actualizar: ${id}`
        });
    };

    public static deleteUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado para eliminar: ${id}`
        });
    };
}