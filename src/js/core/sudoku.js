// 生成数独游戏
import Generator from './generator'



export default class Sudoku {
    constructor() {
        // 生成完成的解决方案
        const generator = new Generator()
        generator.generate()
        this.solutionMatrix = generator.matrix
    }

    // 生成迷盘
    make(level = 5) {
        this.puzzleMatrix = this.solutionMatrix.map(row => {
            return row.map(cell => {
                return Math.random() * 9 < level ? 0 : cell
            })
        })
    }
}