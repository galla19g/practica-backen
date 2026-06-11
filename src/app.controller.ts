import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  @ApiExcludeEndpoint() // Evita que esta ruta aparezca repetida en Swagger
  @Redirect('/api', 301)
  redirectToSwagger() {}
}
