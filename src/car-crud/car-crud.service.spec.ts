import { Test, TestingModule } from '@nestjs/testing';
import { CarCrudService } from './car-crud.service';

describe('CarCrudService', () => {
  let service: CarCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarCrudService],
    }).compile();

    service = module.get<CarCrudService>(CarCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
