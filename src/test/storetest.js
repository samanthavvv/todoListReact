let store = require('store')

store.set('user', 'Ada')
console.log(store.get('user'))

store.remove('user')
console.log(store.get('user'))  //undefined
console.log(store.get('user', 'defaultuser'))

store.set('user', { name: 'Ada', age: 20 })
console.log(store.get('user').name)

store.set('company', { name: 'jst' })

store.each(function (value, key) {
    console.log(key, '-->', value)
});

// store.clearAll();
// console.log(store.get('user'))