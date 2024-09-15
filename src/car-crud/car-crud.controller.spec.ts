import { Test, TestingModule } from '@nestjs/testing';
import { CarCrudController } from './car-crud.controller';
import { CarCrudService } from './car-crud.service';

describe('CarCrudController', () => {
  let controller: CarCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarCrudController],
      providers: [CarCrudService],
    }).compile();

    controller = module.get<CarCrudController>(CarCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
