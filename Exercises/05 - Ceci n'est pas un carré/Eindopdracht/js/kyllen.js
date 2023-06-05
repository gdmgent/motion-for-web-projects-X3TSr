function kyllen() {
    let section = document.getElementById("kyllen");
    
    if(! section.init){
        section.init = true;
        section.tl
        

        .add("#kyllen makeEgg")
        .to("#kyllen .box", {
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
        }, "#kyllen makeEgg")


        
        .add("#kyllen crack")
        .to("#kyllen .part1", {
            width: "19px",
            height: "33px",
            visibility: "visible"
        }, "#kyllen crack")
        .to("#kyllen .part2", {
            width: "19px",
            height: "33px",
            visibility: "visible"
        }, "#kyllen crack")



        
        .add("#kyllen pan")
        .to("#kyllen .fryingPan", {
            opacity: "1",
            transform: "translate(-8%, -58%) perspective(1000px) rotateX(50deg)"
        }, "#kyllen pan")
        .to("#kyllen .box", {
            borderRadius: "60% 60% 60% 60%",
            rotate: "0deg",
            width: "14rem",
            height: "14rem",
            transform: "translate(-50%, -50%) perspective(1000px) rotateX(60deg)"
        }, "#kyllen pan")
        .to("#kyllen .part1", {
            width: "0",
            height: "0",
            opacity: "0"
        }, "#kyllen pan")
        .to("#kyllen .part2", {
            width: "0",
            height: "0",
            opacity: "0"
        }, "#kyllen pan")
        .to("#kyllen .yoke", {
            width: "7rem",
            height: "7rem"
        }, "#kyllen pan")



        .add("#kyllen yoke")
        .to("#kyllen .yoke", {
            opacity: "1",
            width: "7rem",
            height: "7rem"
        }, "#kyllen yoke")
        .to("#kyllen .box", {
            transform: "translate(-50%, -30%) perspective(1000px) rotateX(0deg)"
        }, "#kyllen yoke")
        .to("#kyllen .fryingPan", {
            transform: "translate(-8%, -58%) perspective(1000px) rotateX(0deg)"
        }, "#kyllen yoke")




        .add("#kyllen wink", ">.3")
        .to("#kyllen .yoke", {
            height: "0"
        }, "#kyllen wink")
        .to(".yoke", {
            backgroundColor: "lightblue"
        }, "#kyllen wink")

        .add("#kyllen wink2")
        .to("#kyllen .yoke", {
            height: "7rem",
            boxShadow: "inset 0 0 1rem 0.1rem black"
        }, "#kyllen wink2")
        .to("#kyllen .pupil", {
            height: "3.5rem",
            boxShadow: "0 0 1rem 0.1rem white"
        }, "#kyllen wink2")
        .to("#kyllen .eye2", {
            visibility: "visible"
        }, "#kyllen wink2")
        
        

        .add("#kyllen void")
        .to("#kyllen .nothing", {x:0}, "#kyllen void")
        .to("#kyllen .eureka", {
            y: 1000
        }, "#kyllen wink2")

        
        .add("#kyllen end")
        .to("#kyllen .yoke", {
            opacity: "0"
        }, "#kyllen end")
        .to("#kyllen .pupil", {
            opacity: "0"
        }, "#kyllen end")
        .to("#kyllen .eye2", {
            opacity: "0"
        }, "#kyllen end")
        .to("#kyllen .box", {
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
        }, "#kyllen end")
    }
}