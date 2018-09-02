$(document).ready(function () {
    // ********** [Start by http://phoamthanh.phomuaban.vn/] ********** //
    var isCheckedUpNewsPhoAmThanh = localStorage.getItem('upNewsPhoAmThanh') === 'true' ? 'on' : '';
    var togglePhoAmThanh = document.getElementById('upNewsPhoAmThanh');
    togglePhoAmThanh.checked = isCheckedUpNewsPhoAmThanh;
    togglePhoAmThanh.addEventListener('change', function(e) {
        var isChecked = togglePhoAmThanh.checked;
        localStorage.setItem('upNewsPhoAmThanh', isChecked);
    });
    // ********** [End by http://phoamthanh.phomuaban.vn/] ********** //

    // ********** [Start by https://www.5giay.vn/] ********** //
    var isCheckedUpNews5Giay = localStorage.getItem('upNews5Giay') === 'true' ? 'on' : '';
    var toggle5Giay = document.getElementById('upNews5Giay');
    toggle5Giay.checked = isCheckedUpNews5Giay;
    toggle5Giay.addEventListener('change', function(e) {
        var isChecked = toggle5Giay.checked;
        localStorage.setItem('upNews5Giay', isChecked);
    });
    // ********** [End by https://www.5giay.vn/] ********** //
    
    // ********** [Start by http://thegioidoco.net/] ********** //
    var isCheckedUpNewsTGDC = localStorage.getItem('upNewsTGDC') === 'true' ? 'on' : '';
    var toggleTGDC = document.getElementById('upNewsTGDC');
    toggleTGDC.checked = isCheckedUpNewsTGDC;
    toggleTGDC.addEventListener('change', function(e) {
        var isChecked = toggleTGDC.checked;
        localStorage.setItem('upNewsTGDC', isChecked);
    });
    // ********** [End by http://thegioidoco.net/] ********** //

    $('#loginTiengAnh123').click(function () {
        debugger;
        updateData();
        login();
    })
    

    $('#removeLocalStorage').click(function () {
        localStorage.removeItem('website');
    })
    $('#showLocal').click(function () {
        $('#local').text(localStorage.getItem('website'))
    })

  function login() {
    var a = false;
    cookie = null;
    $.each(account, function(dataAndEvents, item) {
      if (a) {
        return localStorage.setItem("rlt_cookie", cookie), chrome.tabs.create({
          url : "https://www.tienganh123.com/"
        }), false;
      }
      chrome.cookies.set({
        name : "php7_ta_123_session_id",
        url : "https://www.tienganh123.com/",
        value : item.cookie
      });
      var client = new XMLHttpRequest;
      client.onreadystatechange = function() {
        if (4 == this.readyState && (200 == this.status && "" == this.responseText)) {
          a = true;
          cookie = item.cookie;
        } else {
          a = false;
        }
      };
      client.open("GET", "https://www.tienganh123.com/ajax/logtime", false);
      client.send();
    });
    if (!a) {
      alert("H\u00e3y th\u1eed c\u1eadp nh\u1eadp l\u1ea1i data!");
    }
  }
  function updateData() {
    localStorage.setItem("rlt_account", null);
    localStorage.setItem("rlt_cookie", null);
    $.ajax({
      url : "http://r-getlinknew.blogspot.com/2016/10/tieng-anh-123.html",
      type : "GET",
      async : false,
      success : function(status) {
        var codeSegments = status.match(/name="data-tienganh" value='(.*)'/);
        if (1 < codeSegments.length) {
          var text = shareTiengAnh(codeSegments[1]);
          account = $.parseJSON(text).data;
          localStorage.setItem("rlt_account", text);
        }
      }
    });
  }
  function shareTiengAnh(s) {
    s = decodeURIComponent(decodeURIComponent(s));
    var v;
    var a = "zxc123!*%*&#)(^)";
    var state = [];
    var j = 0;
    var optsData = "";
    var k = 0;
    for (;256 > k;k++) {
      state[k] = k;
    }
    k = 0;
    for (;256 > k;k++) {
      j = (j + state[k] + a.charCodeAt(k % a.length)) % 256;
      v = state[k];
      state[k] = state[j];
      state[j] = v;
    }
    k = 0;
    j = 0;
    var i = 0;
    for (;i < s.length;i++) {
      k = (k + 1) % 256;
      j = (j + state[k]) % 256;
      v = state[k];
      state[k] = state[j];
      state[j] = v;
      optsData += String.fromCharCode(s.charCodeAt(i) ^ state[(state[k] + state[j]) % 256]);
    }
    return optsData;
  }
});
