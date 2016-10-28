var http=require('http');
var pdata = {
    "format": "TeX,MathML",
    "svg":true,
    "mml":false,
    "renderer":"SVG",
    "png":false,
    "html":"<p align=\"left\"><b>1</b><b></b></p><p align=\"left\"><math display='inline'><semantics> <mtable columnalign='left'> <mtr> <mtd> <mtext>I=</mtext><mstyle displaystyle='true'> <mrow> <munder><mo>&#x222C;</mo> <mi>D</mi> </munder> <mrow><mi>f</mi><mo stretchy='false'>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy='false'>)</mo><mi>d</mi><mo>&#x03C3;</mo><mo>=</mo><munder> <mrow><mi>lim</mi></mrow> <mrow><mi>d</mi><mo>&#x2192;</mo><mn>0</mn></mrow> </munder> <mstyle displaystyle='true'> <munderover><mo>&#x2211;</mo> <mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi> </munderover> <mrow><mi>f</mi><mo stretchy='false'>(</mo><msub><mo>&#x03BE;</mo><mrow><mi>i</mi><mo>,</mo></mrow> </msub> <msub><mo>&#x03B7;</mo><mi>i</mi> </msub> <mo stretchy='false'>)</mo><mo>&#x0394;</mo><msub><mo>&#x03C3;</mo><mi>i</mi> </msub> </mrow></mstyle></mrow> </mrow></mstyle><mo>,</mo><mo>&#x5176;</mo><mo>&#x4E2D;</mo><mi>d</mi><mo>=</mo><munder> <mstyle mathsize='140%' displaystyle='true'><mrow> <mi>max</mi></mrow></mstyle> <mrow><mn>1</mn><mo>&#x2264;</mo><mi>i</mi><mo>&#x2264;</mo><mi>n</mi></mrow> </munder> <mrow><mo>{</mo><mrow> <msub> <mi>d</mi> <mi>i</mi> </msub> </mrow><mo>}</mo></mrow><mo>,</mo> </mtd> </mtr> <mtr> <mtd> <msub> <mi>d</mi> <mi>i</mi> </msub><mo>&#x4E3A;</mo><mo>&#x0394;</mo><msub> <mo>&#x03C3;</mo> <mtext>i</mtext> </msub><mo>&#x7684;</mo><mo>&#x76F4;</mo><mo>&#x5F84;</mo><mo>&#xFF08;</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mo>&#x22EF;</mo><mi>n</mi><mo stretchy='false'>)</mo> </mtd> </mtr> </mtable> </semantics></math>test test</p>",
    "speakText": true,
    "speakRuleset": "mathspeak",
    "speakStyle": "default",
    "ex": 6,
    "width": 40,
    "xmlns": "mml",
    "linebreaks":  { automatic: true }
};

var datastring = JSON.stringify(pdata);

var options = {
  'hostname': 'localhost',
  'port': 8003,
  'path': '/',
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/json',
    'Content-Length': datastring.length
    }
};

var request = http.request(options, function(response){
    response.setEncoding('utf-8');
    var body = '';
    response.on('data', function(data){body += data;});
    response.on('end', function(){
        console.log(body);
    });
});

request.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

request.write(datastring);
request.end();