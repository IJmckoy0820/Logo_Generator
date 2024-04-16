const Logo = require('../shapes.js');


describe('text length', () => {

    it('should display error message if 4 or more charactes is input. ', () => {
        const cb = () => new Logo('asdf');
        const err = new Error('text must contain no more than 3 characters.');
        expect(cb).toThrowError(err);

    });


});

// describe('shape select', () => {

//     it('should display what shape hasbeen selected . ', () => {
//         const shape = new Logo("asd","circle");
//         const shapes = shape.shapeSelect('circle');

//         expect(shapes).toBe('circle selected');

//     });


// });