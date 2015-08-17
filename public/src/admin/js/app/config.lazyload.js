// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '/src/admin/js/jquery/jquery.easypiechart.fill.js'],
      sparkline:      [   '/src/admin/js/jquery/jquery.sparkline.retina.js'],
      plot:           [   '/src/admin/js/jquery/jquery.flot.js',
                          '/src/admin/js/jquery/jquery.flot.pie.js',
                          '/src/admin/js/jquery/jquery.flot.resize.js',
                          '/src/admin/js/jquery/jquery.flot.tooltip.js',
                          '/src/admin/js/jquery/jquery.flot.orderBars.js',
                          '/src/admin/js/jquery/jquery.flot.spline.js'],
      moment:         [   '../bower_components/moment/moment.js'],
      screenfull:     [   '/src/admin/js/screenfull/screenfull.min.js'],
      slimScroll:     [   '../bower_components/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   '../bower_components/nestable/jquery.nestable.js',
                          '../bower_components/nestable/jquery.nestable.css'],
      filestyle:      [   '../bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../bower_components/bootstrap-slider/bootstrap-slider.js',
                          '../bower_components/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../bower_components/chosen/chosen.jquery.min.js',
                          '../bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '../bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '/src/admin/js/datatables/jquery.dataTables.min.js',
                          '/src/admin/js/datatables/jquery.dataTables.bootstrap.js',
                          '/src/admin/js/datatables/jquery.dataTables.bootstrap.css'],
      vectorMap:      [   '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '/src/admin/js/footable/footable.all.min.js',
                          '/src/admin/js/footable/footable.core.css'],
      fullcalendar:   [   '../bower_components/moment/moment.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.css',
                          '../bower_components/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../bower_components/moment/moment.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'clientService',
                  files: [
                      '/src/admin/js/services/clientService.js'
                  ]
              },
              {
                  name: 'procedureService',
                  files: [
                      '/src/admin/js/services/procedureService.js'
                  ]
              },
              {
                  name: 'doctorService',
                  files: [
                      '/src/admin/js/services/doctorService.js'
                  ]
              },
              {
                  name: 'manipulationService',
                  files: [
                      '/src/admin/js/services/manipulationService.js'
                  ]
              },
              {
                  name: 'referenceService',
                  files: [
                      '/src/admin/js/services/referenceService.js'
                  ]
              },
              {
                  name: 'ngGrid',
                  files: [
                      '../bower_components/ng-grid/build/ng-grid.min.js',
                      '../bower_components/ng-grid/ng-grid.min.css',
                      '../bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../bower_components/angular-ui-grid/ui-grid.min.js',
                      '../bower_components/angular-ui-grid/ui-grid.min.css',
                      '../bower_components/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../bower_components/angular-ui-select/dist/select.min.js',
                      '../bower_components/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'src/admin/js/angular/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '/src/admin/js/toaster/toaster.js',
                      '/src/admin/js/toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../bower_components/textAngular/dist/textAngular-sanitize.min.js',
                      '../bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      '../bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../bower_components/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../bower_components/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../bower_components/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../bower_components/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../bower_components/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      '../bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
