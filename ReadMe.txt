Pictometry Widget 1.0

April 2015

How to Install

1.  To install, follow the ESRI directions for installing a WebApp Builder 1.1 Widget. 
Or simply copy this folder 'Pictometry' into \arcgis-web-appbuilder-1.1\client\stemapp\widgets which I have found works. This makes it available to all apps.

2.  Place your Pictometry website and Pictometry token in the places indicated in the code that say INSERT_HERE.

In the next version I may include an option to view the Pictometry in a popup, and make a custom cursor.

Also note if you have the Internal Pictometry Viewer (EFS)...

Simply swap out the var url = ..... line for this one below:
var url = 'https://INSERT_YOUR_SERVER_URL/efs/default.php?' + 'lat=' + pt.y + '&lon=' + pt.x + '&inSR=INSERT_YOUR_SPATIAL_REFERENCE&outSR=4326&' + 'user=INSERT_YOUR_USERNAME&pass=INSERT_YOUR_PICTOMETRY_TOKEN_FROM_SQL_SERVER';


Kevin MacLeod