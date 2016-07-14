'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

'use strict';

var DefaultDecorators = [{
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      return _React2['default'].createElement(
        'button',
        {
          className: 'slider-nav-button'+(this.props.currentSlide === 0 ? ' active':''),
          onClick: this.props.previousSlide },
        'PREV'
      );
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterLeft'
}, {
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      return _React2['default'].createElement(
        'button',
        {
          className: 'slider-nav-button'+(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount ? ' active':''),
          onClick: this.props.nextSlide },
        'NEXT'
      );
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterRight'
}, {
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return _React2['default'].createElement(
        'ul',
        { className: 'slider-nav-dot-wrap' },
        indexes.map(function (index) {
          return _React2['default'].createElement(
            'li',
            { key: index },
            _React2['default'].createElement(
              'a',
              {
                className: 'slider-nav-dot'+(self.props.currentSlide === index ? ' active':''),
                onClick: self.props.goToSlide.bind(null, index) 
              }
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 24,
        opacity: active ? 1 : 0.5
      };
    }
  }),
  position: 'BottomCenter'
}];

exports['default'] = DefaultDecorators;
module.exports = exports['default'];