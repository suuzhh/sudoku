import './scss/main.scss'

import Grid from './js/ui/grid'
import PopupNumbers from './js/ui/popupnumbers'

const grid = new Grid($('#container'))

grid.build()
grid.layout()

const popupNumbers = new PopupNumbers($('#popupNumbers'))

grid.bindPopup(popupNumbers)