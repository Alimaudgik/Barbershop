
        var link = document.querySelector(".login-link");
        var popup = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var login = popup.querySelector("[name=login]");
        var form = popup.querySelector("form");
        var password = popup.querySelector("[name=password]");
        
        var isStorageSupport = true;
        var storage = "";

        try {
            storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        };
        
        link.addEventListener("click", function (evt) { 
          evt.preventDefault();
          popup.classList.add("modal-show");
          login.focus()
        });

        close.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.remove("modal-show");   
          popup.classList.remove("modal-error"); 
        });

        form.addEventListener("submit", function (evt) {
           if (!login.value || !password.value) {
               evt.preventDefault();
               popup.classList.add("modal-error");
           } else {
               if (isStorageSupport) {
                   localStorage.setItem("login", login.value);
               }
           };

           /*evt.preventDefault();
           console.log(login.value);
           console.log(password.value);*/
        }); 
        window.addEventListener("keydown", function(evt) {
            evt.preventDefault();
            if (evt.keyCode === 27) {           
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });
        
