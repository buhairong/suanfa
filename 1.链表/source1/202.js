// 19 --> 82 --> 68 --> --> 100 --> 1
// 这样就将题目转化成了链表
// 当链表经过了1，说明链表没环，就是快乐数
// 当链表经过了相同的数，说明有环，就不是快乐数
// 判断链表是否有环，还是使用快慢指针

function getNext(n) {
  return String(n).split('').reduce((sum, cur) => sum + cur * cur, 0)
}

var isHappy = function (n) {
  let slow = n
  let fast = n
  do {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  } while (slow !== fast && fast !== 1)

  return fast === 1

};

let count = 0
for(let i=0; i<= 100000; i++){
  if(isHappy(i)) {
    count += i
  }
}

console.log(count)  // 692159746