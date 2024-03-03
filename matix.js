function createMatrix() {
    var matrix = [];
    var size = 3; // Cấp của ma trận (3x3)

    // Tạo các hàng và cột trong ma trận
    for (var i = 0; i < size; i++) {
        matrix[i] = []; // Tạo một hàng mới
        for (var j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10); // Sinh ngẫu nhiên các giá trị từ 0 đến 9
        }
    }

    return matrix;
}

// In ma trận ra màn hình
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

// Sử dụng
var matrix = createMatrix();
console.log('Ma trận cấp 3 được tạo:');
printMatrix(matrix);
