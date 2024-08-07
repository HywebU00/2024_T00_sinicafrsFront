// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });
  // 檔案層級資料
  $('.file_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
});

// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});

$(function () {
  // 使用者登入
  $('.menu .memberlogin .loginbtn>a').on('click', function () {
    $('.Userlogin_block').stop().slideToggle();
  });
  // 使用者登入 手機版
  $('.memberCtrl').on('click', function () {
    $('.m_memberlogin ').stop().slideToggle();
  });

  // 點外面關閉share
  $(document).on('touchend click', function (e) {
    var container = $('.menu .memberlogin .loginbtn>a');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.Userlogin_block').slideUp();
    }
  });
  // 點外面關閉share 手機版
  $(document).on('touchend click', function (e) {
    var container = $('.memberCtrl, .m_memberlogin');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.m_memberlogin').slideUp();
    }
  });
  // 使用者專區

  $('.menu .memberlogin ')
    .on('mouseenter', function () {
      $('.menu .memberlogin ul').stop().slideDown();
    })
    .on('mouseleave', function () {
      $('.menu .memberlogin ul').stop().slideUp();
    });

  // 後分類
  var _sortlist = $('.searchresults_block .sortlist');
  var i = 10; //不隱藏的個數

  _sortlist.each(function () {
    var _slideItem = $(this).find('li').slice(i);
    var _more = $(this).find('.more>a');
    var moreText = _more.text();
    var altText = '顯示收合';

    _more.click(function () {
      if (_slideItem.is(':hidden')) {
        _slideItem.slideDown();
        _more.text(altText);
        _more.addClass('close');
      } else {
        _slideItem.slideUp();
        _more.text(moreText);
        _more.removeClass('close');
      }
    });
  });

  //
  // 檔案層級 more
  var _organizationlist = $('.organization_list');
  var i = 5; //不隱藏的個數

  _organizationlist.each(function () {
    var _slideItem = $(this).find('li').slice(i);
    var _more = $(this).find('.more>a');
    var moreText = _more.text();
    var altText = '顯示收合';

    _more.click(function () {
      if (_slideItem.is(':hidden')) {
        _slideItem.slideDown();
        _more.text(altText);
        _more.addClass('close');
      } else {
        _slideItem.slideUp();
        _more.text(moreText);
        _more.removeClass('close');
      }
    });
  });

  //後分類
  $('.narrowquery_btn').click(function () {
    $('.searchresults_block .leftblock');
  });
  //  後分類整個 左右收合
  $('.narrowquery_btn>a').click(function () {
    $('.searchresults_block .leftblock').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 後分類點外面關閉share
  $(document).on('touchend click', function (e) {
    var container = $('.searchresults_block .narrowquery_btn, .searchresults_block .leftblock');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.searchresults_block .leftblock').removeClass('open');
    }
  });
  // 檔案層級按鈕
  $('.filehierarchy_btn').click(function () {
    $('.filebrowsing_block .leftblock');
  });
  //  檔案層級按鈕 整個 左右收合
  $('.filehierarchy_btn>a').click(function () {
    $('.filebrowsing_block .leftblock').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 檔案層級按鈕點外面關閉share
  $(document).on('touchend click', function (e) {
    var container = $('.filebrowsing_block .filehierarchy_btn, .filebrowsing_block .leftblock');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.filebrowsing_block .leftblock').removeClass('open');
    }
  });
  //
  Fancybox.bind('[data-fancybox]', {
    // Custom options for all galleries
  });
  //檔案層級資料
  let _filehierarchylist = $('.filehierarchy_list');
  let _filehierarchylistbtn = $('.filehierarchy_list ul li a');
  _filehierarchylist.find('li').has('ul').addClass('hasChild');

  _filehierarchylistbtn.click(function () {
    _filehierarchylistbtn.removeClass('active');
    $(this).addClass('active');
    if ($(this).siblings('ul').is(':hidden')) {
      $(this).siblings('ul').stop().slideDown();
      $(this).parent('li').stop().addClass('open');
    } else {
      $(this).siblings('ul').stop().slideUp();
      $(this).parent('li').stop().removeClass('open');
    }
  });
});
