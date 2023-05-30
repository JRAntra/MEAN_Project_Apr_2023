import { FirstTwentyCharsPipe } from './first-twenty-chars.pipe';

describe('FirstTwentyCharsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstTwentyCharsPipe();
    expect(pipe).toBeTruthy();
  });
});
