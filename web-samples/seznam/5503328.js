document.write("<html>\n<head>\n<!-- Adform API Script -->\n<script type=\"text/javascript\">\n    document.write('<script src=\"'+ (window.API_URL || 'https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv='+ Math.random()) +'\"><\\/script>');\n</script>\n<title>300x600</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<!--Adform Global Clicktag START-->\n<script type=\"text/javascript\">\n    function adfOpenGlobalClickTAG() {\n        var adfClickTAGName = 'clickTAG',\n            adfClickTAGUrl = 'http://byty.navackove.cz';\n\n        window.open(dhtml.getVar(adfClickTAGName, adfClickTAGUrl), dhtml.getVar('landingPageTarget', '_blank'));\n    }\n    if(window.document.addEventListener) {\n        window.document.addEventListener('click', function(e) {\n            if(e.button !== 0) return;\n            e.stopPropagation();\n            e.preventDefault();\n            adfOpenGlobalClickTAG();\n        }, true);\n    } else {\n        document.attachEvent('onclick', function() {\n            adfOpenGlobalClickTAG();\n        });\n    }\n</script>\n<style>\n    html {\n        cursor: pointer;\n    }\n</style>\n<!--Adform Global Clicktag END-->\n\n</head>\n<body bgcolor=\"#FFFFFF\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\">\n<!-- Save for Web Slices (300x600.psd) -->\n<img src=\"images/300x600.gif\" width=\"300\" height=\"600\" alt=\"\">\n<!-- End Save for Web Slices -->\n</body>\n</html>");