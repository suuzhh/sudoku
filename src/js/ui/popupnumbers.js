// 处理弹出的操作面板

export default class PopupNumbers {
    constructor($panel) {
        this._$panel = $panel.hide().removeClass('hidden')

        this._$panel.on('click', 'span', e => {
            const $cell = this._$targetCell

            const $span = $(e.target)
            // 回填样式
            if ($span.hasClass('mark1')) {
                if ($cell.hasClass('mark1')) {
                    $cell.removeClass('mark1')
                } else {
                    $cell.removeClass('mark2')
                        .addClass('mark1')
                }
                return
            } else if ($span.hasClass('mark2')) {
                if ($cell.hasClass('mark2')) {
                    $cell.removeClass('mark2')
                } else {
                    $cell.removeClass('mark1')
                        .addClass('mark2')
                }
                return
            } else if ($span.hasClass('empty')) {
                $cell.text(0)
                    .addClass('empty')
                return
            } else {
                // 回填数字
                $cell.text($span.text())
                    .removeClass('empty')
            }
 
            this.hide()    
        })
    }

    popup($cell) {
        if ($cell.hasClass('fixed')) return

        this._$targetCell = $cell

        const { left, top } = $cell.position()
        this._$panel.css({
            left: `${left}px`,
            top: `${top}px`
        })
        .show()
    }

    hide() {
        this._$panel.hide()
    }
}