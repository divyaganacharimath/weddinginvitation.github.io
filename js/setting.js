

const color = [
    {
        name:'pink',
        code:'#fb839e',
        url:'css/skins/pink.css'
    },
    {
        name:'light blue',
        code:'#3e99f4',
        url:'css/skins/light-blue.css'
    },
    {
        name:'light green',
        code:'#0dcebd',
        url:'css/skins/light-green.css'
    },
    {
        name:'red',
        code:'#cc3b3b',
        url:'css/skins/red.css'
    },
    {
        name:'yellow',
        code:'#ff9800',
        url:'css/skins/yellow.css'
    }
]

$(document).ready(function (){
    setColors();
    function setColors() {
        // console.log("hi")
        for(let i=0; i<color.length; i++){
            // console.log(color[i].name)           this is to get color name given in the  console
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span);
        }
    }

    $(".colors span").click(function (){
        const index = $(this).index();
        // console.log(index)               This gives the color index number
        // console.log(color[index].name)   This gives the color name
        $(".alternate-style").attr("href",color[index].url);
    });

    $(".theme-mode").change(function(){
        // console.log($(this).val())       This is used to check which mode is clicked
        if($(this).val() == 'light'){
            $("body").removeClass("dark")
        }
        else{
            $("body").addClass("dark")
        }
    })

    //toggle setting box
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})





















