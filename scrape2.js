const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// WRITE PRICES
writeStream.write(`Str,Link,Price \n`);

request(
  "https://fubag-market.ru/catalog/invertory-dlya-ruchnoy-dugovoy-svarki-mma/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      $("tr").each((i, el) => {
        const title = $(el).find(".title").text();
        let str = title;
        str = str.slice(0, -1);
        const link = $(el).find("a").attr("href");
        const price = $(el).find(".price").text();

        // console.log(str, link, price)
        // WRITE Row to CSV
        writeStream.write(`${title}, ${link}, ${price} \n`);
      });

      console.log("Scraping Done...");
    }
  }
);
