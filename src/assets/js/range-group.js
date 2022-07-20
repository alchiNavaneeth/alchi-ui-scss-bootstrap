// (C) Yair Even-Or 2017
// DO NOT COPY

(function(){
  function extend(o1, o2){
      for( var key in o2 )
          if( o2.hasOwnProperty(key) )
              o1[key] = o2[key];
  };

  this.MultiRange = function MultiRange( placeholderElm, settings ){
      settings = typeof settings == 'object' ? settings : {}; // make sure settings is an 'object'

      this.settings = {
          minRange   : typeof settings.minRange == 'number' ? settings.minRange : 1,
          tickStep   : settings.tickStep || 5,
          step       : typeof settings.step == 'number' ? settings.step : 1,
          scale      : 100,
          min        : settings.min || 0,
          max        : settings.max || 100,
      }

      this.delta = this.settings.max - this.settings.min;

      // if "ticks" count was defined, re-calculate the "tickStep"
      if( settings.ticks )
          this.settings.tickStep = this.delta / settings.ticks;

      // a list of ranges (ex. [5,20])
      this.ranges = settings.ranges || [
          this.settings.min + this.settings.tickStep,
          this.settings.max - this.settings.tickStep
      ]

      this.id = Math.random().toString(36).substring(2,9), // almost-random ID
      this.DOM = {}; // Store all relevant DOM elements in an Object
      extend(this, new this.EventDispatcher());
      this.build(placeholderElm);
      this.events.binding.call(this);
  }

  MultiRange.prototype = {
      build : function( placeholderElm ){
          var that = this,
              scopeClasses = placeholderElm.className.indexOf('multiRange') == -1 ?
                              'multiRange ' + placeholderElm.className :
                              placeholderElm.className;

          this.DOM.scope = document.createElement('div');
          this.DOM.scope.className = scopeClasses;

          this.DOM.rangeWrap = document.createElement('div');
          this.DOM.rangeWrap.className = 'multiRange__rangeWrap';
          this.DOM.rangeWrap.innerHTML = this.getRangesHTML();

          this.DOM.ticks = document.createElement('div');
          this.DOM.ticks.className = 'multiRange__ticks';
          //this.DOM.ticks.innerHTML = this.generateTicks();

          // append to Scope
          this.DOM.scope.appendChild(this.DOM.rangeWrap);
          this.DOM.scope.appendChild(this.DOM.ticks);

          // replace the placeholder component element with the real one
          placeholderElm.parentNode.replaceChild(this.DOM.scope, placeholderElm);
      },

      generateTicks(){
          var steps = (this.delta) / this.settings.tickStep,
              HTML = '',
              value,
              i;

          for( i = 0; i <= steps; i++ ){
              value =(+this.settings.min) + this.settings.tickStep * i; // calculate tick value
              value = value.toFixed(1).replace('.0', ''); // cleaup
              HTML += '<div data-value="'+ value +'"></div>';
          }

          return HTML;
      },

      getRangesHTML(){
          var that = this,
              rangesHTML = '',
              ranges;

          this.ranges.unshift(0)
        //  if( this.ranges[0] > this.settings.min )
        //      this.ranges.unshift(this.settings.min)
          if( this.ranges[this.ranges.length - 1] < this.settings.max )
              this.ranges.push(this.settings.max);

          ranges = this.ranges;

          ranges.forEach(function(range, i){
              if( i == ranges.length - 1 ) return; // skip last ltem

              var leftPos = (range - that.settings.min) / (that.delta) * 100;

              // protection..
              if( leftPos < 0 )
                  leftPos = 0;

             // range =  ranges[i+1] - range;
              rangesHTML += '<div data-idx="'+i+'" class="multiRange__range" \
                  style="left:'+ leftPos +'%">\
                  <div class="multiRange__handle">\
                      \
                  </div>\
              </div>';
          })

          return rangesHTML;
      },

      /**
       * A constructor for exposing events to the outside
       */
      EventDispatcher : function(){
          // Create a DOM EventTarget object
          var target = document.createTextNode('');

          // Pass EventTarget interface calls to DOM EventTarget object
          this.off = target.removeEventListener.bind(target);
          this.on = target.addEventListener.bind(target);
          this.trigger = function(eventName, data){
              if( !eventName ) return;
              var e = new CustomEvent(eventName, {"detail":data});
              target.dispatchEvent(e);
          }
      },

      /**
       * DOM events listeners binding
       */
      events : {
          binding : function(){
              this.DOM.rangeWrap.addEventListener('mousedown', this.events.callbacks.onMouseDown.bind(this))
              //prevent anything from being able to be dragged
              this.DOM.scope.addEventListener("dragstart", function(e){ return false });
             // this.eventDispatcher.on('add', this.settings.callbacks.add)
          },
          callbacks : {
              onMouseDown : function(e){
                  var target = e.target;
                  if( !target ) return;

                  if( target.className == 'multiRange__handle__value' )
                      target = target.parentNode;

                  else if( target.className != 'multiRange__handle' )
                      return;

                  // set some variables (so percentages could be calculated on mousemove)
                  var _BCR = this.DOM.scope.getBoundingClientRect();
                  this.offsetLeft = _BCR.left;
                  this.scopeWidth = _BCR.width;
                  this.DOM.currentSlice = target.parentNode;


                  this.DOM.currentSlice.classList.add('grabbed');
                  this.DOM.currentSliceValue = this.DOM.currentSlice.querySelector('.multiRange__handle__value');

                  document.body.classList.add('multiRange-grabbing');

                  // bind temporary events (save "bind" reference so events could later be removed)
                  this.events.onMouseUpFunc = this.events.callbacks.onMouseUp.bind(this);
                  this.events.mousemoveFunc = this.events.callbacks.onMouseMove.bind(this);

                  window.addEventListener('mouseup', this.events.onMouseUpFunc)
                  window.addEventListener('mousemove', this.events.mousemoveFunc)
              },

              onMouseUp : function(e){
                  this.DOM.currentSlice.classList.remove('grabbed');
                  window.removeEventListener('mousemove', this.events.mousemoveFunc);
                  window.removeEventListener('mouseup', this.events.onMouseUpFunc);
                  document.body.classList.remove('multiRange-grabbing');

                  // publish the event
                  var value = parseInt( this.DOM.currentSlice.style.left );
                  this.trigger('changed', {idx:+this.DOM.currentSlice.dataset.idx, value:value, ranges:this.ranges})

                  this.DOM.currentSlice = null;
              },

              onMouseMove : function(e){
                  if( !this.DOM.currentSlice ){
                      window.removeEventListener('mouseup', this.events.onMouseUpFunc);
                      return;
                  }

                  // do not continue if the mouse was overflowing of the left or the right side of the range
                  if(  e.clientX < this.offsetLeft || e.clientX > (this.offsetLeft + this.scopeWidth) )
                      return;

                  var that = this,
                      value, // the numeric value
                      // minLeftPerc = this.settings.minRange/this.delta*100,
                      // minRightPerc = (this.delta - this.settings.minRange)/this.delta*100,
                      xPosScopeLeft = e.clientX - this.offsetLeft, // the left percentage value
                      leftPrecentage = xPosScopeLeft / this.scopeWidth * 100,
                      prevSliceValue = this.ranges[+this.DOM.currentSlice.dataset.idx - 1],
                      nextSliceValue = this.ranges[+this.DOM.currentSlice.dataset.idx + 1];

                  value = this.settings.min + (this.delta/100*leftPrecentage);

                  if( this.settings.step ){
                     // if( value%this.settings.step > 1 ) return;
                      value = Math.round((value) / this.settings.step ) * this.settings.step
                  }


                  // make sure a slice value doesn't go above the next slice value and not below the previous one
                  if( value < prevSliceValue + this.settings.minRange )
                       value = prevSliceValue + this.settings.minRange;
                  if( value > nextSliceValue - this.settings.minRange )
                       value = nextSliceValue - this.settings.minRange;

                  // define min and max move points
                  if( value < (this.settings.min + this.settings.minRange) )
                       value = this.settings.min + this.settings.minRange;
                  if( value > (this.settings.max - this.settings.minRange) )
                       value = this.settings.max - this.settings.minRange;

                  leftPrecentage = (value - this.settings.min) / this.delta * 100;

                  // update the DOM
                  window.requestAnimationFrame(function(){
                      if( that.DOM.currentSlice ){
                          that.DOM.currentSlice.style.left = leftPrecentage + '%';
                      }
                  })


                  // publish the event
                  this.trigger('change', {idx:+this.DOM.currentSlice.dataset.idx, value:value, ranges:this.ranges})
              }
          }
      }
  }
  })(this);


  var elem = document.querySelector('.range-group')
  var pos = elem.getAttribute('pos').split(',').map(Number)


  var range = new MultiRange(elem, {
      ranges : pos,
      step   : 0
  });
