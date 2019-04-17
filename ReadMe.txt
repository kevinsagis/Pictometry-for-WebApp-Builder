Pictometry Widget 1.2

April 2019 update:  NOTE::: if you are on https, make sure ALL links use https or Pictometry won't load!  Otherwise this still works fine, and is tested in Web App Builder 2.12 (April 2019 release).  Working demo now on https://www.sagis.org/map


July 9, 2015



v 1.2 - What's New: 
This widget can now be used for sites in any map projection (i.e. state plane, web mercator, etc)


How to Install

1.  To install, follow the ESRI directions for installing a WebApp Builder 1.1 Widget. 
Or simply copy this folder 'Pictometry' into \arcgis-web-appbuilder-1.1\client\stemapp\widgets which I have found works. This makes it available to all apps.

2.  Place your Pictometry website and Pictometry token in the places indicated in the code that say INSERT_HERE.

3. Install PHP.  Both viewers require it.

4. Add the widget to your WebApp Builder app.  In the textbox where it asks you to enter your server URL, enter it. 
If you are using the Pictometry Connect Online IPA and placed your php file named 'ipa.php' in a folder called 'php' (details below) then enter your site address. For example, you would enter:    http://www.yourcompany.com/php/ipa.php?   
That's it. It appends the lat/long from your cursor click, and opens a new window with Pictometry centered on this lat/long. 
Details for embedding credentials are below:

----------------------------------
Instructions for IPA / Pictometry Connect Online:

1. Get Pictometry to supply you with: API Key, Secret Key, IPA Load URL and Javascript Library URL.  The last paramater to set up in PHP is the Host URL which is your site, such as www.sagis.org
 
The standard path is http://yoursite/php/ipa.php.  So, when it gets passed the latitude, longitude, and credentials, it displays a URL like the folllowing:http://www.sagis.org/php/ipa.php?lat=32.058961097836026&lon=-81.18424499511575
And remember, this Host URL must match what you gave to Pictometry.  Each time they generate a key it is for your site. So if you asked them to provide a key for www.MyCountyWebsite.com you can't use it for MySecondSite.com it has to be forwww.MyCountyWebsite.com.  Therefore we had to two request two keys, one for our testing site and one for the production site.
 
2.  Add the following php file IPA.php to your php folder in your website folder --https://github.com/kevinsagis/Pictometry-for-WebApp-Builder/blob/master/Pictometry/IPA.php

----------------------------------

Instructions for EFS Internval Viewer:

note: while below mentions mySQL we use SQL Server 2012 and it works fine. 
The standard URL path for Internal EFS Viewer is the following:

pt = map.project(pt.x, pt.y, map.spatialReference.wkid, 4326);
var url = 'https://Your.Internal.Machine/efs/default.php?'+ 'lat=' + pt.y + '&lon=' + pt.x + '&inSR=2239&outSR=4326&' + 'user=USERNAME%40COMPANYNAME.com&pass=INSERT_TOKEN'  ;
///note: the 2239 is our wkid in Georgia, insert your own if your map uses your local wkid projection


Implementing a Pictometry Server Edition link with Embedded Credentials (provided by Pictometry, reposted with permission)

As designed, it is necessary for all users of the Server Edition POL Web Solution to enter credentials to allow access to the application. This works fine under most circumstances, but for some groups (such as public access), it is not always possible to create unique login credentials to allow access across a broad number of users.

A work-around to enable simplified access is to create a link to the Server Edition application with the login ID and password embedded, allowing the user to simply click on the link. The URL will contain both the path to the Server Edition application, the user ID, and the password in an encrypted format.

This process can be used for both one user and multiple users using an account that allows concurrent login’s1. It would be challenging to maintain such links for individual users due to the need to enter the back-end database to obtain the encrypted user password, particularly if there is a mandate to change passwords periodically.

The instructions presume the use of MySQL Server 5.1 as the back-end database for Server Edition. If your implementation utilizes another database server (Oracle 11g, MS SQL Server 2008), the principles are similar but the location of certain tools and commands may be different; it may be necessary to consult with your database administrator to obtain the required information.

In order to implement a link with embedded credentials, please do the following;

Identify the Encrypted Credentials

•	Open and log in to the MySQL Administration application on the server using the credentials established during the installation
o	Click on ‘Tools’-> ‘MySQL Query Browser’ 
o	From the Schemata pane on the right, expand the ‘pol_user’ schema
o	Locate the ‘users’ table, click it four times with the left mouse button to expand it to view the current properties of all users 
o	Locate the ‘user_email’ field, and scroll down to the user name of interest- 
?	Look to the field ‘user_password’ to the immediate right to identify the encrypted password- 
?	Click ‘Edit’ at the bottom of the screen, then highlight-and copy that encrypted password for later use. It will be a long hexadecimal string such as:  ‘5f4dcc3b5aa765d61d8327deb882cf99’ 

Create the Link with Embedded Credentials

•	Create a new web shortcut
•	In the location field, enter the following; 
https://serverURL/efs/default.php?user=abc%40xyz.com&pass=5f4dcc3b5aa765d61d8327deb882cf992
•	Test the link by opening it- it should open without the need for user intervention 
•	You can then use that URL as a free-standing link or use it in other applications or other web pages to bring up the Server Edition application

1 Please see your Server Edition Administrative Training material for information on how to create an account that allows concurrent logins, and limitations of those accounts.

2 ‘ServerURL/efs’ would be replaced with the URL to access the Server Edition application in your environment, ‘user=’ needs to be populated with the e-mail formatted user ID of the designated user(s), and ‘pass’ would be populated with the encrypted password for that account derived from the database.





by Kevin MacLeod

Disclaimer: all code and instructions provided with no warranty or guarantee of any kind express or implied. For Pictometry product support, contact Pictometry.
