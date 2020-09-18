//[bg color][text color]
const colorsLibrary = {
    2: ['rgb(238, 228, 218)', 'rgb(119, 110, 101)'],
    4: ['rgb(237, 224, 200)', 'rgb(119, 110, 101)'],
    8: ['rgb(242, 177, 121)', 'rgb(249, 246, 242)'],
    16: ['rgb(245, 149, 99)', 'rgb(249, 246, 242)'],
    32: ['rgb(246, 124, 95)', 'rgb(249, 246, 242)'],
    64: ['rgb(246, 94, 59)', 'rgb(249, 246, 242)'],
    128: ['rgb(237, 207, 114)', 'rgb(249, 246, 242)'],
    256: ['rgb(237, 204, 97)', 'rgb(249, 246, 242)'],
    512: ['rgb(237, 200, 80)', 'rgb(249, 246, 242)'],
    1024: ['rgb(237, 197, 63)', 'rgb(249, 246, 242)'],
    2048: ['rgb(237, 194, 46)', 'rgb(249, 246, 242)']
};
//fieldINarray[row][column][number in filled cell = 0 or count to move = 1(for moveWithArrow function)] 
let fieldINarray = [[[0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0]]];
// console.log(fieldINarray[1][0][0])