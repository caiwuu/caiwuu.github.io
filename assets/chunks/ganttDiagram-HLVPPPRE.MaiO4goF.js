import{_ as c,d as ie,s as ht,g as mt,p as kt,q as yt,c as vt,b as gt,t as pt,k as Tt,l as pe,j as xt,e as bt,u as wt}from"../app.C7o4Q1z9.js";import{g as z,s as ke,t as _t,m as Dt,h as St,l as Ct,i as Et,j as Mt,k as He,n as qe,p as Ue,q as Xe,r as je,u as Ze,v as Qe,w as It,x as At,y as Lt,z as Yt,A as Ft,B as Wt,C as Ot,D as Vt}from"./theme.DUodbVWC.js";import"./framework.B5h9y4_0.js";var Se="day",Pt="week",zt="year",Rt="YYYY-MM-DDTHH:mm:ssZ",Bt="isoweek";const Nt=function(e,t,r){var a=function(T,_){var g=(_?r.utc:r)().year(T).startOf(zt),E=4-g.isoWeekday();return g.isoWeekday()>4&&(E+=7),g.add(E,Se)},s=function(T){return T.add(4-T.isoWeekday(),Se)},o=t.prototype;o.isoWeekYear=function(){var v=s(this);return v.year()},o.isoWeek=function(v){if(!this.$utils().u(v))return this.add((v-this.isoWeek())*7,Se);var T=s(this),_=a(this.isoWeekYear(),this.$u);return T.diff(_,Pt)+1},o.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var f=o.startOf;o.startOf=function(v,T){var _=this.$utils(),g=_.u(T)?!0:T,E=_.p(v);return E===Bt?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(v,T)}};var Gt=function(t){return t.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(r,a,s){return a||s.slice(1)})},Ht={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},qt=function(t,r){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(a,s,o){var f=o&&o.toUpperCase();return s||r[o]||Ht[o]||Gt(r[f])})},Ut=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Xt=/\d/,ye=/\d\d/,jt=/\d{3}/,Zt=/\d{4}/,q=/\d\d?/,Qt=/[+-]?\d+/,Kt=/[+-]\d\d:?(\d\d)?|Z/,le=/\d*[^-_:/,()\s\d]+/,ee={},rt=function(t){return t=+t,t+(t>68?1900:2e3)};function Jt(e){if(!e||e==="Z")return 0;var t=e.match(/([+-]|\d\d)/g),r=+(t[1]*60)+(+t[2]||0);return r===0?0:t[0]==="+"?-r:r}var B=function(t){return function(r){this[t]=+r}},Ke=[Kt,function(e){var t=this.zone||(this.zone={});t.offset=Jt(e)}],Ce=function(t){var r=ee[t];return r&&(r.indexOf?r:r.s.concat(r.f))},Je=function(t,r){var a,s=ee,o=s.meridiem;if(!o)a=t===(r?"pm":"PM");else for(var f=1;f<=24;f+=1)if(t.indexOf(o(f,0,r))>-1){a=f>12;break}return a},$t={A:[le,function(e){this.afternoon=Je(e,!1)}],a:[le,function(e){this.afternoon=Je(e,!0)}],S:[Xt,function(e){this.milliseconds=+e*100}],SS:[ye,function(e){this.milliseconds=+e*10}],SSS:[jt,function(e){this.milliseconds=+e}],s:[q,B("seconds")],ss:[q,B("seconds")],m:[q,B("minutes")],mm:[q,B("minutes")],H:[q,B("hours")],h:[q,B("hours")],HH:[q,B("hours")],hh:[q,B("hours")],D:[q,B("day")],DD:[ye,B("day")],Do:[le,function(e){var t=ee,r=t.ordinal,a=e.match(/\d+/);if(this.day=a[0],!!r)for(var s=1;s<=31;s+=1)r(s).replace(/\[|\]/g,"")===e&&(this.day=s)}],M:[q,B("month")],MM:[ye,B("month")],MMM:[le,function(e){var t=Ce("months"),r=Ce("monthsShort"),a=(r||t.map(function(s){return s.slice(0,3)})).indexOf(e)+1;if(a<1)throw new Error;this.month=a%12||a}],MMMM:[le,function(e){var t=Ce("months"),r=t.indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[Qt,B("year")],YY:[ye,function(e){this.year=rt(e)}],YYYY:[Zt,B("year")],Z:Ke,ZZ:Ke};function er(e){var t=e.afternoon;if(t!==void 0){var r=e.hours;t?r<12&&(e.hours+=12):r===12&&(e.hours=0),delete e.afternoon}}function tr(e){e=qt(e,ee&&ee.formats);for(var t=e.match(Ut),r=t.length,a=0;a<r;a+=1){var s=t[a],o=$t[s],f=o&&o[0],v=o&&o[1];v?t[a]={regex:f,parser:v}:t[a]=s.replace(/^\[|\]$/g,"")}return function(T){for(var _={},g=0,E=0;g<r;g+=1){var O=t[g];if(typeof O=="string")E+=O.length;else{var A=O.regex,Y=O.parser,p=T.slice(E),P=A.exec(p),N=P[0];Y.call(_,N),T=T.replace(N,"")}}return er(_),_}}var rr=function(t,r,a){try{if(["x","X"].indexOf(r)>-1)return new Date((r==="X"?1e3:1)*t);var s=tr(r),o=s(t),f=o.year,v=o.month,T=o.day,_=o.hours,g=o.minutes,E=o.seconds,O=o.milliseconds,A=o.zone,Y=new Date,p=T||(!f&&!v?Y.getDate():1),P=f||Y.getFullYear(),N=0;f&&!v||(N=v>0?v-1:Y.getMonth());var X=_||0,j=g||0,Z=E||0,Q=O||0;return A?new Date(Date.UTC(P,N,p,X,j,Z,Q+A.offset*60*1e3)):a?new Date(Date.UTC(P,N,p,X,j,Z,Q)):new Date(P,N,p,X,j,Z,Q)}catch{return new Date("")}};const ar=function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(rt=e.parseTwoDigitYear);var a=t.prototype,s=a.parse;a.parse=function(o){var f=o.date,v=o.utc,T=o.args;this.$u=v;var _=T[1];if(typeof _=="string"){var g=T[2]===!0,E=T[3]===!0,O=g||E,A=T[2];E&&(A=T[2]),ee=this.$locale(),!g&&A&&(ee=r.Ls[A]),this.$d=rr(f,_,v),this.init(),A&&A!==!0&&(this.$L=this.locale(A).$L),O&&f!=this.format(_)&&(this.$d=new Date("")),ee={}}else if(_ instanceof Array)for(var Y=_.length,p=1;p<=Y;p+=1){T[1]=_[p-1];var P=r.apply(this,T);if(P.isValid()){this.$d=P.$d,this.$L=P.$L,this.init();break}p===Y&&(this.$d=new Date(""))}else s.call(this,o)}},sr=function(e,t){var r=t.prototype,a=r.format;r.format=function(s){var o=this,f=this.$locale();if(!this.isValid())return a.bind(this)(s);var v=this.$utils(),T=s||Rt,_=T.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(g){switch(g){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return f.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return f.ordinal(o.week(),"W");case"w":case"ww":return v.s(o.week(),g==="w"?1:2,"0");case"W":case"WW":return v.s(o.isoWeek(),g==="W"?1:2,"0");case"k":case"kk":return v.s(String(o.$H===0?24:o.$H),g==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return g}});return a.bind(this)(_)}};var Ee=function(){var e=c(function(C,l,d,m){for(d=d||{},m=C.length;m--;d[C[m]]=l);return d},"o"),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],a=[1,27],s=[1,28],o=[1,29],f=[1,30],v=[1,31],T=[1,32],_=[1,33],g=[1,34],E=[1,9],O=[1,10],A=[1,11],Y=[1,12],p=[1,13],P=[1,14],N=[1,15],X=[1,16],j=[1,19],Z=[1,20],Q=[1,21],ae=[1,22],ce=[1,23],y=[1,25],D=[1,35],b={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(l,d,m,h,x,n,u){var i=n.length-1;switch(x){case 1:return n[i-1];case 2:this.$=[];break;case 3:n[i-1].push(n[i]),this.$=n[i-1];break;case 4:case 5:this.$=n[i];break;case 6:case 7:this.$=[];break;case 8:h.setWeekday("monday");break;case 9:h.setWeekday("tuesday");break;case 10:h.setWeekday("wednesday");break;case 11:h.setWeekday("thursday");break;case 12:h.setWeekday("friday");break;case 13:h.setWeekday("saturday");break;case 14:h.setWeekday("sunday");break;case 15:h.setWeekend("friday");break;case 16:h.setWeekend("saturday");break;case 17:h.setDateFormat(n[i].substr(11)),this.$=n[i].substr(11);break;case 18:h.enableInclusiveEndDates(),this.$=n[i].substr(18);break;case 19:h.TopAxis(),this.$=n[i].substr(8);break;case 20:h.setAxisFormat(n[i].substr(11)),this.$=n[i].substr(11);break;case 21:h.setTickInterval(n[i].substr(13)),this.$=n[i].substr(13);break;case 22:h.setExcludes(n[i].substr(9)),this.$=n[i].substr(9);break;case 23:h.setIncludes(n[i].substr(9)),this.$=n[i].substr(9);break;case 24:h.setTodayMarker(n[i].substr(12)),this.$=n[i].substr(12);break;case 27:h.setDiagramTitle(n[i].substr(6)),this.$=n[i].substr(6);break;case 28:this.$=n[i].trim(),h.setAccTitle(this.$);break;case 29:case 30:this.$=n[i].trim(),h.setAccDescription(this.$);break;case 31:h.addSection(n[i].substr(8)),this.$=n[i].substr(8);break;case 33:h.addTask(n[i-1],n[i]),this.$="task";break;case 34:this.$=n[i-1],h.setClickEvent(n[i-1],n[i],null);break;case 35:this.$=n[i-2],h.setClickEvent(n[i-2],n[i-1],n[i]);break;case 36:this.$=n[i-2],h.setClickEvent(n[i-2],n[i-1],null),h.setLink(n[i-2],n[i]);break;case 37:this.$=n[i-3],h.setClickEvent(n[i-3],n[i-2],n[i-1]),h.setLink(n[i-3],n[i]);break;case 38:this.$=n[i-2],h.setClickEvent(n[i-2],n[i],null),h.setLink(n[i-2],n[i-1]);break;case 39:this.$=n[i-3],h.setClickEvent(n[i-3],n[i-1],n[i]),h.setLink(n[i-3],n[i-2]);break;case 40:this.$=n[i-1],h.setLink(n[i-1],n[i]);break;case 41:case 47:this.$=n[i-1]+" "+n[i];break;case 42:case 43:case 45:this.$=n[i-2]+" "+n[i-1]+" "+n[i];break;case 44:case 46:this.$=n[i-3]+" "+n[i-2]+" "+n[i-1]+" "+n[i];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:a,14:s,15:o,16:f,17:v,18:T,19:18,20:_,21:g,22:E,23:O,24:A,25:Y,26:p,27:P,28:N,29:X,30:j,31:Z,33:Q,35:ae,36:ce,37:24,38:y,40:D},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:r,13:a,14:s,15:o,16:f,17:v,18:T,19:18,20:_,21:g,22:E,23:O,24:A,25:Y,26:p,27:P,28:N,29:X,30:j,31:Z,33:Q,35:ae,36:ce,37:24,38:y,40:D},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:c(function(l,d){if(d.recoverable)this.trace(l);else{var m=new Error(l);throw m.hash=d,m}},"parseError"),parse:c(function(l){var d=this,m=[0],h=[],x=[null],n=[],u=this.table,i="",I=0,S=0,M=2,V=1,L=n.slice.call(arguments,1),F=Object.create(this.lexer),K={yy:{}};for(var be in this.yy)Object.prototype.hasOwnProperty.call(this.yy,be)&&(K.yy[be]=this.yy[be]);F.setInput(l,K.yy),K.yy.lexer=F,K.yy.parser=this,typeof F.yylloc>"u"&&(F.yylloc={});var we=F.yylloc;n.push(we);var dt=F.options&&F.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ft(G){m.length=m.length-2*G,x.length=x.length-G,n.length=n.length-G}c(ft,"popStack");function Ne(){var G;return G=h.pop()||F.lex()||V,typeof G!="number"&&(G instanceof Array&&(h=G,G=h.pop()),G=d.symbols_[G]||G),G}c(Ne,"lex");for(var R,te,H,_e,se={},he,J,Ge,me;;){if(te=m[m.length-1],this.defaultActions[te]?H=this.defaultActions[te]:((R===null||typeof R>"u")&&(R=Ne()),H=u[te]&&u[te][R]),typeof H>"u"||!H.length||!H[0]){var De="";me=[];for(he in u[te])this.terminals_[he]&&he>M&&me.push("'"+this.terminals_[he]+"'");F.showPosition?De="Parse error on line "+(I+1)+`:
`+F.showPosition()+`
Expecting `+me.join(", ")+", got '"+(this.terminals_[R]||R)+"'":De="Parse error on line "+(I+1)+": Unexpected "+(R==V?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(De,{text:F.match,token:this.terminals_[R]||R,line:F.yylineno,loc:we,expected:me})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+te+", token: "+R);switch(H[0]){case 1:m.push(R),x.push(F.yytext),n.push(F.yylloc),m.push(H[1]),R=null,S=F.yyleng,i=F.yytext,I=F.yylineno,we=F.yylloc;break;case 2:if(J=this.productions_[H[1]][1],se.$=x[x.length-J],se._$={first_line:n[n.length-(J||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(J||1)].first_column,last_column:n[n.length-1].last_column},dt&&(se._$.range=[n[n.length-(J||1)].range[0],n[n.length-1].range[1]]),_e=this.performAction.apply(se,[i,S,I,K.yy,H[1],x,n].concat(L)),typeof _e<"u")return _e;J&&(m=m.slice(0,-1*J*2),x=x.slice(0,-1*J),n=n.slice(0,-1*J)),m.push(this.productions_[H[1]][0]),x.push(se.$),n.push(se._$),Ge=u[m[m.length-2]][m[m.length-1]],m.push(Ge);break;case 3:return!0}}return!0},"parse")},w=function(){var C={EOF:1,parseError:c(function(d,m){if(this.yy.parser)this.yy.parser.parseError(d,m);else throw new Error(d)},"parseError"),setInput:c(function(l,d){return this.yy=d||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var d=l.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:c(function(l){var d=l.length,m=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),m.length-1&&(this.yylineno-=m.length-1);var x=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:m?(m.length===h.length?this.yylloc.first_column:0)+h[h.length-m.length].length-m[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[x[0],x[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(l){this.unput(this.match.slice(l))},"less"),pastInput:c(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var l=this.pastInput(),d=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:c(function(l,d){var m,h,x;if(this.options.backtrack_lexer&&(x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0))),h=l[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],m=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),m)return m;if(this._backtrack){for(var n in x)this[n]=x[n];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,d,m,h;this._more||(this.yytext="",this.match="");for(var x=this._currentRules(),n=0;n<x.length;n++)if(m=this._input.match(this.rules[x[n]]),m&&(!d||m[0].length>d[0].length)){if(d=m,h=n,this.options.backtrack_lexer){if(l=this.test_match(m,x[n]),l!==!1)return l;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(l=this.test_match(d,x[h]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var d=this.next();return d||this.lex()},"lex"),begin:c(function(d){this.conditionStack.push(d)},"begin"),popState:c(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:c(function(d){this.begin(d)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(d,m,h,x){switch(h){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return C}();b.lexer=w;function k(){this.yy={}}return c(k,"Parser"),k.prototype=b,b.Parser=k,new k}();Ee.parser=Ee;var ir=Ee;z.extend(Nt);z.extend(ar);z.extend(sr);var $e={friday:5,saturday:6},U="",Le="",Ye=void 0,Fe="",ue=[],de=[],We=new Map,Oe=[],Te=[],oe="",Ve="",at=["active","done","crit","milestone"],Pe=[],fe=!1,ze=!1,Re="sunday",xe="saturday",Me=0,nr=c(function(){Oe=[],Te=[],oe="",Pe=[],ve=0,Ae=void 0,ge=void 0,W=[],U="",Le="",Ve="",Ye=void 0,Fe="",ue=[],de=[],fe=!1,ze=!1,Me=0,We=new Map,pt(),Re="sunday",xe="saturday"},"clear"),or=c(function(e){Le=e},"setAxisFormat"),cr=c(function(){return Le},"getAxisFormat"),lr=c(function(e){Ye=e},"setTickInterval"),ur=c(function(){return Ye},"getTickInterval"),dr=c(function(e){Fe=e},"setTodayMarker"),fr=c(function(){return Fe},"getTodayMarker"),hr=c(function(e){U=e},"setDateFormat"),mr=c(function(){fe=!0},"enableInclusiveEndDates"),kr=c(function(){return fe},"endDatesAreInclusive"),yr=c(function(){ze=!0},"enableTopAxis"),vr=c(function(){return ze},"topAxisEnabled"),gr=c(function(e){Ve=e},"setDisplayMode"),pr=c(function(){return Ve},"getDisplayMode"),Tr=c(function(){return U},"getDateFormat"),xr=c(function(e){ue=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),br=c(function(){return ue},"getIncludes"),wr=c(function(e){de=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),_r=c(function(){return de},"getExcludes"),Dr=c(function(){return We},"getLinks"),Sr=c(function(e){oe=e,Oe.push(e)},"addSection"),Cr=c(function(){return Oe},"getSections"),Er=c(function(){let e=et();const t=10;let r=0;for(;!e&&r<t;)e=et(),r++;return Te=W,Te},"getTasks"),st=c(function(e,t,r,a){return a.includes(e.format(t.trim()))?!1:r.includes("weekends")&&(e.isoWeekday()===$e[xe]||e.isoWeekday()===$e[xe]+1)||r.includes(e.format("dddd").toLowerCase())?!0:r.includes(e.format(t.trim()))},"isInvalidDate"),Mr=c(function(e){Re=e},"setWeekday"),Ir=c(function(){return Re},"getWeekday"),Ar=c(function(e){xe=e},"setWeekend"),it=c(function(e,t,r,a){if(!r.length||e.manualEndTime)return;let s;e.startTime instanceof Date?s=z(e.startTime):s=z(e.startTime,t,!0),s=s.add(1,"d");let o;e.endTime instanceof Date?o=z(e.endTime):o=z(e.endTime,t,!0);const[f,v]=Lr(s,o,t,r,a);e.endTime=f.toDate(),e.renderEndTime=v},"checkTaskDates"),Lr=c(function(e,t,r,a,s){let o=!1,f=null;for(;e<=t;)o||(f=t.toDate()),o=st(e,r,a,s),o&&(t=t.add(1,"d")),e=e.add(1,"d");return[t,f]},"fixTaskDates"),Ie=c(function(e,t,r){r=r.trim();const s=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(s!==null){let f=null;for(const T of s.groups.ids.split(" ")){let _=re(T);_!==void 0&&(!f||_.endTime>f.endTime)&&(f=_)}if(f)return f.endTime;const v=new Date;return v.setHours(0,0,0,0),v}let o=z(r,t.trim(),!0);if(o.isValid())return o.toDate();{pe.debug("Invalid date:"+r),pe.debug("With date format:"+t.trim());const f=new Date(r);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+r);return f}},"getStartDate"),nt=c(function(e){const t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t!==null?[Number.parseFloat(t[1]),t[2]]:[NaN,"ms"]},"parseDuration"),ot=c(function(e,t,r,a=!1){r=r.trim();const o=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(o!==null){let g=null;for(const O of o.groups.ids.split(" ")){let A=re(O);A!==void 0&&(!g||A.startTime<g.startTime)&&(g=A)}if(g)return g.startTime;const E=new Date;return E.setHours(0,0,0,0),E}let f=z(r,t.trim(),!0);if(f.isValid())return a&&(f=f.add(1,"d")),f.toDate();let v=z(e);const[T,_]=nt(r);if(!Number.isNaN(T)){const g=v.add(T,_);g.isValid()&&(v=g)}return v.toDate()},"getEndDate"),ve=0,ne=c(function(e){return e===void 0?(ve=ve+1,"task"+ve):e},"parseId"),Yr=c(function(e,t){let r;t.substr(0,1)===":"?r=t.substr(1,t.length):r=t;const a=r.split(","),s={};Be(a,s,at);for(let f=0;f<a.length;f++)a[f]=a[f].trim();let o="";switch(a.length){case 1:s.id=ne(),s.startTime=e.endTime,o=a[0];break;case 2:s.id=ne(),s.startTime=Ie(void 0,U,a[0]),o=a[1];break;case 3:s.id=ne(a[0]),s.startTime=Ie(void 0,U,a[1]),o=a[2];break}return o&&(s.endTime=ot(s.startTime,U,o,fe),s.manualEndTime=z(o,"YYYY-MM-DD",!0).isValid(),it(s,U,de,ue)),s},"compileData"),Fr=c(function(e,t){let r;t.substr(0,1)===":"?r=t.substr(1,t.length):r=t;const a=r.split(","),s={};Be(a,s,at);for(let o=0;o<a.length;o++)a[o]=a[o].trim();switch(a.length){case 1:s.id=ne(),s.startTime={type:"prevTaskEnd",id:e},s.endTime={data:a[0]};break;case 2:s.id=ne(),s.startTime={type:"getStartDate",startData:a[0]},s.endTime={data:a[1]};break;case 3:s.id=ne(a[0]),s.startTime={type:"getStartDate",startData:a[1]},s.endTime={data:a[2]};break}return s},"parseData"),Ae,ge,W=[],ct={},Wr=c(function(e,t){const r={section:oe,type:oe,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},a=Fr(ge,t);r.raw.startTime=a.startTime,r.raw.endTime=a.endTime,r.id=a.id,r.prevTaskId=ge,r.active=a.active,r.done=a.done,r.crit=a.crit,r.milestone=a.milestone,r.order=Me,Me++;const s=W.push(r);ge=r.id,ct[r.id]=s-1},"addTask"),re=c(function(e){const t=ct[e];return W[t]},"findTaskById"),Or=c(function(e,t){const r={section:oe,type:oe,description:e,task:e,classes:[]},a=Yr(Ae,t);r.startTime=a.startTime,r.endTime=a.endTime,r.id=a.id,r.active=a.active,r.done=a.done,r.crit=a.crit,r.milestone=a.milestone,Ae=r,Te.push(r)},"addTaskOrg"),et=c(function(){const e=c(function(r){const a=W[r];let s="";switch(W[r].raw.startTime.type){case"prevTaskEnd":{const o=re(a.prevTaskId);a.startTime=o.endTime;break}case"getStartDate":s=Ie(void 0,U,W[r].raw.startTime.startData),s&&(W[r].startTime=s);break}return W[r].startTime&&(W[r].endTime=ot(W[r].startTime,U,W[r].raw.endTime.data,fe),W[r].endTime&&(W[r].processed=!0,W[r].manualEndTime=z(W[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),it(W[r],U,de,ue))),W[r].processed},"compileTask");let t=!0;for(const[r,a]of W.entries())e(r),t=t&&a.processed;return t},"compileTasks"),Vr=c(function(e,t){let r=t;ie().securityLevel!=="loose"&&(r=Tt(t)),e.split(",").forEach(function(a){re(a)!==void 0&&(ut(a,()=>{window.open(r,"_self")}),We.set(a,r))}),lt(e,"clickable")},"setLink"),lt=c(function(e,t){e.split(",").forEach(function(r){let a=re(r);a!==void 0&&a.classes.push(t)})},"setClass"),Pr=c(function(e,t,r){if(ie().securityLevel!=="loose"||t===void 0)return;let a=[];if(typeof r=="string"){a=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<a.length;o++){let f=a[o].trim();f.startsWith('"')&&f.endsWith('"')&&(f=f.substr(1,f.length-2)),a[o]=f}}a.length===0&&a.push(e),re(e)!==void 0&&ut(e,()=>{wt.runFunc(t,...a)})},"setClickFun"),ut=c(function(e,t){Pe.push(function(){const r=document.querySelector(`[id="${e}"]`);r!==null&&r.addEventListener("click",function(){t()})},function(){const r=document.querySelector(`[id="${e}-text"]`);r!==null&&r.addEventListener("click",function(){t()})})},"pushFun"),zr=c(function(e,t,r){e.split(",").forEach(function(a){Pr(a,t,r)}),lt(e,"clickable")},"setClickEvent"),Rr=c(function(e){Pe.forEach(function(t){t(e)})},"bindFunctions"),Br={getConfig:c(()=>ie().gantt,"getConfig"),clear:nr,setDateFormat:hr,getDateFormat:Tr,enableInclusiveEndDates:mr,endDatesAreInclusive:kr,enableTopAxis:yr,topAxisEnabled:vr,setAxisFormat:or,getAxisFormat:cr,setTickInterval:lr,getTickInterval:ur,setTodayMarker:dr,getTodayMarker:fr,setAccTitle:ht,getAccTitle:mt,setDiagramTitle:kt,getDiagramTitle:yt,setDisplayMode:gr,getDisplayMode:pr,setAccDescription:vt,getAccDescription:gt,addSection:Sr,getSections:Cr,getTasks:Er,addTask:Wr,findTaskById:re,addTaskOrg:Or,setIncludes:xr,getIncludes:br,setExcludes:wr,getExcludes:_r,setClickEvent:zr,setLink:Vr,getLinks:Dr,bindFunctions:Rr,parseDuration:nt,isInvalidDate:st,setWeekday:Mr,getWeekday:Ir,setWeekend:Ar};function Be(e,t,r){let a=!0;for(;a;)a=!1,r.forEach(function(s){const o="^\\s*"+s+"\\s*$",f=new RegExp(o);e[0].match(f)&&(t[s]=!0,e.shift(1),a=!0)})}c(Be,"getTaskTags");var Nr=c(function(){pe.debug("Something is calling, setConf, remove the call")},"setConf"),tt={monday:At,tuesday:Lt,wednesday:Yt,thursday:Ft,friday:Wt,saturday:Ot,sunday:Vt},Gr=c((e,t)=>{let r=[...e].map(()=>-1/0),a=[...e].sort((o,f)=>o.startTime-f.startTime||o.order-f.order),s=0;for(const o of a)for(let f=0;f<r.length;f++)if(o.startTime>=r[f]){r[f]=o.endTime,o.order=f+t,f>s&&(s=f);break}return s},"getMaxIntersections"),$,Hr=c(function(e,t,r,a){const s=ie().gantt,o=ie().securityLevel;let f;o==="sandbox"&&(f=ke("#i"+t));const v=o==="sandbox"?ke(f.nodes()[0].contentDocument.body):ke("body"),T=o==="sandbox"?f.nodes()[0].contentDocument:document,_=T.getElementById(t);$=_.parentElement.offsetWidth,$===void 0&&($=1200),s.useWidth!==void 0&&($=s.useWidth);const g=a.db.getTasks();let E=[];for(const y of g)E.push(y.type);E=ce(E);const O={};let A=2*s.topPadding;if(a.db.getDisplayMode()==="compact"||s.displayMode==="compact"){const y={};for(const b of g)y[b.section]===void 0?y[b.section]=[b]:y[b.section].push(b);let D=0;for(const b of Object.keys(y)){const w=Gr(y[b],D)+1;D+=w,A+=w*(s.barHeight+s.barGap),O[b]=w}}else{A+=g.length*(s.barHeight+s.barGap);for(const y of E)O[y]=g.filter(D=>D.type===y).length}_.setAttribute("viewBox","0 0 "+$+" "+A);const Y=v.select(`[id="${t}"]`),p=_t().domain([Dt(g,function(y){return y.startTime}),St(g,function(y){return y.endTime})]).rangeRound([0,$-s.leftPadding-s.rightPadding]);function P(y,D){const b=y.startTime,w=D.startTime;let k=0;return b>w?k=1:b<w&&(k=-1),k}c(P,"taskCompare"),g.sort(P),N(g,$,A),xt(Y,A,$,s.useMaxWidth),Y.append("text").text(a.db.getDiagramTitle()).attr("x",$/2).attr("y",s.titleTopMargin).attr("class","titleText");function N(y,D,b){const w=s.barHeight,k=w+s.barGap,C=s.topPadding,l=s.leftPadding,d=Ct().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(Et);j(k,C,l,D,b,y,a.db.getExcludes(),a.db.getIncludes()),Z(l,C,D,b),X(y,k,C,l,w,d,D),Q(k,C),ae(l,C,D,b)}c(N,"makeGantt");function X(y,D,b,w,k,C,l){const m=[...new Set(y.map(u=>u.order))].map(u=>y.find(i=>i.order===u));Y.append("g").selectAll("rect").data(m).enter().append("rect").attr("x",0).attr("y",function(u,i){return i=u.order,i*D+b-2}).attr("width",function(){return l-s.rightPadding/2}).attr("height",D).attr("class",function(u){for(const[i,I]of E.entries())if(u.type===I)return"section section"+i%s.numberSectionStyles;return"section section0"});const h=Y.append("g").selectAll("rect").data(y).enter(),x=a.db.getLinks();if(h.append("rect").attr("id",function(u){return u.id}).attr("rx",3).attr("ry",3).attr("x",function(u){return u.milestone?p(u.startTime)+w+.5*(p(u.endTime)-p(u.startTime))-.5*k:p(u.startTime)+w}).attr("y",function(u,i){return i=u.order,i*D+b}).attr("width",function(u){return u.milestone?k:p(u.renderEndTime||u.endTime)-p(u.startTime)}).attr("height",k).attr("transform-origin",function(u,i){return i=u.order,(p(u.startTime)+w+.5*(p(u.endTime)-p(u.startTime))).toString()+"px "+(i*D+b+.5*k).toString()+"px"}).attr("class",function(u){const i="task";let I="";u.classes.length>0&&(I=u.classes.join(" "));let S=0;for(const[V,L]of E.entries())u.type===L&&(S=V%s.numberSectionStyles);let M="";return u.active?u.crit?M+=" activeCrit":M=" active":u.done?u.crit?M=" doneCrit":M=" done":u.crit&&(M+=" crit"),M.length===0&&(M=" task"),u.milestone&&(M=" milestone "+M),M+=S,M+=" "+I,i+M}),h.append("text").attr("id",function(u){return u.id+"-text"}).text(function(u){return u.task}).attr("font-size",s.fontSize).attr("x",function(u){let i=p(u.startTime),I=p(u.renderEndTime||u.endTime);u.milestone&&(i+=.5*(p(u.endTime)-p(u.startTime))-.5*k),u.milestone&&(I=i+k);const S=this.getBBox().width;return S>I-i?I+S+1.5*s.leftPadding>l?i+w-5:I+w+5:(I-i)/2+i+w}).attr("y",function(u,i){return i=u.order,i*D+s.barHeight/2+(s.fontSize/2-2)+b}).attr("text-height",k).attr("class",function(u){const i=p(u.startTime);let I=p(u.endTime);u.milestone&&(I=i+k);const S=this.getBBox().width;let M="";u.classes.length>0&&(M=u.classes.join(" "));let V=0;for(const[F,K]of E.entries())u.type===K&&(V=F%s.numberSectionStyles);let L="";return u.active&&(u.crit?L="activeCritText"+V:L="activeText"+V),u.done?u.crit?L=L+" doneCritText"+V:L=L+" doneText"+V:u.crit&&(L=L+" critText"+V),u.milestone&&(L+=" milestoneText"),S>I-i?I+S+1.5*s.leftPadding>l?M+" taskTextOutsideLeft taskTextOutside"+V+" "+L:M+" taskTextOutsideRight taskTextOutside"+V+" "+L+" width-"+S:M+" taskText taskText"+V+" "+L+" width-"+S}),ie().securityLevel==="sandbox"){let u;u=ke("#i"+t);const i=u.nodes()[0].contentDocument;h.filter(function(I){return x.has(I.id)}).each(function(I){var S=i.querySelector("#"+I.id),M=i.querySelector("#"+I.id+"-text");const V=S.parentNode;var L=i.createElement("a");L.setAttribute("xlink:href",x.get(I.id)),L.setAttribute("target","_top"),V.appendChild(L),L.appendChild(S),L.appendChild(M)})}}c(X,"drawRects");function j(y,D,b,w,k,C,l,d){if(l.length===0&&d.length===0)return;let m,h;for(const{startTime:S,endTime:M}of C)(m===void 0||S<m)&&(m=S),(h===void 0||M>h)&&(h=M);if(!m||!h)return;if(z(h).diff(z(m),"year")>5){pe.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const x=a.db.getDateFormat(),n=[];let u=null,i=z(m);for(;i.valueOf()<=h;)a.db.isInvalidDate(i,x,l,d)?u?u.end=i:u={start:i,end:i}:u&&(n.push(u),u=null),i=i.add(1,"d");Y.append("g").selectAll("rect").data(n).enter().append("rect").attr("id",function(S){return"exclude-"+S.start.format("YYYY-MM-DD")}).attr("x",function(S){return p(S.start)+b}).attr("y",s.gridLineStartPadding).attr("width",function(S){const M=S.end.add(1,"day");return p(M)-p(S.start)}).attr("height",k-D-s.gridLineStartPadding).attr("transform-origin",function(S,M){return(p(S.start)+b+.5*(p(S.end)-p(S.start))).toString()+"px "+(M*y+.5*k).toString()+"px"}).attr("class","exclude-range")}c(j,"drawExcludeDays");function Z(y,D,b,w){let k=Mt(p).tickSize(-w+D+s.gridLineStartPadding).tickFormat(He(a.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));const l=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||s.tickInterval);if(l!==null){const d=l[1],m=l[2],h=a.db.getWeekday()||s.weekday;switch(m){case"millisecond":k.ticks(Qe.every(d));break;case"second":k.ticks(Ze.every(d));break;case"minute":k.ticks(je.every(d));break;case"hour":k.ticks(Xe.every(d));break;case"day":k.ticks(Ue.every(d));break;case"week":k.ticks(tt[h].every(d));break;case"month":k.ticks(qe.every(d));break}}if(Y.append("g").attr("class","grid").attr("transform","translate("+y+", "+(w-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||s.topAxis){let d=It(p).tickSize(-w+D+s.gridLineStartPadding).tickFormat(He(a.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(l!==null){const m=l[1],h=l[2],x=a.db.getWeekday()||s.weekday;switch(h){case"millisecond":d.ticks(Qe.every(m));break;case"second":d.ticks(Ze.every(m));break;case"minute":d.ticks(je.every(m));break;case"hour":d.ticks(Xe.every(m));break;case"day":d.ticks(Ue.every(m));break;case"week":d.ticks(tt[x].every(m));break;case"month":d.ticks(qe.every(m));break}}Y.append("g").attr("class","grid").attr("transform","translate("+y+", "+D+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(Z,"makeGrid");function Q(y,D){let b=0;const w=Object.keys(O).map(k=>[k,O[k]]);Y.append("g").selectAll("text").data(w).enter().append(function(k){const C=k[0].split(bt.lineBreakRegex),l=-(C.length-1)/2,d=T.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("dy",l+"em");for(const[m,h]of C.entries()){const x=T.createElementNS("http://www.w3.org/2000/svg","tspan");x.setAttribute("alignment-baseline","central"),x.setAttribute("x","10"),m>0&&x.setAttribute("dy","1em"),x.textContent=h,d.appendChild(x)}return d}).attr("x",10).attr("y",function(k,C){if(C>0)for(let l=0;l<C;l++)return b+=w[C-1][1],k[1]*y/2+b*y+D;else return k[1]*y/2+D}).attr("font-size",s.sectionFontSize).attr("class",function(k){for(const[C,l]of E.entries())if(k[0]===l)return"sectionTitle sectionTitle"+C%s.numberSectionStyles;return"sectionTitle"})}c(Q,"vertLabels");function ae(y,D,b,w){const k=a.db.getTodayMarker();if(k==="off")return;const C=Y.append("g").attr("class","today"),l=new Date,d=C.append("line");d.attr("x1",p(l)+y).attr("x2",p(l)+y).attr("y1",s.titleTopMargin).attr("y2",w-s.titleTopMargin).attr("class","today"),k!==""&&d.attr("style",k.replace(/,/g,";"))}c(ae,"drawToday");function ce(y){const D={},b=[];for(let w=0,k=y.length;w<k;++w)Object.prototype.hasOwnProperty.call(D,y[w])||(D[y[w]]=!0,b.push(y[w]));return b}c(ce,"checkUnique")},"draw"),qr={setConf:Nr,draw:Hr},Ur=c(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles"),Xr=Ur,Kr={parser:ir,db:Br,renderer:qr,styles:Xr};export{Kr as diagram};
