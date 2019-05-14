function chessBoard(n){
    let s ="# # # #";
    for(let i=1; i<=n; i++){
        if(i%2==0){
            console.log(s);
        }else{
            console.log(" "+s);
        }
    }
}
chessBoard(4);