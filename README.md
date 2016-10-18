
1. Install Node.js (this comes with npm)
https://nodejs.org/en/download/package-manager/

2. Run these from your project root to install components:

  2.1 Install Global Node components:

    npm install -g grunt-cli bower yo generator-karma generator-angular
    
  2.2 Install Node Modules:

    npm install
    
  2.2 Install bower components(need to execute again if additional components get added to bower.json)
  
    bower install 

3. build the app: 

    grunt clean local

4. Run the app:

    grunt serve
    

    
     
