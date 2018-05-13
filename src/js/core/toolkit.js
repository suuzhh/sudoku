/**
 * 矩阵和数组相关
 */
const matrixToolkit = {
    makeRow(v = 0) {
        const array = new Array(9)
        return array.fill(v)
    },
    
    /**
     * 初始化矩阵
     * @param {} v 填充的初始值
     */
    makeMatrix(v = 0) {
        return Array.from({ length: 9 }, () => this.makeRow(v))
    },
    
    /**
     * Fisher-Yates 洗牌算法
     * @param {*} array 
     */
    shuffle(array) {
        const endIndex = array.length - 1
        for (let i = 0; i < endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
    
            [array[i], array[j]] = [array[j], array[i]]
            console.log(array)
        }
        return array
    },

    /**
     * TODO: 检查指定位置可以填写数字
     */
    checkFillable(matrix, n, rowIndex, colIndex) {
        const row = matrix[rowIndex]
        const column = this.makeRow().map((v, i) => matrix[i][colIndex])
        const { boxIndex } = boxToolkit.convertToBoxIndex(rowIndex, colIndex)
        const box = boxToolkit.getBoxCells(matrix, boxIndex)
        // TODO: 检测宫内数据


        return true
    }

}

/**
 * 宫坐标系工具
 */
const boxToolkit = {
    getBoxCells(matrix, boxIndex) {
        const startRowIndex = Math.floor(boxIndex / 3) * 3
        const startColIndex = boxIndex % 3 * 3
        const result = []
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            const rowIndex = startRowIndex + Math.floor(cellIndex / 3)
            const colIndex = startColIndex + cellIndex % 3
            result.push(matrix[rowIndex][colIndex])
        }
        return result
    },

    /**
     * 根据行列坐标获得 宫坐标和宫内坐标
     * @param {*} rowIndex 行坐标
     * @param {*} colIndex 列坐标
     */
    convertToBoxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        }
    },

    /**
     * 根据宫坐标和宫内坐标 获得对应的行列坐标
     * @param {*} boxIndex 宫坐标
     * @param {*} cellIndex 宫内坐标
     */
    convertFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        }
    }
}

// 工具集
export default class Toolkit {
    /**
     * 矩阵和数据相关的工具
     */
    static get matrix() {
        return matrixToolkit
    }

    /**
     * 宫坐标系相关工具
     */
    static get box() {
        return boxToolkit
    }
}