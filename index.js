
  /*..........Dark/Light toggle.........*/
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
   }
  /*..........................................................Page Loader...................*/ 
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  /*.....................................................Top button........................*
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction(){
  }
function topFunction(){
    document.hero.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

   /*-----------------------Read more/less buttons------------------------------*/
   var IPV4 = document.getElementById("MoreContent1");
   function openIPV4(){
     MoreContent1.style.display  = "block"; 
    
   }
   
   var IPV4 = document.getElementById("MoreContent1");
   function closeIPV4(){
     MoreContent1.style.display  = "none";
   }
   
   /*..........................Page 2 GTS...................................................*/
   var IPV6 = document.getElementById("MoreContent2");
   function openIPV6(){
     MoreContent2.style.display  = "block";
    
   }
   
   var IPV6 = document.getElementById("MoreContent1");
   function closeIPV6(){
     MoreContent2.style.display  = "none";
   }
   
   /*------------------------------------Menu-----------------------------------*/
   var sidemenu = document.getElementById("sidemenu")
   function openmenu(){
     sidemenu.style.right = "0";
   }
   function closemenu(){
     sidemenu.style.right = "-200px";
   }



/*..........................................................................................................................*/
/*...........................................................................................................................*/
/*..............................................................Javascript for Cyber security Page.............................*/
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");
var content7 = document.getElementById("content7");
var content8 = document.getElementById("content8");
var content9 = document.getElementById("content9");
var content10 = document.getElementById("content10");
var content11= document.getElementById("content11");
var content12 = document.getElementById("content12");
var content13 = document.getElementById("content13");
var content14 = document.getElementById("content14");
var content15 = document.getElementById("content15");
var content16 = document.getElementById("content16");
var content17 = document.getElementById("content17");
var content18 = document.getElementById("content18");
var content19 = document.getElementById("content19");



var Intro = document.getElementById("Page1");
var CyberCrimes = document.getElementById("Page2");
var Darkweb = document.getElementById("Page3");
var NetworkBasics = document.getElementById("Page4");
var NetworkLayer = document.getElementById("Page5");
var NetworkTransport = document.getElementById("Page6");
var FirewallSystems = document.getElementById("Page7");
var WebApp = document.getElementById("Page8");
var CyberAttacks = document.getElementById("Page9");
var MappingAndScanning = document.getElementById("Page10");
var NetworkAttacks = document.getElementById("Page11");
var WebAttacks = document.getElementById("Page12");
var WifiAttacks  = document.getElementById("Page13");
var SocialEngineering = document.getElementById("Page14");
var PasswordSystems = document.getElementById("Page15");
var SecurityOperations = document.getElementById("Page16");
var IncidentResponse  = document.getElementById("Page17");
var Faq = document.getElementById("Page18");
var Quiz = document.getElementById("Page19");

/*.....................Make one of the pages to be available while others are hidden...............*/
function openIntro(){
    content1.style.display = "block";
    /*............change the background color to mark the active page.....................*/
    Page1.style.background = "orange";
    Page2.style.background = "none";
    Page3.style.background = "none";
    Page4.style.background = "none";
    Page5.style.background = "none";
    Page6.style.background = "none";
    Page7.style.background = "none";
    Page8.style.background = "none";
    Page9.style.background = "none";
    Page10.style.background = "none";
    Page12.style.background = "none";
    Page13.style.background = "none";
    Page14.style.background = "none";
    Page15.style.background = "none";
    Page16.style.background = "none";
    Page17.style.background = "none";
    Page18.style.background = "none";
    Page19.style.background = "none";
}

function openCyberCrimes(){
    content1.style.display = "none";
    content2.style.display = "block";
    /*............change the background color to mark the active page.....................*/
    Page1.style.background = "none";
    Page2.style.background = "orange";
    Page3.style.background = "none";
    Page4.style.background = "none";
    Page5.style.background = "none";
    Page6.style.background = "none";
    Page7.style.background = "none";
    Page8.style.background = "none";
    Page9.style.background = "none";
    Page10.style.background = "none";
    Page12.style.background = "none";
    Page13.style.background = "none";
    Page14.style.background = "none";
    Page15.style.background = "none";
    Page16.style.background = "none";
    Page17.style.background = "none";
    Page18.style.background = "none";
    Page19.style.background = "none";
}

function openDarkweb(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    /*............change the background color to mark the active page.....................*/
    Page1.style.background = "none";
    Page2.style.background = "none";
    Page3.style.background = "orange";
    Page4.style.background = "none";
    Page5.style.background = "none";
    Page6.style.background = "none";
    Page7.style.background = "none";
    Page8.style.background = "none";
    Page9.style.background = "none";
    Page10.style.background = "none";
    Page12.style.background = "none";
    Page13.style.background = "none";
    Page14.style.background = "none";
    Page15.style.background = "none";
    Page16.style.background = "none";
    Page17.style.background = "none";
    Page18.style.background = "none";
    Page19.style.background = "none";
}
function openNetworkBasics(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";

    /*............change the background color to mark the active page.....................*/
    Page1.style.background = "none";
    Page2.style.background = "none";
    Page3.style.background = "none";
    Page4.style.background = "orange";
    Page5.style.background = "none";
    Page6.style.background = "none";
    Page7.style.background = "none";
    Page8.style.background = "none";
    Page9.style.background = "none";
    Page10.style.background = "none";
    Page12.style.background = "none";
    Page13.style.background = "none";
    Page14.style.background = "none";
    Page15.style.background = "none";
    Page16.style.background = "none";
    Page17.style.background = "none";
    Page18.style.background = "none";
    Page19.style.background = "none";
}

