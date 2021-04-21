import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

/**
 * GET => Buscas
 * POST => Criação
 * PUT => Alteração
 * DELETE => Deletar
 * PATCH => Alterar uma informação específica
 */

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };