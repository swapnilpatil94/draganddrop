var _ = (id)=> document.getElementById(id);
var dragStart=(event)=>event.dataTransfer.setData("Text", event.target.id);
var allowDrop=(event)=> event.preventDefault();
 
var drop=(event)=> {
   event.preventDefault();
   var box = event.dataTransfer.getData("Text");
   _(box).setAttribute("style","width:80px; height:80px; margin:50px 0px 0px 145px");
   (_("drop_here").children.length==1)?_("line1").style.visibility="visible":( (_("drop_here").children.length==2)?_("line2").style.visibility="visible":( (_("drop_here").children.length==3)?_("line3").style.visibility="visible":false))
   event.target.appendChild(_(box));
}

var getData=()=>{
    var count=[];
    for(var i=0; i<_("drop_here").children.length;i++){
        count.push(_("drop_here").children[i].id); 
       _("put_sequence").innerHTML= count ;
    }
}