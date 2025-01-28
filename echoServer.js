const net = require('net')

const PORT = 3000

net
  //接続されたら何をするのか設定する
  .createServer((socket) => {
    // まずは接続されたことを表示する
    console.log('connected')

    // データを受け取ったら何をするかを設定する
    socket.on('data', (data) => {
      // データを受け取ったらコンソール出力する
      console.log(`received: ${data}`)
      // 受け取ったデータの内容をそのまま送り返す
      socket.write(data)
    })
    
    // 接続が切れたら何をするかを設定する
    socket.on('close', () => {
      console.log('connection closed')
    })
  })
  // ポートを指定して、サーバを起動する
  .listen(PORT, '127.0.0.1')
 
  console.log(`Server started on port ${PORT}`)