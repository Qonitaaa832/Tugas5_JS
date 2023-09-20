$(document).ready(function(){
    //---------menampilkan gambar-------
    //--------Burung Hantu--------------
    $("div.owl").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/owl.png")'
        });
    });
    //--------Burung Pipit--------------
    $("div.pipit").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/pipit.png")'
        });
    });

    //--------Burung Merak--------------
    $("div.merak").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/merak.png")'
        });
    });

     //--------Serigala--------------
     $("div.serigala").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/serigala.png")'
        });
    });

     //--------Harimau--------------
     $("div.harimau").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/harimau.png")'
        });
    });

    //--------Singa--------------
    $("div.singa").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/singa.png")'
        });
    });

    //---------Ayam--------------
    $("div.ayam").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/ayam.png")'
        });
    });

    //---------Kambing--------------
    $("div.kambing").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/kambing.png")'
        });
    });

    //---------Sapi--------------
    $("div.sapi").click(function(){
        $(this).css({
            'border':'1px #FF97B4',
            'background-color':'white',
            'background-image':'url("images/sapi.png")'
        });
    });
    
    //-------menampilkan audio---------
    var audioElement = null;
    //--------Burung Hantu--------------
    $("div.owl").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/owl.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });
    //--------Burung Pipit--------------
    $("div.pipit").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/pipit.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });
    //--------Burung Merak--------------
    $("div.merak").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/merak.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------Serigala--------------
    $("div.serigala").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/serigala.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------Harimau--------------
    $("div.harimau").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/harimau.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------Singa--------------
    $("div.singa").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/singa.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------Ayam--------------
    $("div.ayam").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/ayam.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------Kambing--------------
    $("div.kambing").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/kambing.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });

    //--------sapi--------------
    $("div.sapi").click(function(){
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
     }
     audioElement =$("<audio></audio>").attr({
            'src':'audio/sapi.mp3',
            'volume':'0.5',
            'autoplay':'autoplay'
        })[0];
        // Menambahkan elemen audio ke dalam elemen 
        $(this).appendTo("audioElement"); 
    });
});