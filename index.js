'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  WebView,
} from 'react-native';

import {DOMParser} from 'xmldom';

// copy from 'xmldom/dom.js'
const ELEMENT_NODE                = 1;
const ATTRIBUTE_NODE              = 2;
const TEXT_NODE                   = 3;
const CDATA_SECTION_NODE          = 4;
const ENTITY_REFERENCE_NODE       = 5;
const ENTITY_NODE                 = 6;
const PROCESSING_INSTRUCTION_NODE = 7;
const COMMENT_NODE                = 8;
const DOCUMENT_NODE               = 9;
const DOCUMENT_TYPE_NODE          = 10;
const DOCUMENT_FRAGMENT_NODE      = 11;
const NOTATION_NODE               = 12;

class DOMView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{width: this.props.maxWidth}}>
        {this._htmlToView()}
      </View>
    )
  }

  _htmlToView() {
    let doc = new DOMParser().parseFromString(`<div>${this.props.html}</div>`, 'text/html');
    console.log(doc.documentElement);
    // console.log(doc.documentElement.childNodes.length);
    return <View>{this._nodeRender(doc.documentElement, 0, 0)}</View>
  }

  _nodeRender(node, floor, index) {
    // console.log(typeof node.childNodes);

    // check if is text
    if (node.nodeType == TEXT_NODE) {
      return this._textNodeRender(node, floor, index)
    }

    // check if is <img />
    if (node.nodeName == 'img') {
      return this._imageNodeRender(node, floor, index);
    }

    // check if is <iframe />
    if (node.nodeName == 'iframe') {
      return this._iframeNodeRender(node, floor, index);
    }

    // check if is a big node
    if (node.childNodes) {
      let views = Object.keys(node.childNodes).map((i) => {
        return this._nodeRender(node.childNodes[i], floor + 1, i);
      });
      return <View key={`${floor}.${index}`}>{views}</View>;
    }

    return null;
  }

  _textNodeRender(node, floor, index) {
    let value = node.data.trim();
    if (value.length > 0) {
      return <Text key={`${floor}.${index}`}>{value}</Text>;
    }

    return null;
  }

  _imageNodeRender(node, floor, index) {
    // console.log(node.getAttribute('src'));
    // console.log(node.getAttribute('style'));
    let src = node.getAttribute('src');
    if (src.substr(0, 4) == 'data') {
      return null;
    }

    let height = -1, width = -1;
    let style = node.getAttribute('style');

    // get height
    let heightStyle = style.match(/height\s*:\s*\d*/);
    if (heightStyle && heightStyle.length > 0) {
      height = heightStyle[0].match(/\d+/)[0];
    }

    // get width
    let widthStyle = style.match(/width\s*:\s*\d*/);
    if (widthStyle && widthStyle.length > 0) {
      width = widthStyle[0].match(/\d+/)[0];
    }

    let rnStyle = {};
    if (height == -1 || width == -1) {
      rnStyle = {height: this.props.maxWidth, width: this.props.maxWidth};
    } else {
      rnStyle = {height: this.props.maxWidth / width * height, width: this.props.maxWidth};
    }

    return <Image key={`${floor}.${index}`} source={{uri: src}} style={rnStyle} />;
  }

  _iframeNodeRender(node, floor, index) {
    let src = node.getAttribute('src');
    let width = node.getAttribute('width');
    let height = node.getAttribute('height');

    // youku video handler
    src = src.replace(
        /http:\/\/player\.youku\.com\/player\.php\/sid\/([^\/]*)\/([^\"]*)/g,
        "http://player.youku.com/embed/$1"
    );
    console.log(src);

    return (
      <WebView
          key={`${floor}.${index}`}
          automaticallyAdjustContentInsets={true}
          style={{width: this.props.maxWidth, height: this.props.maxWidth / width * height}}
          source={{html: `<iframe src="${src}" width="${this.props.maxWidth}" height="${this.props.maxWidth / width * height}" frameborder=0 allowfullscreen></iframe>`}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={false}
          scrollEnabled={false}
          onNavigationStateChange={(obj)=> {
            console.log(obj);
          }}
      />
    )
  }
}

module.exports = DOMView;
