const request = require('request')
const cheerio = require('cheerio')

request('https://fubag-market.ru/catalog/invertory-dlya-ruchnoy-dugovoy-svarki-mma/', (error, response, html) => { 
  if(!error && response.statusCode == 200) {
  const $ = cheerio.load(html);

  const data1 = $('.info');

  // console.log(data1.html())
  // console.log(data1.text())

  // const output = data1.find('a').text();
  // const output = data1.children('a').text();
  // const output = data1.children('a').next().text();

  // console.log(output)\

    $('.info a').each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr('href')


      console.log(link)
    })

  }
});