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
    }
}

/**
 * 宫坐标系工具
 */
const boxToolkit = {
    //TODO:
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