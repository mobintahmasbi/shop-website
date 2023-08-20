import { Test, TestingModule } from '@nestjs/testing';
import { HashServiceService } from './hash-service.service';

describe('HashServiceService', () => {
  let service: HashServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashServiceService],
    }).compile();

    service = module.get<HashServiceService>(HashServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
