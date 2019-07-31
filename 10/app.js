// 四次元配列
let array = [
  {
    恋愛 : '甘い',
    失恋 : '苦い',
    結婚 : [
      {
        1 : '甘い',
        2 : '苦い',
        3 : '酸っぱい',
        4 : [
          '甘辛','中辛','辛口','激辛'
        ],
      }],
}];
console.log(array)
console.log(array[0])
console.log(array[0].結婚[0])
console.log(array[0].結婚[0][4])