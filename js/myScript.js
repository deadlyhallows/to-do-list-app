$("ul").hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("background-color", "white");
});


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function clickFunction() {
  var li = document.createElement("li");
  console.log(li);
  var inputValue = document.getElementById("abc").value;
  console.log(inputValue);
  var t = document.createTextNode(inputValue);
  console.log(t);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("abc").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      console.log(div);
      var d = document.getElementById("myUL1");
      d.appendChild(div);
      console.log(d);
      
    }
  }
}


