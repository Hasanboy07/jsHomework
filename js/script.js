function str(strr) {
    let a = strr.split('');
    let b = a.sort().join('');
    console.log(b);
    if (b.includes('oo') === true && b.includes('xx') == true) {
        console.log('true');
    } else {
        console.log('false');
    }
}
str('oxoxox')

function Trr(aaa) {
    let arr = aaa.split('')
    let obj = {};
    for (let i = 0; i < aaa.length; i++) {
        obj[arr[i]] = ''
    }
    console.log(Object.keys(obj).sort().join(''));
}
Trr('hello world')