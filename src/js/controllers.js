/**
 * Created by dkvelusa on 2/11/2018.
 */
 var controllers = angular.module('controllers', []);
 var templ;

 controllers.controller('LandingController',
    function LandingControllerFnc($scope, $interval){
    
        $scope.handleMouseNav = function(e){
            if(e.type === "mouseover"){
                var self = e,x=0;
                  e.currentTarget.style.borderBottom = "1px solid #fff";
                  e.currentTarget.style.width = x; 
                  var interval = setInterval(function(){
                    self.currentTarget.style.width= ++x +"%";
                    if(x==100){
                        clearInterval(interval);
                    }
                  },2);
            } else if (e.type === "mouseleave") {
                var self = e,x;
                  e.currentTarget.style.borderBottom = "1px solid #fff";
                  x = e.currentTarget.style.width ;
                  var interval = setInterval(function(){
                    self.currentTarget.style.width= --(x.parseInt()) +"%";
                    if(x==0){
                        clearInterval(interval);
                    }
                  },2);
            }
        };

        $scope.portfolioDetails =  [
        ['DASHBOARD',           'fa-chart-line',  'A Summary Dashboard on Data Transfers Status for each Jobs to Identify & Rectify Errors'],
        ['JOB SCHEDULE',        'fa-clock',  'Implemented Wizard which allows Users to Schedule a Job based on their Choice'],
        ['QUICK SAVE',          'fa-save',  'Ability to Immediately Save Flows before the Last Screen, helped in faster modification of Flows'],
        ['TREE GRID',           'fa-th',  'Reduced the Page Loading time by implementing Lazy Load functionality as a part of Tree Grid'],
        ['QUICK FILTERS',       'fa-filter',  'Condition based Record Filtering for Grids, based on Job\'s Start/End Time and Status'],
        ['OBJECT MANIPULATION', 'fa-edit',  'Provided the ability to modify the configurations for Out of the Box Flows']
        ];
        $scope.contactDetails   = [
        ['Age',                 '23'],
        ['Address',             'B 103, Isha Casablanca'],
        ['Email',               'dhilip1211@gmail.com'],
        ['Phone',               '+91-9750568258']
        ];
        $scope.experience       = [
        {
        'name'                  : 'Oracle',
        'role'                  : 'Intern',
        'period'                : 'Jan 2016 - Jun'
        },
        {
        'name'                  : 'Oracle',
        'role'                  : 'Applications Developer 1',
        'period'                : 'Jul 2016 - Dec 2017'
        },
        {
        'name'                  : 'Oracle',
        'role'                  : 'Applications Developer 2',
        'period'                : 'Dec 2017 - Present',
        }];
        $scope.education        = [
        {
        'name'                : 'K.G. Matric. Hr. Sec. School',
        'branch'                : 'Computer Science',
        'period'                : '2006-2012',
        'percentage'            : "97%",
        'project'               : 'Library Management System'
        },
        {
        'name'               : 'PSG College Of Technology',
        'branch'                : 'B.E. Computer Science',
        'period'                : '2012-2016',
        'percentage'            : "8.08",
        'project'               : 'Moving Object Detection and Alarming'
        }];

        $scope.shortDescription = 'A Software Developer with two Years of Experience, Specialising in Front-end Technologies with a keen Interest towards Programming'; 
        $scope.details={
            'tools' : {
                'IDE' : ['Eclipse', 'WebStorm', 'SublimeText', 'SQL Developer', 'Net Beans'],
                'Build': ['Ant'],
                'Source Control' : ['Git']
            }
            
        };
    });




// COMPONENTS

resume.
component('skill1', {
    template:
    '<div ng-repeat="(prop, key) in $ctrl.technicalSkills1">' +
    '<div class="row-12 skillRow">' +
    '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
    '<div class="progress">' +
    '<div class="progress-bar  skillLevel"></div>' +
    '</div>' +
    '</div>' +
    '   </div>' +
    '</div>',
    controller: function PhoneListController() {
        this.technicalSkills1 = [
        ['Javascript', '85%'],
         ['JQuery', '90%'],
        ['AngularJs', '60%'],
        ['Bootstrap', '70%'],
        ['React', '50%']
        ];
    }
});

resume.
component('skill2', {
    template:
    '<div ng-repeat="(prop, key) in $ctrl.technicalSkills2">' +
    '<div class="row-12 skillRow">' +
    '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
    '<div class="progress">' +
    '<div class="progress-bar skillLevel"> </div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>',
    controller: function PhoneListController() {
        this.technicalSkills2 = [
        ['Backbone', '80%'],
        ['HTML', '85%'],
        ['Css', '75%'],
        ['Java', '65%'],
        ['SQL', '80%']
        ];
    }
});