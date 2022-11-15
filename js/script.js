function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
  
  
  
  const $drowdownArrow = document.querySelector('.fa-caret-down');
  const $checkbox = document.getElementById('openDropdown');
  const $dropdownMenu = document.querySelector('.dropdown-menu');
  
  $checkbox.addEventListener('change', () => {
    $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
  });
  
  $dropdownMenu.addEventListener('click', (e) => {
    $checkbox.checked = false;
    // setting checked to false won't trigger 'change'
    // event, manually dispatch an event to rotate
    // dropdown arrow icon
    $checkbox.dispatchEvent(new Event('change'));
  });
  
  
  
  /******************************* */
  
  $(document).ready(function(){
    $('.floatingButton').on('click',
        function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            if($(this).children('.fa').hasClass('fa-plus'))
            {
                $(this).children('.fa').removeClass('fa-plus');
                $(this).children('.fa').addClass('fa-close');
            } 
            else if ($(this).children('.fa').hasClass('fa-close')) 
            {
                $(this).children('.fa').removeClass('fa-close');
                $(this).children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function(e) {
      
        var container = $(".floatingButton");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
        {
            if(container.hasClass('open'))
            {
                container.removeClass('open');
            }
            if (container.children('.fa').hasClass('fa-close')) 
            {
                container.children('.fa').removeClass('fa-close');
                container.children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').hide();
        }
      
        // if the target of the click isn't the container and a descendant of the menu
        if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) 
        {
            $('.floatingButton').removeClass('open');
            $('.floatingMenu').stop().slideToggle();
        } 
    });
  });
  
  
  
  
  
  
  
  
  
  
  $('.scrollto a').on('click', function() {
  
    let href = $(this).attr('href');
  
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
  
    return false;
  });