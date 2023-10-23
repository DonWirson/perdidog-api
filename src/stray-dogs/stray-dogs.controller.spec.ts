import { Test, TestingModule } from '@nestjs/testing';
import { StrayDogsController } from './stray-dogs.controller';
import { StrayDogsService } from './stray-dogs.service';

describe('StrayDogsController', () => {
  let controller: StrayDogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrayDogsController],
      providers: [StrayDogsService],
    }).compile();

    controller = module.get<StrayDogsController>(StrayDogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
