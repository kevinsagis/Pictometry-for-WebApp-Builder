define(['dojo/_base/declare',
  'jimu/BaseWidget',
      'esri/map'

],
function(declare, BaseWidget, map) {
  var clazz = declare([BaseWidget], {
      templateString: '<div> <br /> <br />Click the Pictometry Clicker button to activate the Pictometry tool. The Pictometry Viewer will open in a new window and display Pictometry imagery. Popups must be enabled.  <br /> <br /> <br /> ' +
    '<input type="button" class="jimu-btn" id="btnPict" value="Pictometry Clicker" data-dojo-attach-event="click:_pictometryClick">. <br /> <br /> <br /></div> ',

    _pictometryClick: function () {
        map = this.map;

var handlerPictometry;
 //handlers 
                    if (handlerPictometry) {
                        handlerPictometry.remove();
                        handlerPictometry = null;
                    } else {

map.setMapCursor("crosshair");
handlerPictometry = map.on("click", function (evt) {

                            var pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                            var url = 'http://INSERT_YOUR_SITE_URL/php/ipa.php?' + 'lat=' + pt.y + '&lon=' + pt.x;


                            window.open(url);

                            ///// remove after one click
                       //     handlerPictometry.remove();
                            map.setMapCursor("default");
                            Pict = false;
                            ////remove after one click
                    

                              handlerPictometry.remove();  //hm, should we disable after one click and re-wire other handlers? Revisit later..
                        });
                    };  /// end else for handlerPictometry


/////  end of pictometry widget

/////
    }
  });

  clazz.hasStyle = true;
  clazz.hasUIFile = false;
  clazz.hasLocale = false;
  clazz.hasConfig = false;
  return clazz;
});