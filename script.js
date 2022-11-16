const lien1 =document.querySelector('#lien1')
const lien2 =document.querySelector('#lien2')
const lien3=document.querySelector('#lien3')
const porte1=document.querySelector('#porte1')
const porte2=document.querySelector('#porte2')
const porte3=document.querySelector('#porte3')
const cv=document.querySelector('#cv')
const blur=document.querySelector('#blur')
const closett =document.querySelectorAll('#close')
const realisation = document.querySelector('#realisation')
const contact = document.querySelector('#contact')
const blurbis=document.querySelector('#blurcarrou')
const droite=document.querySelector('#droite')
const gauche=document.querySelector('#gauche')
const iframe=document.querySelectorAll('#realisation iframe')

const lienmain = document.querySelector('#lienmain')

function prout(){
   
    this.childNodes[0].removeAttribute('src')
    this.childNodes[0].setAttribute('src','portebisouveture.gif')
    
   
    
    
}
function pif(){
    var thisisit = this.childNodes[0]
    thisisit.removeAttribute('src')
    if (this.getAttribute('id') == 'lien1'){
    thisisit.setAttribute('src','portefermeture.gif')}
    else if(this.getAttribute('id')=='lien2'){
        thisisit.setAttribute('src','portefermeture1.gif')
    }
    else{thisisit.setAttribute('src','portefermeture2.gif')}
   

}
function cvApparition(){
    
    if(this.getAttribute('id')=='lien1'){
        cv.classList.replace('none','cv')}
    else if(this.getAttribute('id')=='lien2'){
        realisation.classList.replace('none','realisation')
        blurbis.classList.replace('none','blurbis')
    }
    else{
        contact.classList.replace('none','contactbis')
    }    

    blur.classList.replace('none','blur')

}
function closediv(){
    var classe =this.parentNode.classList[0]
    this.parentNode.classList.replace(classe,'none')
    blur.classList.replace('blur','none')
    blurbis.classList.replace('blurbis','none')
}

function droitevrai(){
    for(i=0;i<iframe.length;i++){
    if (iframe[i].classList[0] == 'framemain'){
        iframe[i].classList.replace('framemain','frameinterdroite')
        iframe[i].animate({
            height:["60%", "50%"],
            width:["55%", "35%"],
            right:["50%","15%"],
            transform:["translate(50%,-50%)","translate(0%,-50%)"],
            
            zIndex :["10","7"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
        
        
    }
    else if (iframe[i].classList[0] == 'frameinterdroite'){
        iframe[i].classList.replace('frameinterdroite','framesousdroite')
        iframe[i].animate({
            height:["50%", "40%"],
            width:["35%", "20%"],
            right:["15%","10%"],
            transform:["translate(0%,-50%)","translate(0%,-50%)"],
            
            zIndex :["7","5"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
    }
    else if (iframe[i].classList[0] == 'framesousdroite'){
        iframe[i].classList.replace('framesousdroite','framesousgauche')
        iframe[i].animate({
            
            right:["10%","90%"],
            transform:["translate(0%,-50%)","translate(100%,-50%)"],
            
           
            position : ["absolute","absolute"]
    
    
        },{duration :400})
    }
    else if (iframe[i].classList[0] == 'frameintergauche'){
        iframe[i].classList.replace('frameintergauche','framemain')
       
        iframe[i].animate({
            height:["50%", "60%"],
            width:["35%", "55%"],
            left:["15%","50%"],
            transform:["translate(0%,-50%)","translate(-50%,-50%)"],
            
            zIndex :["7","10"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
        var push =iframe[i].getAttribute('src')
        lienmain.setAttribute('href',push)
    }
    else if (iframe[i].classList[0] == 'framesousgauche'){
        iframe[i].classList.replace('framesousgauche','frameintergauche')
        iframe[i].animate({
            height:["40%", "50%"],
            width:["20%", "35%"],
            left:["10%","15%"],
            transform:["translate(0%,-50%)","translate(0%,-50%)"],
            
            zIndex :["5","7"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
        
    }
    }



}

function gauchevrai(){  for(i=0;i<iframe.length;i++){
    if (iframe[i].classList[0] == 'framemain'){
        iframe[i].classList.replace('framemain','frameintergauche')
        iframe[i].animate({
            height:["60%", "50%"],
            width:["55%", "35%"],
            left:["50%","15%"],
            transform:["translate(-50%,-50%)","translate(0%,-50%)"],
            
            zIndex :["10","7"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
        
    }
    else if (iframe[i].classList[0] == 'frameinterdroite'){
        iframe[i].classList.replace('frameinterdroite','framemain')
        iframe[i].animate({
            height:["50%", "60%"],
            width:["35%", "55%"],
            right:["15%","50%"],
            transform:["translate(0%,-50%)","translate(-50%,-50%)"],
            
            zIndex :["7","10"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
        var push =iframe[i].getAttribute('src')
        lienmain.setAttribute('href',push)
    }
    else if (iframe[i].classList[0] == 'framesousdroite'){
        iframe[i].classList.replace('framesousdroite','frameinterdroite')
        iframe[i].animate({
            height:["40%", "50%"],
            width:["20%", "35%"],
            right:["10%","15%"],
            transform:["translate(0%,-50%)","translate(0%,-50%)"],
            
            zIndex :["5","7"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
    }
    else if (iframe[i].classList[0] == 'frameintergauche'){
        iframe[i].classList.replace('frameintergauche','framesousgauche')
        iframe[i].animate({
            height:["50%", "40%"],
            width:["35%", "20%"],
            left:["15%","10%"],
            transform:["translate(0%,-50%)","translate(0%,-50%)"],
            
            zIndex :["7","5"],
            position : ["absolute","absolute"]
    
    
        },{duration :400})
    }
    else if (iframe[i].classList[0] == 'framesousgauche'){
        iframe[i].classList.replace('framesousgauche','framesousdroite')
        iframe[i].animate({
            
            
            left:["10%","90%"],
            transform:["translate(0%,-50%)","translate(-100%,-50%)"],
            
           
            position : ["absolute","absolute"]
    
    
        },{duration :400})
    }
    }
}







droite.addEventListener('click',droitevrai)
gauche.addEventListener('click', gauchevrai)

lien2.addEventListener('click',cvApparition)
lien3.addEventListener('click', cvApparition)
closett[0].addEventListener('click', closediv)
closett[1].addEventListener('click', closediv)
closett[2].addEventListener('click', closediv)
lien1.addEventListener('click', cvApparition)
lien1.addEventListener('mouseover', prout)
lien2.addEventListener('mouseout', pif)
lien2.addEventListener('mouseover', prout)
lien1.addEventListener('mouseout', pif)
lien3.addEventListener('mouseover', prout)
lien3.addEventListener('mouseout',pif)

