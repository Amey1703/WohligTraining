const {sum, myFunction, fetchData} = require('./sum');

test('adds 1 + 2 to 3', () =>{
    expect(sum(1,2)).toBe(3);
})

test('object assignment', () =>{
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('null is falsy', () =>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('throws an invalid input', () =>{
    expect(() => {
        myFunction(invalidInput);
    }).toThrow();
    
});

test('data is peanut butter', (done) => {
    function callback(data){
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
})

test('Mock implementation of a function', () => {
    const mock = jest.fn(x => 2**x);
    expect(mock(2)).toBe(4)
})

// Spy
test('Spying on a function', () => {
    const video = {
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})