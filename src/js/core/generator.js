// 生成数独解决方案
import Toolkit from './toolkit'

class Generator {
    generate() {
        while (!this.internalGenerate()) {
            console.warn("try again")
        }
    }

    internalGenerate() {
        // 生成矩阵
        this.matrix = Toolkit.matrix.makeMatrix()
        // 生成随机矩阵
        this.orders = Toolkit.matrix.makeMatrix()
            .map(row => row.map((v, i) => i))
            .map(row => Toolkit.matrix.shuffle(row))

        for (let n = 1; n <= 9; n++) {
            if (!this.fillNumber(n)) {
                return false
            }
        }
        return true
    }

    /**
     * 往矩阵填充数字
     * @param {*} n 所要填充的数字
     */
    fillNumber(n) {
        return this.fillRow(n, 0)
    }

    /**
     * 填充 宫
     * @param {*} n 需要填充的数字
     * @param {*} rowIndex 所在的行
     */
    fillRow(n, rowIndex) {
        if (rowIndex > 8) {
            return true
        }

        const row = this.matrix[rowIndex]
        // 随机位置矩阵 的 当前 row
        const orders = this.orders[rowIndex]

        for (let i = 0; i < 9; i++) {
            const colIndex = orders[i]
            // 如果这个位置已经有值， 跳过
            if (row[colIndex]) {
                continue
            }

            // 检查这个位置是否可以填 n 
            if (!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                continue
            }

            row[colIndex] = n
            // 去下一行填写， 如果没填进去 就继续寻找当前行的下一个位置
            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0
                continue
            }

            return true
        }

    }
}


export default Generator