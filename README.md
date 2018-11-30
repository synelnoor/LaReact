# LaReact

Learn Laravel & Reactjs 

Require:
- Laravel
- Nodejs
- Composer

step: 
* composer create-project --prefer-dist laravel/laravel <Name Project>
* cd <Name Project>
* npm install
* config your .env
* php artisan preset react
* Next, switch to the following structure directories.
ReactJSLaravelTutorial  >> resources  >>  assets  >>   js  there is one folder and two javascript files.

The folder name is components, which is react component and the second file is app.js other file is bootstrap.js
* Go to the resources  >>  views  >>  welcome.blade.php file and copy the following code to it. Remove the existing code.
 with 
 
 
  <div id="example"></div>
  <script src="{{asset('js/app.js')}}" ></script>
  
* npm run dev
* php artisan serve
* npm run watch
for router read https://reacttraining.com/react-router/web/guides/quick-start