function openNetworkLayer(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "block";
   
     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "orange";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openNetworkTransport(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "orange";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openFirewallSystems(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "orange";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}


function openWebApp(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "orange";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openCyberAttacks(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "orange";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openMappingAndScanning(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "orange";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openNetworkAttacks(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page11.style.background = "orange";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openWebAppAttacks(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "orange";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openWifiAttacks(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "orange";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openSocialEngineering(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "none";
    content14.style.display = "block";


     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "orange";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openPasswordSystems(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "none";
    content14.style.display = "none";
    content15.style.display = "block";


     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "orange";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openSecurityOperations(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "none";
    content14.style.display = "none";
    content15.style.display = "none";
    content16.style.display = "block";


     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "orange";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openIncidentResponse(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "none";
    content14.style.display = "none";
    content15.style.display = "none";
    content16.style.display = "none";
    content17.style.display = "block";


     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "orange";
     Page18.style.background = "none";
     Page19.style.background = "none";
}

function openFaq(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
    content8.style.display = "none";
    content9.style.display = "none";
    content10.style.display = "none";
    content11.style.display = "none";
    content12.style.display = "none";
    content13.style.display = "none";
    content14.style.display = "none";
    content18.style.display = "block";

     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "orange";
     Page19.style.background = "none";
}

function openQuiz(){


     /*............change the background color to mark the active page.....................*/
     Page1.style.background = "none";
     Page2.style.background = "none";
     Page3.style.background = "none";
     Page4.style.background = "none";
     Page5.style.background = "none";
     Page6.style.background = "none";
     Page7.style.background = "none";
     Page8.style.background = "none";
     Page9.style.background = "none";
     Page10.style.background = "none";
     Page12.style.background = "none";
     Page13.style.background = "none";
     Page14.style.background = "none";
     Page15.style.background = "none";
     Page16.style.background = "none";
     Page17.style.background = "none";
     Page18.style.background = "none";
     Page19.style.background = "orange";
}

/*..............................................Darkweb FAQ.........................*/
var Faq1 = document.getElementById("Faq1");
function openFaq1(){
    Faq1.style.display ="block";
}
var Faq2 = document.getElementById("Faq2");
function openFaq2(){
    Faq2.style.display ="block";
}
var Faq3 = document.getElementById("Faq3");
function openFaq3(){
    Faq3.style.display ="block";
}
var Faq4 = document.getElementById("Faq4");
function openFaq4(){
    Faq4.style.display ="block";
}

var Faq5 = document.getElementById("Faq5");
function openFaq5(){
    Faq5.style.display ="block";
}
var Faq6 = document.getElementById("Faq6");
function openFaq6(){
    Faq6.style.display ="block";
}
var Faq7 = document.getElementById("Faq7");
function openFaq7(){
    Faq7.style.display ="block";
}
var Faq8 = document.getElementById("Faq8");
function openFaq8(){
    Faq8.style.display ="block";
}
var Faq9 = document.getElementById("Faq9");
function openFaq9(){
    Faq9.style.display ="block";
}
var Faq10 = document.getElementById("Faq10");
function openFaq10(){
    Faq10.style.display ="block";
}
var Faq11 = document.getElementById("Faq11");
function openFaq11(){
    Faq11.style.display ="block";
}
var Faq12 = document.getElementById("Faq12");
function openFaq12(){
    Faq12.style.display ="block";
}

/*..............................................Comment Section.........................*/
var CommentButton = document.getElementById("CommentSection1");
function openCommentSection1(){
    CommentSection1.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection2");
function openCommentSection2(){
    CommentSection2.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection3");
function openCommentSection3(){
    CommentSection3.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection4");
function openCommentSection4(){
    CommentSection4.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection5");
function openCommentSection5(){
    CommentSection5.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection6");
function openCommentSection6(){
    CommentSection6.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection7");
function openCommentSection7(){
    CommentSection7.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection8");
function openCommentSection8(){
    CommentSection8.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection9");
function openCommentSection9(){
    CommentSection9.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection10");
function openCommentSection10(){
    CommentSection10.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection11");
function openCommentSection11(){
    CommentSection11.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection12");
function openCommentSection12(){
    CommentSection12.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection13");
function openCommentSection13(){
    CommentSection13.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection14");
function openCommentSection14(){
    CommentSection14.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection15");
function openCommentSection15(){
    CommentSection15.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection16");
function openCommentSection16(){
    CommentSection16.style.display = "block";
}
var CommentButton = document.getElementById("CommentSection17");
function openCommentSection17(){
    CommentSection17.style.display = "block";
}


/*..................................Hackers page.............................*/
var CommentButton = document.getElementById("CommentSectionHackersPage");
function openCommentSectionHackersPage(){
    CommentSectionHackersPage.style.display = "block";
}
/*..............................................Footer popup..............................*/
var FooterPopup =document.getElementById("FooterPopup");
function closeFooter(){
    FooterPopup.style.display = "none";
}
/*.............................................................Top nav Appearance effects....................*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav").style.top = "0";
  } else {
    document.getElementById("myNav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
