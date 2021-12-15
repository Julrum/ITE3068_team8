import axios from 'axios';
import cheerio from 'cheerio'

export const getMetadata = async (url) => {

    console.log(url);

    let data = {
        title: undefined,
        description: undefined,
        image: {
            'url': undefined
        },
        publisher: undefined,
        logo: {
            'url': undefined
        }
    };
    
    let status = 'success'

    axios.get(url)
        .then((Response) => {
            const $1 = cheerio.load(Response.data);
            $1('head>meta').each((index, item) => {
                if (item.attribs.property === 'og:title')
                    data.title = item.attribs.content;
                else if(item.attribs.property === 'og:description')
                    data.description = item.attribs.content;
                else if(item.attribs.property === 'og:image'){
                    data.image.url = item.attribs.content;
                }
                else if(item.attribs.property === 'og:site_name')
                    data.publisher = item.attribs.content;
            });

            const $2 = cheerio.load(Response.data);
            $2('head>link').each((index, item) => {
                if (item.attribs.rel === 'shortcut icon') {
                    data.logo.url = item.attribs.href;
                }
            });
        })

    console.log(data)

    return ({ status, data });
};