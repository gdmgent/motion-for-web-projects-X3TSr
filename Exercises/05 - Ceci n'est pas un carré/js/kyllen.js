function kyllen() {
    let section = document.getElementById("kyllen");
    
    if(! section.init){
        section.init = true;
        section.tl
        

        .add("makeEgg")
        .to(".box", {
            borderRadius: "80% 40% 80% 40%",
            boxShadow: `
            rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
            rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
            rgba(0, 0, 0, 0.06) 0px 2px 1px, 
            rgba(0, 0, 0, 0.09) 0px 4px 2px, 
            rgba(0, 0, 0, 0.09) 0px 8px 4px, 
            rgba(0, 0, 0, 0.09) 0px 16px 8px, 
            rgba(0, 0, 0, 0.09) 0px 32px 16px
            `,
            rotate: "260deg"
        }, "makeEgg")


        
        .add("crack")
        .to(".part1", {
            width: "19px",
            height: "33px",
            visibility: "visible"
        }, "crack")
        .to(".part2", {
            width: "19px",
            height: "33px",
            visibility: "visible"
        }, "crack")



        
        .add("pan")
        .to(".fryingPan", {
            opacity: "1",
            transform: "translate(-8%, -58%) perspective(1000px) rotateX(50deg)"
        }, "pan")
        .to(".box", {
            borderRadius: "60% 60% 60% 60%",
            rotate: "0deg",
            width: "14rem",
            height: "14rem",
            transform: "translate(-50%, -50%) perspective(1000px) rotateX(60deg)"
        }, "pan")
        .to(".part1", {
            width: "0",
            height: "0",
            opacity: "0"
        }, "pan")
        .to(".part2", {
            width: "0",
            height: "0",
            opacity: "0"
        }, "pan")
        .to(".yoke", {
            width: "7rem",
            height: "7rem"
        }, "pan")



        .add("yoke")
        .to(".yoke", {
            opacity: "1",
            width: "7rem",
            height: "7rem"
        }, "yoke")
        .to(".box", {
            transform: "translate(-50%, -30%) perspective(1000px) rotateX(0deg)"
        }, "yoke")
        .to(".fryingPan", {
            transform: "translate(-8%, -58%) perspective(1000px) rotateX(0deg)"
        }, "yoke")




        .add("wink", ">.3")
        .to(".yoke", {
            height: "0"
        }, "wink")
        .to(".yoke", {
            backgroundColor: "lightblue"
        }, "wink")

        .add("wink2")
        .to(".yoke", {
            height: "7rem",
            boxShadow: "inset 0 0 1rem 0.1rem black"
        }, "wink2")
        .to(".pupil", {
            height: "3.5rem",
            boxShadow: "0 0 1rem 0.1rem white"
        }, "wink2")
        .to(".eye2", {
            visibility: "visible"
        }, "wink2")
        
        

        .add("void")
        .to(".nothing", {x:0}, "void")
        .to(".eureka", {
            y: 1000
        }, "wink2")

        
        .add("end")
        .to(".yoke", {
            opacity: "0"
        }, "end")
        .to(".pupil", {
            opacity: "0"
        }, "end")
        .to(".eye2", {
            opacity: "0"
        }, "end")
        .to(".box", {
            rotate: "0",
            boxShadow: `
            rgba(0, 0, 0, 0) 0px 0px 0px 0px inset, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px inset, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px inset, 
            rgba(0, 0, 0, 0) 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px
            `,
            borderRadius: "0",
            transform: "",
            height: "20vw",
            width: "20vw"
        }, "end")
    }
}