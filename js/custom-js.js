//custom js

function openToast(id) {
    var toastElList = [].slice.call(document.querySelectorAll(id))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function checkFile()
{
    var file_data = document.getElementById('fileInput').files;
    for(i = 0; i< file_data.length; i++)
    {
      // var fileItem =  '<div class="file-div"><button class="btn btn-close"></button><span><i class="fa fa-file-text" aria-hidden="true"></i></span><p class="filename">'+file_data[0].name+'</p></div>'
      var fileItem = document.createElement("div");
      var fileclose =  document.createElement("button");
      var fileIcon =  document.createElement("span");
      var fileName =  document.createElement("p");
      fileName.innerText= file_data[i].name;
      fileIcon.innerHTML ='<i class="fa fa-file-text" aria-hidden="true"></i>';
      fileclose.classList.add("btn","btn-close");
      fileclose.setAttribute("file-number",i);
      fileclose.addEventListener("click", function(e){
        e.target.parentElement.remove();
        if(fileNumber == 0)
        {
          document.getElementById('fileInput').value = "";
        }
        else
        {
          var fileNumber = e.target.getAttribute("file-number");
          file_data[fileNumber].remove();
        }
      });
      fileItem.classList.add("file-div");
      fileName.classList.add("filename");
      fileItem.appendChild(fileclose);
      fileItem.appendChild(fileIcon );
      fileItem.appendChild(fileName);
      document.getElementById('uploaded-div').appendChild(fileItem);
      // document.getElementById('uploaded-div').innerHTML = fileItem;
    };
}

function showMenu(){
  event.preventDefault();
  document.getElementById('navigation-div').style.display = 'block';
  document.getElementById('hide-menu').style.display = 'block';
  document.getElementById('show-menu').style.display = 'none';
}

function hideMenu(){
  event.preventDefault();
  document.getElementById('navigation-div').style.display = 'none';
  document.getElementById('show-menu').style.display = 'block';
  document.getElementById('hide-menu').style.display = 'none';
}

function setActive()
{
  
  var className = event.target.className;
  console.log(className);
  if(className.includes("hero-checkbox"))
  {
    var checkbox = event.target.childNodes[1];
    if(!checkbox.checked)
    {
      checkbox.checked = true;
    }
    else
    {
      checkbox.checked = false;
    }
  }
  if(className.indexOf("active") > -1)
  {
    event.target.classList.remove("active");
  }
  else
  {
    event.target.classList.add("active");
  }
}
function copyText(element) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}
$(document).ready(function () {
  $(".form-control")
    .focus(function(){ $(this).addClass("focus"); })
    .blur(function(){ $(this).removeClass("focus"); });
});