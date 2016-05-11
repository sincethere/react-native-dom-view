/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import DOMView from 'react-native-dom-view';

const SCREEN_WIDTH                = Dimensions.get('window').width;

const html = `

<p>这周一直是湿漉漉的南风天，虽说南方滋养人但也太湿了吧&hellip;&hellip;真的，有时在被窝里真怀疑自己一把年纪是不是尿床了&hellip;&hellip;</p>

<p>&nbsp;</p>

<p>希望下周晴朗起来啊~</p>

<p>&nbsp;</p>

<p>本期目录：</p>

<ul>
	<li><a href="#article_anchor_1">黑底大花卡</a></li>
	<li><a href="#article_anchor_2">复古野花卡图片教程</a></li>
	<li><a href="#article_anchor_3">红粉色系配色及示范</a></li>
	<li><a href="#article_anchor_4">帕特里克节作品欣赏</a></li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><a id="article_anchor_1" name="article_anchor_1"><strong>【黑底大花卡】</strong></a></p>

<p>常见的卡片都是白底为主，再往上印章染色什么的~黑卡打底的很少见，因为很难显色嘛~</p>

<p>不过这样一来黑色底的卡片就比较容易夺人眼球啦~看看jennifer是咋整的~</p>

<p>P.S.看到视频里用的白卡先不用惊讶~哈哈</p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894766e2daa256f7172fad43ff29c2b72bf79.jpg" style="height:279px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894767642f5a2a4a52169ea1e3a7e0328964e.jpg" style="height:183px; width:325px" /></p>

<div contenteditable="false" tabindex="-1">
<div class="embeddedContent oembed-provider-youku" data-align="none" data-oembed="http://v.youku.com/v_show/id_XMTUwNjMxMzg0MA==.html" data-oembed_provider="youku" data-resizetype="noresize" data-widget="oembed"><iframe allowfullscreen="true" allowscriptaccess="always" frameborder="0" height="400" scrolling="no" src="http://player.youku.com/player.php/sid/XMTUwNjMxMzg0MA==/v.swf&amp;jqoemcache=LHqWT" width="480"></iframe></div>
<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" /></div>

<p>原博链接：<a href="http://www.jennifermcguireink.com/2016/03/black-embossed-resist.html">http://www.jennifermcguireink.com/2016/03/black-embossed-resist.html</a></p>

<p>&nbsp;</p>

<p><a id="article_anchor_2" name="article_anchor_2"><strong>【复古野花卡图片教程】</strong></a></p>

<p>虽然俗话说清明谷雨冷死老鼠，但气候终究是一日暖过一日了~各种花都开起来了。好久没有发过逐个图的教程了，今天来一发。</p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/145848949681a2ca80cc6c685cf4adab313a8b2dad.jpg" style="height:400px; width:300px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/145848949677cd9df94de2bb0bf5f3166a2d72402a.jpg" style="height:225px; width:300px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489497d6708733ea1736f61fbdce806e9272cb.jpg" style="height:225px; width:300px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/145848949757b323503c10a15e7e1e10e1fc0968e8.jpg" style="height:225px; width:300px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894974b180ce220b6d944e64d974005c782e1.jpg" style="height:225px; width:300px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894974172be433ab8eda39ea94e8d2f56e59e.jpg" style="height:225px; width:300px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489497052ac5e0621253d143d76a4748841bbb.jpg" style="height:225px; width:300px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894978a0b4ad08d286df24de632904be10f0e.jpg" style="height:225px; width:300px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894974d4882fc401eb7846cff3e9b85477391.jpg" style="height:225px; width:300px" /></p>

<p>&nbsp;</p>

<p>原博链接：<a href="http://www.igirlzoe.com/6961/frilly-funkie-wildflower-card.html">http://www.igirlzoe.com/6961/frilly-funkie-wildflower-card.html</a></p>

<p>&nbsp;</p>

<p><a id="article_anchor_3" name="article_anchor_3"><strong>【红粉色系配色及示范】</strong></a></p>

<p>做各种卡片啊单页剪贴等等作品的时候，配色是很令人头大的一个问题。Prima博客每个月都会提供一个配色方案让大家做，然后也公布一些很好的作品给大家灵感。今天就发个红粉色系的~</p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894858548ee68bda2409c94de713d0236c989.jpg" style="height:786px; width:600px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489487ea618ff248ffe7067cc7023f92f25b0a.jpg" style="height:321px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/145848948881e009083fd33a436f80e310074aca57.jpg" style="height:325px; width:325px" /><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/145848948912871b3558f4a1c8269a8097986d94f9.jpg" style="height:271px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894903382c41e3837986e210765242c0fea86.jpg" style="height:415px; width:325px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489491cb479de3c0bafb9b04b9e41ce50eed23.jpg" style="height:325px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894937b3f852acd616f16b29cf0047398e40c.jpg" style="height:282px; width:325px" /></p>

<p>原博链接：<a href="http://prima.typepad.com/prima/2016/03/we-loved-your-entries.html">http://prima.typepad.com/prima/2016/03/we-loved-your-entries.html</a></p>

<p>&nbsp;</p>

<p><a id="article_anchor_4" name="article_anchor_4"><strong>【帕特里克节作品欣赏】</strong></a></p>

<p>圣帕特里克节（英语：Saint Patrick&#39;s Day）是纪念圣帕特里克主教的节日，在每年3月17日举行。</p>

<p>公元432年，圣帕特里克受教皇派遣前往爱尔兰劝说爱尔兰人改信基督教。圣帕特里克临危不惧，当即摘下一棵三叶苜蓿，形象地阐明了圣父、圣子、圣灵三位一体的教义。他雄辩的演说使爱尔兰人深受感动，接受了圣帕特里克主施的隆重洗礼。461年3月17日，圣帕特里克逝世，爱尔兰人为了纪念他，将这一天定为圣帕特里克节。</p>

<p>美国是爱尔兰人移民最多的国家之一，圣帕特里克节这一天，人们通常要举行游行、教堂礼拜和聚餐等活动。美国的爱尔兰人喜欢佩带三叶苜蓿，用爱尔兰的国旗颜色&mdash;&mdash;绿黄两色装饰房间，身穿绿色衣服，并向宾客赠送三叶苜蓿饰物等。除了服装外，食品、玩具等在节日期间都会带上绿色。</p>

<p>（以上摘自维基百科~~一起涨姿势）</p>

<p>下面来点看得懂的，上图&mdash;&mdash;</p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894855d6a0ccdae45658e9231c1562edcc869.jpg" style="height:433px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489485222b255d82dc44a5a50f55124eee4715.png" style="height:240px; width:325px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894835c7fc7ed5a631307159409310aaf30bc.jpg" style="height:433px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489482e85ca842741c05758f0e1810c3eefbfd.jpg" style="height:253px; width:325px" /></p>

<p><img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/1458489482d6e64a57ddadfafb41929d9a26493c3d.jpg" style="height:433px; width:325px" />&nbsp;&nbsp;<img alt="" src="http://oss-img.ilpsg.com/ilpsg/upload/images/2016/03/14584894828608f442602925c741df6e37ab9bfd08.jpg" style="height:330px; width:325px" /></p>`;

class Sample extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.data = null;

    this.input = {
      query: ''
    }

    this.state = {
      dataSource: this.ds.cloneWithRows(this.data ? this.data.items : []),
    }
  }

  render() {
    return (
      <ScrollView>
        <DOMView
          html={html}
          maxWidth={SCREEN_WIDTH - 30}
        />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20, // ios header
  },
  list: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 30,
  },
  input: {
    width: Dimensions.get('window').width - 50,
    borderWidth: 1,
    borderColor: '#000000',
  },
  btnSubmit: {
    width: 50,
  },
  separator: {
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  }
});

AppRegistry.registerComponent('Sample', () => Sample);
