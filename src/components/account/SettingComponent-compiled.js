'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FooterComponent = require('../public/FooterComponent');

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _done = require('material-ui/svg-icons/action/done');

var _done2 = _interopRequireDefault(_done);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/account/Setting.css');

var SettingComponent = function (_React$Component) {
  _inherits(SettingComponent, _React$Component);

  function SettingComponent(props) {
    _classCallCheck(this, SettingComponent);

    var _this = _possibleConstructorReturn(this, (SettingComponent.__proto__ || Object.getPrototypeOf(SettingComponent)).call(this, props));

    _this.state = {
      proba_rad: '',
      proba_norm: '',
      proba_defe: '',
      rate_rad: '',
      rate_norm: '',
      exp_low_value: '',
      exp_max_value: '',
      open: false,
      msg: '参数设置已完成'
    };
    return _this;
  }

  _createClass(SettingComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _jquery2.default.ajax({
        method: "POST",
        url: "http://121.201.68.143/risk/get_settings/",
        data: {
          token: (0, _jquery2.default)("#app").attr("data-token"),
          username: (0, _jquery2.default)("#app").attr("data-username")
        }
      }).done(function (data) {
        data = JSON.parse(data);
        console.log(data);
        self.setState({
          proba_rad: data.proba_rad,
          proba_norm: data.proba_norm,
          proba_defe: data.proba_defe,
          rate_rad: data.rate_rad,
          rate_norm: data.rate_norm,
          exp_low_value: data.exp_low_value,
          exp_max_value: data.exp_max_value
        });
      });
    }
  }, {
    key: 'handleproba_radChange',
    value: function handleproba_radChange(e) {
      this.setState({
        proba_rad: e.target.value
      });
    }
  }, {
    key: 'handleproba_normChange',
    value: function handleproba_normChange(e) {
      this.setState({
        proba_norm: e.target.value
      });
    }
  }, {
    key: 'handleproba_defeChange',
    value: function handleproba_defeChange(e) {
      this.setState({
        proba_defe: e.target.value
      });
    }
  }, {
    key: 'handlerate_radChange',
    value: function handlerate_radChange(e) {
      this.setState({
        rate_rad: e.target.value
      });
    }
  }, {
    key: 'handlerate_normChange',
    value: function handlerate_normChange(e) {
      this.setState({
        rate_norm: e.target.value
      });
    }
  }, {
    key: 'handleexp_low_valueChange',
    value: function handleexp_low_valueChange(e) {
      this.setState({
        exp_low_value: e.target.value
      });
    }
  }, {
    key: 'handleexp_max_valueChange',
    value: function handleexp_max_valueChange(e) {
      this.setState({
        exp_max_value: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var self = this;
      // $.ajax({
      //   method:"POST",
      //   url:"http://121.201.68.143/risk/set_settings/",
      //   data:{
      //     token:$("#app").attr("data-token"),
      //     username:$("#app").attr("data-username"),
      //     info:this.state
      //   }
      // }).done(function (data) {
      //   console.log(data);
      //   self.setState({
      //     open:true
      //   })
      // })
      self.setState({
        open: true
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'setting-component' },
        _react2.default.createElement(_AppBar2.default, {
          title: '\u8BBE\u7F6E',
          showMenuIconButton: false
        }),
        _react2.default.createElement(
          'div',
          { className: 'setting-text-wrapper' },
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u8FDB\u653B\u578B\u8D44\u91D1\u6982\u7387\u533A\u95F4',
            value: this.state.proba_rad,
            onChange: this.handleproba_radChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u666E\u901A\u578B\u8D44\u91D1\u6982\u7387\u533A\u95F4',
            value: this.state.proba_norm,
            onChange: this.handleproba_normChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u9632\u5B88\u578B\u8D44\u91D1\u6982\u7387\u533A\u95F4',
            value: this.state.proba_defe,
            onChange: this.handleproba_defeChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u8FDB\u653B\u578B\u8D44\u91D1\u5360\u603B\u8D44\u91D1\u6BD4\u91CD',
            value: this.state.rate_rad,
            onChange: this.handlerate_radChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u666E\u901A\u578B\u8D44\u91D1\u5360\u603B\u8D44\u91D1\u6BD4\u91CD',
            value: this.state.rate_norm,
            onChange: this.handlerate_normChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u7528\u6237\u6700\u5C0F\u671F\u671B\u6536\u76CA',
            value: this.state.exp_low_value,
            onChange: this.handleexp_low_valueChange.bind(this)
          }),
          _react2.default.createElement(_TextField2.default, {
            floatingLabelText: '\u7528\u6237\u5355\u7B14\u627F\u53D7\u6700\u5927\u635F\u5931',
            value: this.state.exp_max_value,
            onChange: this.handleexp_max_valueChange.bind(this)
          })
        ),
        _react2.default.createElement(
          _FloatingActionButton2.default,
          {
            className: 'setting-submit-btn',
            onClick: this.handleSubmit.bind(this)
          },
          _react2.default.createElement(_done2.default, null)
        ),
        _react2.default.createElement(_Snackbar2.default, {
          open: this.state.open,
          message: this.state.msg,
          autoHideDuration: 1000,
          onRequestClose: this.handleRequestClose.bind(this)
        }),
        _react2.default.createElement('div', { className: 'placeholder' }),
        _react2.default.createElement(_FooterComponent2.default, { index: 3 })
      );
    }
  }]);

  return SettingComponent;
}(_react2.default.Component);

SettingComponent.displayName = 'AccountSettingComponent';

// Uncomment properties you need
// SettingComponent.propTypes = {};
// SettingComponent.defaultProps = {};

exports.default = SettingComponent;

//# sourceMappingURL=SettingComponent-compiled.js.map