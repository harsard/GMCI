import { Customer2Module } from './customer2.module';

describe('Customer2Module', () => {
  let customer2Module: Customer2Module;

  beforeEach(() => {
    customer2Module = new Customer2Module();
  });

  it('should create an instance', () => {
    expect(customer2Module).toBeTruthy();
  });
});
