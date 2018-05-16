// var assert = require('assert');
// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });

var assert = require('assert');
import Vue from 'vue'
import VeilleListe from '/components/VeilleListe'

describe('VeilleListe.vue', () => {
    it('displays items from the list', () => {
        const Constructor = Vue.extend(VeilleListe);
        const VeilleListeComponent = new Constructor().$mount();
        expect(VeilleListeComponent.$el.textContent).to.contain('Charlotte');
  })
})

// function strip(html) {
//     var tmp = document.createElement("DIV");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
// }

// function RemoveAccents(str) {
//     var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
//     var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
//     str = str.split('');
//     var strLen = str.length;
//     var i, x;
//     for (i = 0; i < strLen; i++) {
//         if ((x = accents.indexOf(str[i])) != -1) {
//             str[i] = accentsOut[x];
//         }
//     }
//     return str.join('');
// }

// function sortArray(arr) {
//     return arr.sort(function (a, b) {
//         return a.localeCompare(b);
//     });
// }

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



