import { cube } from './script/math'
import tto from './tto'

import './style/style.css'


function component() {
    var element = document.createElement('div')
    
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')

    return element
}

// function btn() {
//     alert(2)
//     return import(/* webpackChunkName: "jquery" */ 'jquery').then($ => {
        
//         var btn2 = document.createElement('button')
//         btn2.innerHTML = 'btn'
//         console.log(btn2)
//         $(btn2).click(function() {
//             alert(1)
//         })
//     })
//     .catch(error => {
//         'An error occurred while loading the component'
//     })
// }

document.body
.appendChild(component())

// console.log(tto())

let arr = () => {
    alert(1)
}

arr()
// btn()
