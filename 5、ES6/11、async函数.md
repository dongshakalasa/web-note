# 一、async await使用规则

（1）async的函数在执行后都会自动返回一个Promise对象，有无值根据有无return值

（2）await必须在async函数里使用，不能单独使用

（3）await后面需要跟Promise对象，不然就没有意义，而且await后面的Promise对象不必写then，因为awiat的作用之一就是获取Promise对象成功状态传递出来的参数

（4）async/await作用是用同步方式，执行异步操作

# 二、async await 原理（generator+自动执行器）

```js
function fn(nums) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(nums * 2)
        },1000)
    })
}

function* gen(){
    const num1 = yield fn(1);
    console.log(num1);
    const num2 = yield fn(num1);
    console.log(num2);
    const num3 = yield fn(num2)
    console.log(num3);
    return num3;
}

function generatorToAsync(generatorFn) {
    return function(){

        const gen = generatorFn.apply(this,arguments); // gen有可能传参

        // 返回一个Promise参数
        return new Promise((resolve,reject)=>{
            function go(key,arg) {
                let res;
                try {
                    res = gen[key](arg);
                }catch(error) {
                    return reject(error);
                }

                const {value,done} = res;
                if(done) {
                    resolve(value);
                }else {
                    Promise.resolve(value).then(val => go('next',val),err => go('throw',err))
                }
            }
            go('next')
        })
    }
}

const asyncFn = generatorToAsync(gen)

asyncFn()
```

