import express, { Express } from 'express'

export function configureMiddlewares(app: Express): void {
  app.use(express.json())
}
