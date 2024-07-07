$(window).ready(function () {
    $("#loading-screen").fadeOut(1000, function () {
        // return scrollbar b3d m anfz el finction
        $("body").css("overflow", "visible");
    });
})
//change navbar color
let PortfolioSectionOffsetTop = $("#Portfolio").offset().top; //height awel section
$(window).scroll(function () {
    let WindowScrollTop = $(window).scrollTop();
    // if condition cheak bo3d tany section 3n el top(height awel section) > mn tol awel section
    if (WindowScrollTop > PortfolioSectionOffsetTop) {
        $("nav#navbar-example").removeClass("bg-black");
        $("nav#navbar-example").addClass("bg-light");
        //scroll Top Button
        $(".fa-arrow-up").fadeIn(1000);//lma a3dy awel section azher el icone
    }
    else {
        $("nav#navbar-example").removeClass("bg-light")
        $("nav#navbar-example").addClass("bg-black")
        $(".fa-arrow-up").fadeOut(1000);
    }
})

$(".fa-arrow-up").click(function(){
    $("html").animate({scrollTop:0},1000)
})

// smooth scrolling el awel kant not support
//a href starts with # -->ay anchor start # kda marbot b section tany
//#home(ha7otha mkan anchorHref) offset top
$("a[href^='#']").click(function(e){
    //animate(css property + scrollTop scrollLeft)
    let anchorHref = e.target.getAttribute("href"); //select element 3n tari2 jquery
    let sectionOffsetTop = $(anchorHref).offset().top;// bo3d section home 3n top w 3n left .tob
    $("html").animate({scrollTop:sectionOffsetTop}, 1000); //scrollTop:el masafa eli ana gabtha , 3s 
})

//Moving active class , scroll spy bta3 bootstrap hwa eli kan bin2lny class el active
//1-remove active class ,2- add active class clicked anchor --> haishil class el active mn nav-link w lma click hadifo
let navbarAnchors = $("nav#navbar-example a.nav-link");
navbarAnchors.click(function (e) {
    navbarAnchors.removeClass("active");
    $(e.target).addClass("active")
})

// sidebar
// eq-->equal
let sidebarSpans = $(".sidebar-inner span")
sidebarSpans.eq(0).css("background-color", "lightseagreen")
sidebarSpans.eq(1).css("background-color", "lightsalmon")
sidebarSpans.eq(2).css("background-color", "lightgreen")
sidebarSpans.eq(3).css("background-color", "darkmagenta")
sidebarSpans.eq(4).css("background-color", "lightcoral")

//sidebar-inner===> innerWidth ===> width + padding
let sidebarInnerWidth = $(".sidebar-inner").innerWidth()
$(".sidebar").animate({ left: -sidebarInnerWidth }, 0)

$(".fa-gear").click(function () {
    let sidebarLeftValue = $(".sidebar").css("left")
    if (sidebarLeftValue == "0px") //kda ya3ny hwa bra
    {
        $(".sidebar").animate({ left: -sidebarInnerWidth }, 1000)
    }
    else {
        $(".sidebar").animate({ left: 0 }, 1000)
    }
})
//change themes
sidebarSpans.click(function (e) {
    //.css("background-color") //getter hatgble el value
    let color = $(e.target).css("background-color");
    $(":root").css("--main-color", color)
})