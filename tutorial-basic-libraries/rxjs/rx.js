// rxjsの使いたい関数をインポートする
const rOf = require('rxjs').of;
const rFilter = require('rxjs/operators').filter;
const rMap = require('rxjs/operators').map;

// イメージ： サーバー側の処理→データを生成している
const squareOdd = rOf(1, 2, 3, 4, 5) // ofでOBSERVABLEを生成
    .pipe(
        rFilter(n => n % 2 != 0), // フィルタリング（条件式による判定処理）で、奇数のみを残す
        rMap(n => n*n) // 2乗して、新しいOBSERVABLEを生成する（値に修正を加え、新規オブジェクトとして代替すること）
    ); // OBSERVABLEの宣言終了　＝ここまでで一つのCONST

// イメージ： クライアント側の処理→データを受け取っている
squareOdd.subscribe(x => console.log(x));
squareOdd.pipe(
        rFilter(n => n % 2 != 0), 
        rMap(n => n*n) 
    ).subscribe(x => console.log(x));