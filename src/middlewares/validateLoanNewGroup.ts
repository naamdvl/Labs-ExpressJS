import { Request, Response, NextFunction } from 'express';
import { ICreateNewLabsDTO } from '../dtos/loanNewLabs';

const isCreateNewLabsDTO = (value: unknown): value is ICreateNewLabsDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const loan = value as Record<string, unknown>;
    return (
        typeof loan.idEquipo === 'string' && loan.idEquipo.trim() !== '' &&
        typeof loan.marcaEquipo === 'string' && loan.marcaEquipo.trim() !== '' &&
        typeof loan.herramientas === 'string' && loan.herramientas.trim() !== '' 
    );
};

export const validateLoanNewGroup = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateNewLabsDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del equipo inválidos.'
        });
        return;
    }
    next();
};