
    document.addEventListener('DOMContentLoaded', () => {
        const searchForm = document.querySelector('.search-form');
        const shoppingCart = document.querySelector('.shopping-cart');
        const loginForm = document.querySelector('.login-form');
        const navbar = document.querySelector('.navbar');

        const menuBtn = document.querySelector('#menu-btn');
        const searchBtn = document.querySelector('#search-btn');
        const cartBtn = document.querySelector('#cart-btn');
        const loginBtn = document.querySelector('#login-btn');

        const isSmallScreen = () => window.innerWidth <= 992;

        searchBtn.addEventListener('click', () => {
            searchForm.classList.toggle('active');
            shoppingCart.classList.remove('active');
            loginForm.classList.remove('active');

            if (isSmallScreen()) navbar.classList.remove('active');
        });

        cartBtn.addEventListener('click', () => {
            shoppingCart.classList.toggle('active');
            searchForm.classList.remove('active');
            loginForm.classList.remove('active');

            if (isSmallScreen()) navbar.classList.remove('active');
        });

        loginBtn.addEventListener('click', () => {
            loginForm.classList.toggle('active');
            searchForm.classList.remove('active');
            shoppingCart.classList.remove('active');

            if (isSmallScreen()) navbar.classList.remove('active');
        });

        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            searchForm.classList.remove('active');
            shoppingCart.classList.remove('active');
            loginForm.classList.remove('active');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                navbar.style.display = 'flex'; 
                navbar.style.opacity = 1;
            } else {
                navbar.style.display = 'none'; 
                navbar.style.opacity = 0;
            }
        });

        if (isSmallScreen()) {
            navbar.style.display = 'none';
        }
    });


    const menuBtn = document.getElementById('menu-btn');
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn');
    const loginBtn = document.getElementById('login-btn');

    function toggleBackground(event) {
        const target = event.target;
        

        if (target.classList.contains('show')) {
            target.classList.remove('show');
        } else {
            [menuBtn, searchBtn, cartBtn, loginBtn].forEach(btn => btn.classList.remove('show'));
            target.classList.add('show');
        }
    }

    menuBtn.addEventListener('click', toggleBackground);
    searchBtn.addEventListener('click', toggleBackground);
    cartBtn.addEventListener('click', toggleBackground);
    loginBtn.addEventListener('click', toggleBackground);


    $('.carousel-home').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         
        autoplaySpeed: 3000,     
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,     
              autoplaySpeed: 3000 
            }
          }
        ]
    });

    
    $('.category-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,         
        autoplaySpeed: 1000,     
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay: true,         
              autoplaySpeed: 1000,    
            }
          }
        ]
      });

      $('.product-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,         
        autoplaySpeed: 1000,     
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay: false,         
              autoplaySpeed: 1000,    
            }
          }
        ]
      });

      document.addEventListener('DOMContentLoaded', function () {
        tippy('.action-btn button', {
            arrow: true, 
            theme: 'light',
            placement: 'top', 
        });
    });

      const chatToggleBtn = document.getElementById('chatToggleBtn');
      const chatContainer = document.getElementById('chatContainer');
      const closeChatBtn = document.getElementById('closeChatBtn');
      const sendBtn = document.getElementById('sendBtn');
      const chatBody = document.getElementById('chatBody');
      const messageInput = document.getElementById('messageInput');
      const notificationSound = document.getElementById('notificationSound');
  
      chatToggleBtn.addEventListener('click', () => {
          chatContainer.style.display = 'flex';
          chatToggleBtn.style.display = 'none'; 
      });
  
      closeChatBtn.addEventListener('click', () => {
          chatContainer.style.display = 'none';
          chatToggleBtn.style.display = 'block';
      });
  
      sendBtn.addEventListener('click', () => {
          const message = messageInput.value.trim();
  
          if (message !== "") {
              const userMessageDiv = document.createElement('div');
              userMessageDiv.classList.add('message', 'user-message');
              userMessageDiv.innerHTML = `<span>${message}</span>`;
              chatBody.appendChild(userMessageDiv);
  
              // Delay the bot response by 1 second
              setTimeout(() => {
                  const botResponse = getBotResponse(message);
                  if (botResponse) {
                      const botMessageDiv = document.createElement('div');
                      botMessageDiv.classList.add('message', 'support-message');
                      botMessageDiv.innerHTML = `<span>${botResponse}</span>`;
                      chatBody.appendChild(botMessageDiv);
                      
                      // Play notification sound
                      notificationSound.currentTime = 0; // Reset sound to play from the beginning
                      notificationSound.play();
                  }
  
                  chatBody.scrollTop = chatBody.scrollHeight;
              }, 1000); // 1000 milliseconds = 1 second
  
              messageInput.value = ""; 
          }
      });

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        
        // Helper function to check if multiple keywords exist in the message
        function containsKeywords(message, keywords) {
            return keywords.some(keyword => message.includes(keyword));
        }
    
        if (containsKeywords(lowerCaseMessage, ["hi", "hello", "hey"])) {
            return "Hello! How may I assist you today?";
        } else if (containsKeywords(lowerCaseMessage, ["help", "support", "assistance", "need help"])) {
            return "We provide various forms of help, including installation guides and customer support.";
        } else if (containsKeywords(lowerCaseMessage, ["change", "payment"])) {
            return "If your order hasn’t been processed yet, please contact customer support to change your payment method.";
        } else if (containsKeywords(lowerCaseMessage, ["sustainability", "eco-friendly"])) {
            return "Yes, we are committed to sustainable practices and offer eco-friendly products.";
        } else if (containsKeywords(lowerCaseMessage, ["customer service hours", "support hours"])) {
            return "Our customer service is available 24/7 to assist you.";
        } else if (containsKeywords(lowerCaseMessage, ["coupons", "discount codes"])) {
            return "You can only apply one coupon code per order.";
        } else if (containsKeywords(lowerCaseMessage, ["wrong item", "incorrect item"])) {
            return "Please contact customer support, and we’ll resolve the issue by sending you the correct item.";
        } else if (containsKeywords(lowerCaseMessage, ["guarantee", "warranty"])) {
            return "Yes, we stand behind our products and offer guarantees on most items.";
        } else if (containsKeywords(lowerCaseMessage, ["refund", "return"])) {
            return "To request a refund or return, please visit our return policy page or contact customer service.";
        } else if (containsKeywords(lowerCaseMessage, ["shipping", "delivery time"])) {
            return "Our standard shipping times vary between 3-5 business days. You can track your order through the tracking link provided.";
        } else if (containsKeywords(lowerCaseMessage, ["track my order", "order status"])) {
            return "You can track your order by entering the order number on our tracking page or checking the link sent via email.";
        } else if (containsKeywords(lowerCaseMessage, ["pricing", "cost", "price"])) {
            return "Please check our website for the latest pricing details on the products you're interested in.";
        } else if (containsKeywords(lowerCaseMessage, ["cancel my order", "order cancellation"])) {
            return "You can cancel your order before it’s processed by contacting customer support.";
        } else if (containsKeywords(lowerCaseMessage, ["discount", "special offer", "promotion"])) {
            return "Check our promotions page for the latest discounts and offers.";
        } else if (containsKeywords(lowerCaseMessage, ["payment options", "pay method"])) {
            return "We accept credit cards, PayPal, and other popular payment methods.";
        } else if (containsKeywords(lowerCaseMessage, ["international shipping", "ship worldwide"])) {
            return "Yes, we offer international shipping. Shipping fees and times vary by location.";
        } else if (containsKeywords(lowerCaseMessage, ["gift card", "buy gift card"])) {
            return "You can purchase gift cards from our website. They make great gifts!";
        } else if (containsKeywords(lowerCaseMessage, ["exchange policy", "product exchange"])) {
            return "Our exchange policy allows you to exchange items within 30 days of purchase.";
        } else if (containsKeywords(lowerCaseMessage, ["subscribe", "newsletter", "subscribe to updates"])) {
            return "You can subscribe to our newsletter on our homepage for updates on new products and special offers.";
        } else if (containsKeywords(lowerCaseMessage, ["loyalty program", "reward points"])) {
            return "Our loyalty program allows you to earn points with every purchase, redeemable for discounts.";
        } else if (containsKeywords(lowerCaseMessage, ["bulk order", "large order"])) {
            return "For bulk orders, please contact our sales team for special pricing and support.";
        } else if (containsKeywords(lowerCaseMessage, ["availability", "out of stock", "in stock"])) {
            return "You can check the availability of any product on its product page.";
        } else if (containsKeywords(lowerCaseMessage, ["partnership", "business inquiry"])) {
            return "We’re always open to partnerships. Please reach out through our contact form.";
        } else if (containsKeywords(lowerCaseMessage, ["technical support", "tech help"])) {
            return "For technical support, contact our dedicated team through the support page.";
        } else if (containsKeywords(lowerCaseMessage, ["manual", "user guide"])) {
            return "You can download product manuals from the individual product pages.";
        } else if (containsKeywords(lowerCaseMessage, ["reset password", "forgot password"])) {
            return "To reset your password, click the 'Forgot Password' link on the login page.";
        } else if (containsKeywords(lowerCaseMessage, ["tracking number", "tracking issue"])) {
            return "If your tracking number isn’t working, please contact customer support for assistance.";
        } else if (containsKeywords(lowerCaseMessage, ["update account", "edit account"])) {
            return "To update your account information, log in and visit the 'Account Settings' section.";
        } else if (containsKeywords(lowerCaseMessage, ["p.o. box", "po box"])) {
            return "Yes, we ship to P.O. boxes, but some restrictions may apply depending on the carrier.";
        } else if (containsKeywords(lowerCaseMessage, ["expedited shipping", "faster delivery"])) {
            return "Yes, we offer expedited shipping options at checkout.";
        } else if (containsKeywords(lowerCaseMessage, ["redeem points", "use loyalty points"])) {
            return "You can redeem your loyalty points during checkout by selecting the 'Use Loyalty Points' option.";
        } else if (containsKeywords(lowerCaseMessage, ["gift wrapping", "wrap as gift"])) {
            return "Yes, gift wrapping is available at checkout for an additional fee.";
        } else {
            return "I'm sorry, I didn't understand that. Could you please provide more details or ask a different question?";
        }
    }
        

    const multipleItemCarousel = document.querySelector("#testimonialCarousel");

    if (window.matchMedia("(min-width:576px)").matches) {
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: 3000, // Auto slide every 3 seconds
            ride: 'carousel', // Ensure auto-sliding starts
            wrap: true // Enable infinite looping
        });
    
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").outerWidth(true); // Include margin in width
    
        var scrollPosition = 0;
    
        function autoSlide() {
            if (scrollPosition < carouselWidth - cardWidth * 3) {
                scrollPosition = scrollPosition + cardWidth;
            } else {
                scrollPosition = 0; // Reset to beginning for infinite loop
            }
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
    
        $(".carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 3) {
                scrollPosition = scrollPosition + cardWidth;
            } else {
                scrollPosition = 0; 
            }
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        });
    
        $(".carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
            } else {
                scrollPosition = carouselWidth - cardWidth * 3; 
            }
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        });
    
        setInterval(autoSlide, 3000); 
    
    } else {
        $(multipleItemCarousel).addClass("slide");
    }
    
      
    function toggleCollapse(idToOpen) {
        const collapses = document.querySelectorAll('.collapse');
        collapses.forEach(collapse => {
            if (collapse.id !== idToOpen) {
                new bootstrap.Collapse(collapse, {toggle: false}).hide();
            }
        });
        const targetCollapse = document.getElementById(idToOpen);
        const bsCollapse = new bootstrap.Collapse(targetCollapse);
        bsCollapse.toggle();
    }

    document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('editButton');
    const collapsibleContent = document.getElementById('collapsibleContent');

    editButton.addEventListener('click', () => {
        collapsibleContent.classList.toggle('show');
    });
}); 
    // dashboard scripts lines ends

    // Function to handle radio button selection and border change
    function changeBorder(selectedId) {
        // Remove the selected class from all card-body elements
        document.querySelectorAll('.card-body').forEach(function(cardBody) {
            cardBody.classList.remove('selected');
        });

        // Add the selected class to the corresponding card-body
        if (selectedId === 'exampleRadios1') {
            document.getElementById('card-body-1').classList.add('selected');
        } else if (selectedId === 'exampleRadios2') {
            document.getElementById('card-body-2').classList.add('selected');
        } else if (selectedId === 'exampleRadios3') {
            document.getElementById('card-body-3').classList.add('selected');
        }
    }

    // Function to set the first radio button as default when the page loads
    window.onload = function() {
        // Set the first radio button checked
        document.getElementById('exampleRadios1').checked = true;
        // Trigger the border change for the first card-body
        changeBorder('exampleRadios1');
    };

    // Add event listener for the collapse button to toggle radio selection
    document.addEventListener('DOMContentLoaded', function() {
        const collapseElement = document.getElementById('collapseExample');
        const collapseBtn = document.querySelector('.collapse-btn');

        // When collapse is opened, select the third radio button
        collapseElement.addEventListener('shown.bs.collapse', function() {
            document.getElementById('exampleRadios3').checked = true;
            changeBorder('exampleRadios3');
        });

        // When collapse is closed, select the first radio button
        collapseElement.addEventListener('hidden.bs.collapse', function() {
            document.getElementById('exampleRadios1').checked = true;
            changeBorder('exampleRadios1');
        });
    });


    $(document).ready(function(){
        $('.blog-carousel').slick({
            dots: true,              
            infinite: true,          
            speed: 500,              
            slidesToShow: 3,        
            slidesToScroll: 1,   
            autoplay: true,         
            autoplaySpeed: 3000,   
            arrows: true,    
            dots:false,      
            responsive: [        
                {
                    breakpoint: 992,  
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,  
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });


    function actionBtnClick(event) {
        event.preventDefault();  
        event.stopPropagation();  
    
    }
    
    function handleRedirect(event) {
        const isButtonClick = event.target.closest('button');
        if (!isButtonClick) {
            window.location.href = event.currentTarget.querySelector('a').href;
        }
    }
