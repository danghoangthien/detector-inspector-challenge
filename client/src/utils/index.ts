import { load } from 'cheerio';
import axios from 'axios';

function startsWithNumber(text: string) {
  const regex = /^\d/;
  return regex.test(text);
}

// retrieve data from table which parse from given url
// const url = 'https://example.com/mytable.html';
// const tableData = getTableDataFromURL(url);
export const getTableDataFromURL = async (url: string) => {
  const { data: { html } } = await axios.post(`http://localhost:4001/url/parse`, {url});
  return parseTableDataFromHtml(html);
}


export const parseTableDataFromHtml = async (html: string) => {
  // parse the HTML content with Cheerio
  const $ = load(html);
  //let tableData: any[] = [];
  let data: any[] = [];
  let labelIndex: number | null = null;
  let secondaryIndex: number | null = null;
  // find all table elements
  $('table.sortable').each((i, table) => {
    //console.log('table', table);
    if (secondaryIndex === null && labelIndex === null) {
      $(table).find('tr').each((j, row) => {
        const row_data: string[] = [];
        $(row).find('th,td').each((k, col) => {
          // extract the data from each cell
          const cell_data = $(col).text().trim();
          // get nearest column, determine if it is a label in the chart 
          if (j === 1) {
            if (!startsWithNumber(cell_data) && labelIndex === null) {
              labelIndex = k;
            }
            const tagName = $(col).get(0).tagName
            if (tagName === 'th') {
              labelIndex = k;
            }
            if (tagName === 'td' && startsWithNumber(cell_data) && secondaryIndex === null) {
              console.log('cell_data', k, cell_data, startsWithNumber(cell_data))
              secondaryIndex = k;
            }
          }
          
          row_data.push(cell_data);
        });
        data = [
          ...data,
          row_data
        ];
      });
    }
  });
  return {data, labelIndex, secondaryIndex};
}

