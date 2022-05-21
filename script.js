
firebase.database().ref("/content/").on("value", function (val) { 
    document.getElementById("content").innerHTML = val.val()
    hljs.highlightAll()
})



function share() {
   

        firebase.database().ref("/").update({
        
            content: document.getElementById("content").innerHTML + "<pre><code>" + document.getElementById("inputcode").value + "</code></pre><br><label>-"+document.getElementById("username").value+"</label>"
    
    
        })


        firebase.database().ref("/content/").on("value", function (val) {
            document.getElementById("content").innerHTML = val.val()
            hljs.highlightAll()
        })
 }
