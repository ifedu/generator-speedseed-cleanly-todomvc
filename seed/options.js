const set = (name, value, extra, exclude) => ({ name, value, extra, exclude })

module.exports = [{
    message: 'Library / Framework?',
    name: 'framework',

    choices: [
        set('Vue', 'vue')
    ]
}, {
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Jade', 'jade')
    ]
}, {
    message: 'JS?',
    name: 'js',

    choices: [
        set('Babel', 'babel', 'js')
    ]
}, {
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', 'sass')
    ]
}]