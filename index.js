const  axios  =  membutuhkan ( "axios" )
const  urls =  [ "https://f2tw-vip-project.glitch.me" ]
setInterval ( function ( )  {
            url . forEach ( url  =>  {
            axios . dapatkan ( url ) . kemudian ( konsol . log ( "Pong at"  +  Tanggal . sekarang ( ) ) ) . menangkap ( ( )  =>  { } ) ;
        } )
    } ,  60 * 1000 ) ;
