var currPage = ".page1";


$(function () {
    $('.toggle1').on("click", function (e) {
        console.log("cl");
        e.preventDefault();
        if(currPage!=".page1"){
          $(currPage).hide();
          $('.page1').show();
          currPage = ".page1";
        }
    });
    $('.toggle2').on("click", function (e) {
      console.log("cl");
        e.preventDefault();
        if(currPage!=".page2"){
          $(currPage).hide();
          $('.page2').show();
          currPage = ".page2";
        }
    });
});