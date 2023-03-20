import reverse from '../src/reverse';

test('reverse', () => {
    expect(reverse('hello!')).toEqual('!olleh');
    expect(reverse('')).toEqual('');
});