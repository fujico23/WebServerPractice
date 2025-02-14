const net = require('net')
// 接続先の情報
const SERVER_IP = '127.0.0.1'
const SERVER_PORT = '3000'

// 通信の出入り口を準備
const socket = new net.Socket()

// IPアドレスとポート番号を指定して接続
// 3つ目の引数には、接続したら実行したいコールバックを記述
socket.connect(SERVER_PORT, SERVER_IP, () => {
  console.log(`connect to ${SERVER_IP}:${SERVER_PORT}`)
})
// process.stdin.onは標準入力からデータを読み込んだら何をするかを設定する
process.stdin.on('data', (data) => { 
  // データを読み込んだら通信の出入り口に書き込む
  // 接続先に向けてメッセージを送る
  socket.write(data)
})
 
// 通信の出入り口からデータを受け取ったら何をするかを設定する
socket.on('data', (data) => { 
  // データを受け取ったらコンソール出力する
  console.log(`received: ${data}`)
})
  
