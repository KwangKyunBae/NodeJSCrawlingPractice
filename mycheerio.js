const request= require('request');
const cheerio = require('cheerio');



request('https://comic.naver.com/webtoon/detail.nhn?titleId=570503&no=295&weekday=thu', function(err,res,body){ //body는 그 페이지에 있는 html소스를 말함.
   
    const $ = cheerio.load(body);
    for(let i =0; i<$('.wt_viewer img').length; i++)
        console.log($('.wt_viewer img')[i].attribs.src);

})
